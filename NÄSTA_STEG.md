# 🎉 Flocken Website - Nästa Steg

Grattis! Projektet är skapat. Här är vad du behöver göra nu:

## ✅ Vad som är klart:

- ✅ Next.js 15 projekt konfigurerat
- ✅ Tailwind CSS med Flockens designsystem
- ✅ Alla komponenter (shared, marketing, legal)
- ✅ Startsida med alla funktioner
- ✅ Integritetspolicy (komplett med GDPR)
- ✅ Användarvillkor (komplett med prenumeration)
- ✅ SEO (sitemap, robots, metadata)
- ✅ Responsive design
- ✅ Två layout-typer (marketing + legal)

## 🚀 Steg 1: Installera Dependencies

```powershell
cd C:\Users\Torbjörn\Desktop\flocken-website
npm install
```

Detta tar ~2-3 minuter.

## 📁 Steg 2: Kopiera Assets

Kopiera bilder från nastahem-projektet och nya screenshots:

```powershell
# Skapa undermappar
mkdir public\assets\flocken\logo
mkdir public\assets\flocken\generated  
mkdir public\assets\flocken\screenshots

# Kopiera logotyper
copy "C:\Users\Torbjörn\Desktop\nastahem\public\assets\flocken\logo\*" "public\assets\flocken\logo\"

# Kopiera genererade bilder (hero + community)
copy "C:\Users\Torbjörn\Desktop\nastahem\public\assets\flocken\generated\*" "public\assets\flocken\generated\"

# Kopiera screenshots från nastahem
copy "C:\Users\Torbjörn\Desktop\nastahem\public\assets\flocken\screenshots\*" "public\assets\flocken\screenshots\"

# Kopiera nya screenshots (V2)
copy "C:\Users\Torbjörn\Desktop\Flocken Media\Flocken Screenshots V2 (251202 Raquel)\*" "public\assets\flocken\screenshots\"
```

## 🧪 Steg 3: Testa Lokalt

```powershell
npm run dev
```

Öppna http://localhost:3000 i browsern.

**Verifiera:**
- ✅ Startsidan laddas
- ✅ Navigering fungerar
- ✅ Bilder visas (om kopierade korrekt)
- ✅ /integritetspolicy fungerar
- ✅ /anvendarvillkor fungerar
- ✅ Responsiv design (testa mobil-storlek i DevTools)

## 📦 Steg 4: GitHub

```powershell
# Initiera git
git init
git add .
git commit -m "Initial commit: Flocken.info website"

# Skapa repo på GitHub (via browser):
# Gå till https://github.com/tbinho
# Klicka "New repository"
# Namn: flocken-website
# Public
# KRYSSA INTE i några rutor

# Koppla till GitHub
git remote add origin https://github.com/tbinho/flocken-website.git
git branch -M main
git push -u origin main
```

## 🚀 Steg 5: Vercel Deployment

1. **Gå till:** https://vercel.com/
2. **Logga in** med GitHub
3. **Klicka:** "Add New..." → "Project"
4. **Välj:** tbinho/flocken-website
5. **Klicka:** "Import"
6. **Konfigurera:**
   - Framework: Next.js (auto-detected)
   - Root Directory: `./`
   - Lämna allt annat som standard
7. **Klicka:** "Deploy"
8. **Vänta:** 2-3 minuter
9. **Få URL:** https://flocken-website.vercel.app

**Testa Vercel-URL:en** innan du går vidare.

## 🌐 Steg 6: Domän (flocken.info)

### I Vercel:

1. **Gå till:** Project Settings → Domains
2. **Skriv in:** `flocken.info`
3. **Klicka:** "Add"
4. **Vercel visar DNS-instruktioner** (typ):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### På Loopia:

1. **Logga in:** https://customerzone.loopia.se/
2. **Välj:** flocken.info
3. **Gå till:** DNS-inställningar
4. **Ta bort gamla records:**
   - Radera gamla A-records för `@`
   - Radera gamla CNAME för `www`
5. **Lägg till nya (från Vercel):**
   - A record: `@` → `76.76.21.21` (eller IP från Vercel)
   - CNAME: `www` → `cname.vercel-dns.com`
6. **Spara**
7. **Vänta:** 1-24 timmar (oftast 1-4 timmar)

### Verifiera DNS:

```powershell
nslookup flocken.info
```

När klart ska det visa Vercels IP.

## ✅ Steg 7: Slutkontroll

När DNS propagerat och flocken.info fungerar:

- ✅ https://flocken.info → startsida
- ✅ https://www.flocken.info → redirectar till flocken.info
- ✅ https://flocken.info/integritetspolicy → legal page
- ✅ https://flocken.info/anvendarvillkor → legal page
- ✅ HTTPS fungerar (grönt lås)
- ✅ Bilder laddar korrekt
- ✅ Mobilvyn funkar

## 🎨 Framtida Uppdateringar

### Uppdatera innehåll:

1. Redigera filer i `app/(marketing)/page.tsx`
2. Commit: `git add . && git commit -m "Uppdatera startsida"`
3. Push: `git push`
4. Vercel deployer automatiskt! (tar ~2 min)

### Lägga till nya sidor:

- FAQ: Skapa `app/(marketing)/faq/page.tsx`
- Funktionssidor: `app/(marketing)/para/page.tsx` etc.
- Använd befintliga komponenter (HeroBlock, FeatureBlock, etc.)

## 🐛 Felsökning

### Bilder syns inte:

- Kolla att de kopierades korrekt till `public/assets/flocken/`
- Starta om dev-servern: `npm run dev`

### Build-fel:

```powershell
npm run build
```

Fixa eventuella errors innan deployment.

### TypeScript-errors:

Oftast auto-fixas av Next.js, men kolla:
```powershell
npm run lint
```

## 📞 Kontakt

Vid problem kontakta support@spitakolus.com

---

**Skapad:** ${new Date().toLocaleDateString('sv-SE')}  
**AI:** Claude Sonnet 4.5 via Cursor  
**GitHub:** https://github.com/tbinho/flocken-website

