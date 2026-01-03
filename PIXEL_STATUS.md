# Meta Pixel Status

## ✅ Pixeln är implementerad lokalt

**Datum:** 2025-01-03

**Status:** Pixeln är implementerad i `app/layout.tsx` men **INTE deployad till production ännu**.

### Vad som är gjort:

1. ✅ **Meta Pixel-kod tillagd i `app/layout.tsx`** (rad 94-119)
   - Pixel-scriptet laddas från `connect.facebook.net/en_US/fbevents.js`
   - Spårar `PageView` events automatiskt
   - Använder `NEXT_PUBLIC_META_PIXEL_ID` environment variable
   - Har noscript-fallback för användare utan JavaScript

2. ✅ **Pixel ID identifierad:** `854587690618895`

### Vad som behöver göras:

1. **Lägg till `NEXT_PUBLIC_META_PIXEL_ID` i Vercel environment variables:**
   - Gå till: https://vercel.com/dashboard
   - Välj projektet `flocken-website`
   - Gå till Settings → Environment Variables
   - Lägg till: `NEXT_PUBLIC_META_PIXEL_ID` = `854587690618895`
   - Välj alla miljöer (Production, Preview, Development)
   - Klicka "Save"

2. **Commit och push ändringar:**
   ```powershell
   cd "C:\Users\Torbjörn\Desktop\flocken-website"
   git add app/layout.tsx
   git commit -m "feat: Add Meta Pixel for tracking PageView events"
   git push raquel main
   ```

3. **Verifiera deployment:**
   - Efter push, Vercel kommer automatiskt deploya
   - Vänta på deployment att slutföras
   - Besök https://flocken.info
   - Öppna Developer Tools (F12) → Network
   - Filtrera på "fbevents" eller "facebook"
   - Du bör se requests till `connect.facebook.net/en_US/fbevents.js`

4. **Verifiera i Meta Events Manager:**
   - Gå till: https://business.facebook.com/events_manager2
   - Välj Pixel ID: 854587690618895
   - Klicka på "Test Events"
   - Du bör se PageView events när du besöker webbplatsen

## 🔍 Verifiering

### Kontrollera om pixeln finns på production:

1. **Via browser:**
   - Öppna https://flocken.info
   - Tryck F12 (Developer Tools)
   - Gå till Console
   - Skriv: `fbq`
   - Om pixeln är laddad, kommer du se funktionen

2. **Via Network tab:**
   - Öppna Network-fliken i Developer Tools
   - Filtrera på "fbevents" eller "facebook"
   - Du bör se requests till `connect.facebook.net/en_US/fbevents.js`

3. **Via View Source:**
   - Högerklicka på sidan → "View Page Source"
   - Sök efter "fbq" eller "fbevents"
   - Du bör se pixel-koden i `<head>`-sektionen

## ⚠️ Viktigt

Pixeln kommer **INTE** att fungera förrän:
1. `NEXT_PUBLIC_META_PIXEL_ID` är satt i Vercel environment variables
2. Ändringarna är commitade och pushade
3. Vercel har deployat den nya versionen

## 📊 Nästa steg efter deployment

När pixeln är deployad och fungerar:
- ✅ PageView events kommer automatiskt spåras
- ✅ Du kan se data i Meta Events Manager
- ✅ Du kan använda pixel-data för att skapa custom audiences
- ✅ Du kan optimera kampanjer baserat på pixel-data

