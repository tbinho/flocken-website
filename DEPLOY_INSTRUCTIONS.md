# Deploy Meta Pixel - Instruktioner

## ⚠️ Problem med specialtecken

På grund av encoding-problem med specialtecken (ö) i sökvägar kan jag inte köra git-kommandon direkt. 

## ✅ Lösning: Kör scriptet manuellt

### Steg 1: Öppna PowerShell i flocken-website mappen

1. Öppna File Explorer
2. Navigera till: `C:\Users\Torbjörn\Desktop\flocken-website`
3. Högerklicka i mappen → "Open in Terminal" eller "Open PowerShell window here"

### Steg 2: Kör deployment-scriptet

```powershell
.\deploy-meta-pixel.ps1
```

Detta kommer att:
- ✅ Lägga till ändringar (app/layout.tsx, PIXEL_STATUS.md, META_SETUP_INSTRUCTIONS.md)
- ✅ Committa med beskrivande meddelande
- ✅ Pusha till `raquel` remote (triggar Vercel deployment)

### Alternativ: Kör kommandona manuellt

Om scriptet inte fungerar, kör dessa kommandon manuellt:

```powershell
# Navigera till repo (om du inte redan är där)
cd "C:\Users\Torbjörn\Desktop\flocken-website"

# Lägg till filer
git add app/layout.tsx
git add PIXEL_STATUS.md
git add META_SETUP_INSTRUCTIONS.md

# Commit
git commit -m "feat: Add Meta Pixel for tracking PageView events

- Implement Meta Pixel in app/layout.tsx
- Track PageView events automatically
- Use NEXT_PUBLIC_META_PIXEL_ID environment variable
- Add noscript fallback for users without JavaScript
- Pixel ID: 854587690618895"

# Push till raquel remote (triggar Vercel deployment)
git push raquel main
```

## 📋 Efter deployment

1. **Lägg till environment variable i Vercel:**
   - Gå till: https://vercel.com/dashboard
   - Välj `flocken-website` projektet
   - Settings → Environment Variables
   - Lägg till: `NEXT_PUBLIC_META_PIXEL_ID` = `854587690618895`
   - Välj alla miljöer (Production, Preview, Development)
   - Klicka "Save"

2. **Verifiera deployment:**
   - Vänta på Vercel deployment att slutföras
   - Besök https://flocken.info
   - Öppna Developer Tools (F12) → Network
   - Filtrera på "fbevents"
   - Du bör se requests till `connect.facebook.net/en_US/fbevents.js`

3. **Verifiera i Meta Events Manager:**
   - Gå till: https://business.facebook.com/events_manager2
   - Välj Pixel ID: 854587690618895
   - Klicka på "Test Events"
   - Du bör se PageView events när du besöker webbplatsen

