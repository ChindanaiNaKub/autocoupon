# Seven Knights Rebirth - Auto Coupon Redemption

⚡ Blazing-fast automatic coupon redemption tool for Seven Knights Rebirth

## 🎮 Features

- ✅ **30 Active Codes** - All latest coupons (Updated: Jan 22, 2026)
- 🚀 **Works Perfectly** - Two methods that actually work
- 🎯 **Simple** - No browser automation needed

## 🚀 How to Use

### Method 1: Node.js Script (Recommended)

```bash
# Run script with your UUID
node auto-redeem-api.js YOUR_UUID

# Example:
node auto-redeem-api.js ABC1234567890DEF1234567890AB123
```

**Benefits:**
- Fastest method (~30-40 seconds)
- No browser needed
- Direct API calls
- No CORS issues

### Method 2: Bookmarklet

1. Copy code from `bookmarklet.js`
2. Create a new bookmark in your browser
3. Paste code as the URL (starts with `javascript:`)
4. Go to https://coupon.netmarble.com/tskgb
5. Enter your UUID
6. Click the bookmark
7. Watch it auto-redeem all codes

**Benefits:**
- Works in browser
- No installation needed
- Runs on coupon page (no CORS)

## 📋 Included Coupons (30)

1. HAPPYNEWYEAR2026
2. 7S7E7V7E7N7
3. 77EVENT77
4. LETSGO7K
5. KEYKEYKEY
6. DANCINGPOOKI
7. BRANZEBRANSEL
8. GRACEOFCHAOS
9. GOLDENKINGPEPE
10. TARGETWISH
11. SENAHAJASENA
12. CHAOSESSENCE
13. OBLIVION
14. DELLONSVSKRIS
15. 100MILLIONHEARTS
16. HALFGOODHALFEVIL
17. POOKIFIVEKINDS
18. SENASTARCRYSTAL
19. SENA77MEMORY
20. PSPDJEONGGI
21. CHLOEMAYALICE
22. HAPPYSENATIME
23. TIMEFORADVENTURE
24. RECONSTRUCTTELUS
25. ONEMORETIME
26. KNIGHTSSEVEN
27. RUBYFARM
28. SURPRISEFORYOU
29. TRUSTYFRIEND
30. PALLANUS

## 💻 Local Setup

```bash
# Clone repository
git clone https://github.com/ChindanaiNaKub/autocoupon.git

cd autocoupon

# Run with your UUID
node auto-redeem-api.js YOUR_UUID
```

## ⚙️ How It Works

### Node.js Script
- Uses the official Netmarble API endpoint
- Sends POST requests with UUID and coupon codes
- Implements random delays (1-2 seconds) between requests
- Provides real-time feedback in terminal

### Bookmarklet
- Runs directly on coupon.netmarble.com
- Fills in coupon codes automatically
- Submits with 2-second delays
- Shows success/failure count at end

## ❓ Where to Find Your UUID?

1. Open Seven Knights Rebirth game
2. Go to Settings ⚙️
3. Look for "Player Info" or "Account"
4. Copy your UUID (long code like: ABC1234567890DEF1234567890AB123)

## ⚠️ Disclaimer

This tool automates the coupon redemption process for convenience. Use responsibly and in accordance with the game's terms of service.

## 📄 License

MIT License - Feel free to use and modify!

---

Made with ❤️ for Seven Knights Rebirth players
