# Meta Setup - Instruktioner

## ✅ Vad som är klart

1. **Meta Pixel implementerad i `app/layout.tsx`**
   - Pixel-koden är nu tillagd och kommer att spåra PageView events
   - Pixel ID hämtas från `NEXT_PUBLIC_META_PIXEL_ID` environment variable

## 📋 Vad som behöver göras manuellt

### 1. Lägg till credentials i `.env.local`

På grund av encoding-problem med specialtecken (ö) i sökvägar, behöver du lägga till dessa rader manuellt i `.env.local`:

```bash
# Meta Marketing API - Flocken
META_ACCESS_TOKEN=EAAbI5ZCy5zyIBP58WAwTZAlHqtZCfmHjRQQpcjlciCngAG59MhBlyTJeubhKAfxKNfasEBEpphqdteZBd6ODbMZBbhVKsV0X8h0HZCdAfGZAijaSlE9Db6IZASZCq5SirfjBHe2gQocRlJ6tZAYZCMtvEZAIZBWRrYAaCNVfIGmr5MiqO6CTcyZBhBvEG1mTk05RJfxb5z0sNswRe9NLeVyJZBsMZBO3nP8n

META_AD_ACCOUNT_ID=act_1648246706340725

# Meta Pixel + Conversions API
NEXT_PUBLIC_META_PIXEL_ID=854587690618895
```

**Viktigt:** Om du redan har `META_CAPI_ACCESS_TOKEN` i `.env.local`, behåll den! Den används för Conversions API.

### 2. Testa API-åtkomst

När credentials är tillagda, kör:

```powershell
cd "C:\Users\Torbjörn\Desktop\flocken-website"
node scripts/test-flocken-meta-access.js
```

Detta kommer att:
- ✅ Verifiera att token fungerar
- ✅ Visa Flocken ad account info
- ✅ Lista kampanjer
- ✅ Hämta insights (prestanda)

### 3. Verifiera Meta Pixel

Efter att ha lagt till `NEXT_PUBLIC_META_PIXEL_ID` i `.env.local`:

1. **Starta utvecklingsservern:**
   ```powershell
   npm run dev
   ```

2. **Öppna webbplatsen i webbläsaren:**
   - Gå till http://localhost:3000
   - Öppna Developer Tools (F12)
   - Gå till Network-fliken
   - Filtrera på "facebook" eller "fbevents"
   - Du bör se requests till `connect.facebook.net/en_US/fbevents.js`

3. **Kontrollera i Meta Events Manager:**
   - Gå till https://business.facebook.com/events_manager2
   - Välj Pixel ID: 854587690618895
   - Klicka på "Test Events"
   - Du bör se PageView events när du besöker webbplatsen

## 🔍 Felsökning

### Pixel spårar inte events

1. **Kontrollera att `NEXT_PUBLIC_META_PIXEL_ID` är satt:**
   - Verifiera i `.env.local`
   - Starta om utvecklingsservern efter att ha lagt till variabeln

2. **Kontrollera i browser console:**
   - Öppna Developer Tools (F12)
   - Gå till Console-fliken
   - Leta efter felmeddelanden relaterade till `fbq` eller `facebook`

3. **Kontrollera att pixel-koden laddas:**
   - I Network-fliken, leta efter `fbevents.js`
   - Kontrollera att den laddas korrekt (status 200)

### API-åtkomst fungerar inte

1. **Kontrollera token:**
   - Verifiera att `META_ACCESS_TOKEN` är korrekt i `.env.local`
   - Token börjar med `EAA...`

2. **Kontrollera Ad Account ID:**
   - Verifiera att `META_AD_ACCOUNT_ID` börjar med `act_`
   - Format: `act_1648246706340725`

3. **Kontrollera permissions:**
   - Token behöver ha: `ads_read`, `ads_management`, `business_management`
   - System User behöver ha access till Flocken ad account

## 📊 Nästa steg

När allt fungerar kan du:
- ✅ Hämta kampanjdata automatiskt via API
- ✅ Spåra besökare med Meta Pixel
- ✅ Synka data till BigQuery (om det är konfigurerat)
- ✅ Skapa rapporter baserat på pixel-data

## 🔗 Länkar

- Meta Ads Manager: https://business.facebook.com/adsmanager/manage/campaigns?act=1648246706340725
- Meta Events Manager: https://business.facebook.com/events_manager2
- Meta Business Manager: https://business.facebook.com

