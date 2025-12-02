# 🚀 Flocken Website - Installation & Launch Guide

## ✅ Vad som redan är klart:

### Kod & Struktur (100% klart)
- ✅ Next.js 15 projekt med TypeScript
- ✅ Tailwind CSS med Flockens färgschema
- ✅ 15 komponenter (shared + marketing + legal)
- ✅ Startsida med alla 4 funktioner
- ✅ Integritetspolicy (GDPR-kompatibel)
- ✅ Användarvillkor (komplett)
- ✅ SEO (sitemap, robots, metadata)
- ✅ Responsive design

### Assets (100% kopierat)
- ✅ 2 logotyper
- ✅ 3 AI-genererade bilder
- ✅ 34 app screenshots (gamla + V2)

---

## 🎯 STEG SOM DU BEHÖVER GÖRA:

### STEG 1: Installera Dependencies ⏱️ 3 min

Öppna PowerShell i projektet och kör:

```powershell
cd C:\Users\Torbjörn\Desktop\flocken-website
npm install
```

Detta laddar ner Next.js, React, Tailwind och andra dependencies (~150 MB).

---

### STEG 2: Testa Lokalt ⏱️ 2 min

```powershell
npm run dev
```

Öppna http://localhost:3000 i browsern.

**Verifiera:**
- ✅ Startsidan laddas med hero image
- ✅ Alla 4 funktioner visas (Para, Passa, Rasta, Besöka)
- ✅ App screenshots renderas i phone mockups
- ✅ Testimonials från 4 personas
- ✅ Navigering till /integritetspolicy fungerar
- ✅ Navigering till /anvendarvillkor fungerar
- ✅ Table of Contents i sidebar (legal pages)
- ✅ Responsiv design (testa mobil-vy i DevTools)

**Om bilder inte syns:**
- Kolla att de finns i `public/assets/flocken/`
- Starta om dev-servern (Ctrl+C, sedan `npm run dev` igen)

---

### STEG 3: GitHub Repository ⏱️ 5 min

#### A. Skapa repo på GitHub (via browser)

1. Gå till https://github.com/tbinho
2. Klicka "New repository" (gröna knappen)
3. **Repository name:** `flocken-website`
4. **Description:** "Flocken.info - Official website for Flocken dog app"
5. **Visibility:** Public (eller Private om ni vill)
6. **VIKTIGT:** Kryssa INTE i några rutor (ingen README, .gitignore, license)
7. Klicka "Create repository"

#### B. Pusha kod till GitHub

I PowerShell (från projektet):

```powershell
git init
git add .
git commit -m "Initial commit: Flocken.info website with design system"

git remote add origin https://github.com/tbinho/flocken-website.git
git branch -M main
git push -u origin main
```

Uppdatera sidan på GitHub - nu ska du se alla filer!

---

### STEG 4: Vercel Deployment ⏱️ 10 min

#### A. Skapa Vercel-konto (om du inte har)

1. Gå till https://vercel.com/signup
2. Välj "Continue with GitHub"
3. Logga in med tbinho GitHub-konto
4. Godkänn att Vercel får åtkomst

#### B. Importera projekt

1. På Vercel dashboard: Klicka "Add New..." → "Project"
2. Du ska se `tbinho/flocken-website` i listan
3. Klicka "Import"
4. Konfigurera:
   - **Project Name:** flocken-website (kan vara kvar)
   - **Framework Preset:** Next.js (auto-detected) ✅
   - **Root Directory:** ./ (default) ✅
   - **Build Settings:** Lämna som standard ✅
   - **Environment Variables:** Inga behövs ✅
5. Klicka "Deploy"
6. Vänta 2-3 minuter
7. När klart får du URL: **https://flocken-website.vercel.app**

#### C. Testa Vercel-URL

Öppna https://flocken-website.vercel.app och verifiera:
- ✅ Startsidan fungerar
- ✅ Bilder laddas
- ✅ Navigation fungerar
- ✅ Legal pages renderas

---

### STEG 5: Koppla Domän (flocken.info) ⏱️ 5 min + 24h väntan

#### A. Lägg till domän i Vercel

1. I Vercel: Gå till ditt projekt → "Settings" → "Domains"
2. Skriv in: `flocken.info`
3. Klicka "Add"
4. Vercel visar nu DNS-records du måste lägga till

Du kommer se något som:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**VIKTIGT:** Kopiera dessa exakta värden (kan variera)!

#### B. Konfigurera DNS på Loopia

1. Logga in på https://customerzone.loopia.se/
2. Klicka på "flocken.info" i listan
3. Gå till "DNS-inställningar" (eller "Zone editor")
4. **Ta bort gamla records:**
   - ❌ Ta bort eventuella gamla A-records för `@`
   - ❌ Ta bort eventuella gamla CNAME-records för `www`
