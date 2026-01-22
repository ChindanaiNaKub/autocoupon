const COUPONS = [
    'HAPPYNEWYEAR2026',
    '7S7E7V7E7N7',
    '77EVENT77',
    'LETSGO7K',
    'KEYKEYKEY',
    'DANCINGPOOKI',
    'BRANZEBRANSEL',
    'GRACEOFCHAOS',
    'GOLDENKINGPEPE',
    'TARGETWISH',
    'SENAHAJASENA',
    'CHAOSESSENCE',
    'OBLIVION',
    'DELLONSVSKRIS',
    '100MILLIONHEARTS',
    'HALFGOODHALFEVIL',
    'POOKIFIVEKINDS',
    'SENASTARCRYSTAL',
    'SENA77MEMORY',
    'PSPDJEONGGI',
    'CHLOEMAYALICE',
    'HAPPYSENATIME',
    'TIMEFORADVENTURE',
    'RECONSTRUCTTELUS',
    'ONEMORETIME',
    'KNIGHTSSEVEN',
    'RUBYFARM',
    'SURPRISEFORYOU',
    'TRUSTYFRIEND',
    'PALLANUS'
];

const API_BASE = 'https://coupon.netmarble.com/api';

async function redeemCoupon(pid, couponCode) {
    const response = await fetch(`${API_BASE}/coupon`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        body: JSON.stringify({
            gameCode: 'tskgb',
            langCd: 'EN_US',
            pid: pid,
            couponCode: couponCode,
            cid: '',
            worldId: '',
            slots: []
        })
    });
    return await response.json();
}

async function autoRedeemAll(uuid) {
    console.log(`🎮 Starting auto-redemption for UUID: ${uuid}\n`);
    console.log(`📋 Total coupons to redeem: ${COUPONS.length}\n`);

    let success = 0;
    let failed = 0;
    let expired = 0;
    let alreadyUsed = 0;
    let invalid = 0;

    const results = [];

    for (let i = 0; i < COUPONS.length; i++) {
        const code = COUPONS[i];
        process.stdout.write(`[${i+1}/${COUPONS.length}] Redeeming: ${code}... `);

        const result = await redeemCoupon(uuid, code);

        if (result.success) {
            success++;
            console.log(`✅ SUCCESS`);
            results.push({ code, status: 'SUCCESS', message: 'Reward sent to inbox' });
        } else {
            failed++;
            console.log(`❌ FAILED (${result.errorCode}: ${result.errorMessage})`);

            if (result.errorCode === 24003) {
                expired++;
                results.push({ code, status: 'EXPIRED', message: result.errorMessage });
            } else if (result.errorCode === 24002) {
                alreadyUsed++;
                results.push({ code, status: 'ALREADY_USED', message: result.errorMessage });
            } else {
                invalid++;
                results.push({ code, status: 'FAILED', errorCode: result.errorCode, message: result.errorMessage });
            }
        }

        const delay = 1000 + Math.random() * 2000;
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`🎉 REDEMPTION COMPLETE!`);
    console.log(`${'='.repeat(60)}`);
    console.log(`✅ Success:   ${success}/${COUPONS.length}`);
    console.log(`⏰ Expired:   ${expired}/${COUPONS.length}`);
    console.log(`♻️  Used:      ${alreadyUsed}/${COUPONS.length}`);
    console.log(`❌ Invalid:   ${invalid}/${COUPONS.length}`);
    console.log(`${'='.repeat(60)}\n`);

    console.log(`📊 DETAILED RESULTS:`);
    console.log(`${'='.repeat(60)}`);
    results.forEach(r => {
        const icon = r.status === 'SUCCESS' ? '✅' : r.status === 'EXPIRED' ? '⏰' : r.status === 'ALREADY_USED' ? '♻️' : '❌';
        console.log(`${icon} ${r.code.padEnd(25)} ${r.status.padEnd(15)} - ${r.message}`);
    });
    console.log(`${'='.repeat(60)}\n`);

    console.log(`💡 Check your in-game mailbox for rewards!`);
    console.log(`⚠️  Rewards may take a few minutes to appear.\n`);
}

// Usage: node auto-redeem-api.js [UUID]
const uuid = process.argv[2];

if (!uuid) {
    console.error('❌ Usage: node auto-redeem-api.js YOUR_UUID');
    console.error('   Example: node auto-redeem-api.js ABC1234567890DEF1234567890AB123');
    process.exit(1);
}

autoRedeemAll(uuid).catch(error => {
    console.error(`\n❌ Fatal error: ${error.message}`);
    process.exit(1);
});
