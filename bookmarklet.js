(function() {
    const COUPONS = ['HAPPYNEWYEAR2026','7S7E7V7E7N7','77EVENT77','LETSGO7K','KEYKEYKEY','DANCINGPOOKI','BRANZEBRANSEL','GRACEOFCHAOS','GOLDENKINGPEPE','TARGETWISH','SENAHAJASENA','CHAOSESSENCE','OBLIVION','DELLONSVSKRIS','100MILLIONHEARTS','HALFGOODHALFEVIL','POOKIFIVEKINDS','SENASTARCRYSTAL','SENA77MEMORY','PSPDJEONGGI','CHLOEMAYALICE','HAPPYSENATIME','TIMEFORADVENTURE','RECONSTRUCTTELUS','ONEMORETIME','KNIGHTSSEVEN','RUBYFARM','SURPRISEFORYOU','TRUSTYFRIEND','PALLANUS'];
    
    let currentIndex = 0;
    let successCount = 0;
    let failCount = 0;
    
    async function fillAndSubmit() {
        if (currentIndex >= COUPONS.length) {
            alert(`✅ Done! Success: ${successCount}, Failed: ${failCount}`);
            return;
        }
        
        const couponInput = document.querySelector('input[name="coupon_code"]');
        const submitBtn = document.querySelector('button[type="submit"]');
        
        if (!couponInput || !submitBtn) {
            alert('❌ Could not find coupon input field. Make sure you are on the coupon page!');
            return;
        }
        
        const code = COUPONS[currentIndex];
        couponInput.value = code;
        
        console.log(`[${currentIndex + 1}/${COUPONS.length}] Submitting: ${code}`);
        
        submitBtn.click();
        currentIndex++;
        
        setTimeout(fillAndSubmit, 2000);
    }
    
    if (confirm(`Auto-redeem ${COUPONS.length} coupons?\n\nMake sure your UUID is entered first!`)) {
        fillAndSubmit();
    }
})();