5. **Lägg till nya records (från Vercel):**
   
   **A Record:**
   - Typ: A
   - Host/Name: @ (eller tomt)
   - Pekar på/Value: `76.76.21.21` (använd värdet från Vercel!)
   - TTL: 3600 (eller lämna standard)
   
   **CNAME Record:**
   - Typ: CNAME
   - Host/Name: www
   - Pekar på/Value: `cname.vercel-dns.com` (använd värdet från Vercel!)
   - TTL: 3600
6. Klicka "Spara"

#### C. Vänta på DNS-propagering ⏱️ 1-24 timmar

Testa om det fungerar:

```powershell
nslookup flocken.info
```

När DNS är klart ska du se Vercels IP-adress.

**När klart:**
- ✅ https://flocken.info → fungerar
- ✅ https://www.flocken.info → fungerar
- ✅ Automatisk HTTPS (Vercel ordnar SSL-certifikat)

---

## ✅ CHECKLISTA - Final Verification

När flocken.info är live, kolla:

### Content
- [ ] Alla texter läsbara och korrekta
- [ ] "Gratis i 6 månader" erbjudandet syns
- [ ] Alla 4 personas-citat visas
- [ ] Företagsinformation korrekt (support@spitakolus.com)

### Bilder
- [ ] Hero image laddas
- [ ] Community image laddas
- [ ] Alla 4 feature screenshots i phone mockups
- [ ] Logotyp i header

### Navigation
- [ ] Header navigation fungerar
- [ ] Footer länkar fungerar
- [ ] /integritetspolicy öppnas
- [ ] /anvendarvillkor öppnas
- [ ] Table of Contents klickbar (legal pages)

### Mobile
- [ ] Öppna på mobil (använd din telefon)
- [ ] Hamburger-meny fungerar
- [ ] Bilder skalas korrekt
- [ ] Text läsbar
- [ ] CTA-knappar klickbara

### SEO
- [ ] Dela på Facebook - rätt bild och text visas?
- [ ] Google "site:flocken.info" - indexerad?
- [ ] Lighthouse score (Chrome DevTools)

---

## 🔄 Framtida Uppdateringar

### Ändra innehåll:

1. Redigera filer i projektet (VS Code)
2. Testa lokalt: `npm run dev`
3. Commit: `git add . && git commit -m "Beskrivning"`
4. Push: `git push`
5. **Vercel deployer automatiskt inom 2 min!** 🚀

### Lägg till nya sidor:

**FAQ-sida:**
```typescript
// app/(marketing)/faq/page.tsx
```

**Funktionssidor:**
```typescript
// app/(marketing)/para/page.tsx
// app/(marketing)/passa/page.tsx
// etc...
```

Använd befintliga komponenter: `<HeroBlock>`, `<FeatureBlock>`, etc.

---

## 📊 Projektstruktur

```
flocken-website/
├── app/
│   ├── (marketing)/        # Marketing-sidor
│   │   ├── layout.tsx      # Med CTA-knappar
│   │   └── page.tsx        # Startsida ← DETTA ÄR HUVUDSIDAN
│   ├── (legal)/            # Legala sidor
│   │   ├── layout.tsx      # Med sidebar TOC
│   │   ├── integritetspolicy/
│   │   │   └── page.tsx    # Integritetspolicy
│   │   └── anvendarvillkor/
│   │       └── page.tsx    # Användarvillkor
│   ├── layout.tsx          # Root (metadata, fonts)
│   ├── globals.css         # Tailwind + custom styles
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots
├── components/
│   ├── shared/             # Återanvändbara
│   │   ├── Header.tsx      # 2 varianter (marketing/legal)
│   │   ├── Footer.tsx      # 2 varianter
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── Card.tsx
│   ├── marketing/          # För landning/marketing
│   │   ├── HeroBlock.tsx
│   │   ├── FeatureBlock.tsx
│   │   ├── PhoneMockup.tsx
│   │   ├── TestimonialBlock.tsx
│   │   └── CTABlock.tsx
│   └── legal/              # För legal pages
│       └── TableOfContents.tsx
├── public/assets/flocken/
│   ├── logo/               # Logotyper
│   ├── generated/          # AI-bilder
│   └── screenshots/        # App screenshots
├── tailwind.config.ts      # 🎨 DESIGNSYSTEM
├── package.json
└── README.md

```

---

## 🎨 Designsystem - Flockens Färger

```css
--flocken-olive: #6B7A3A     /* Knappar, CTA */
--flocken-sand: #E8DCC0      /* Bakgrunder */
--flocken-brown: #3E3B32     /* Text */
--flocken-accent: #8BA45D    /* Hover */
--flocken-cream: #F5F1E8     /* Alt bakgrund */
--flocken-gray: #A29D89      /* Sekundär text */
```

Alla färger definierade i `tailwind.config.ts`.

---

## 📞 Support

**Problem?** Kontakta support@spitakolus.com

**GitHub:** https://github.com/tbinho/flocken-website  
**Production:** https://flocken.info (efter DNS)  
**Staging:** https://flocken-website.vercel.app

---

**Skapad:** ${new Date().toLocaleDateString('sv-SE')}  
**Utvecklad av:** AI (Claude Sonnet 4.5)  
**För:** Spitakolus AB

