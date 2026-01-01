# Flocken Website

Modern webbplats för Flocken-appen byggd med Next.js 15, TypeScript och Tailwind CSS.

## 🚀 Snabbstart

### 1. Installera dependencies

```bash
npm install
```

### 2. Starta utvecklingsserver

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din browser.

### 3. Bygg för production

```bash
npm run build
npm start
```

## 📂 Projektstruktur

```
flocken-website/
├── app/
│   ├── (marketing)/        # Marketing pages layout
│   │   ├── layout.tsx      # Marketing header + footer
│   │   └── page.tsx        # Startsida
│   ├── (legal)/            # Legal pages layout
│   │   ├── layout.tsx      # Legal header + footer + sidebar
│   │   ├── integritetspolicy/
│   │   └── anvendarvillkor/
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── shared/             # Shared components
│   ├── marketing/          # Marketing blocks
│   └── legal/              # Legal components
├── public/assets/flocken/  # Assets (logos, screenshots, images)
└── tailwind.config.ts      # Designsystem
```

## 🎨 Designsystem

Flockens färgschema implementerat i Tailwind:
- `flocken-olive` - Primär färg
- `flocken-sand` - Bakgrunder
- `flocken-brown` - Text
- Med mera...

## 📦 Deployment

### Git & specialtecken i sökvägar
- Använd alltid `$PSScriptRoot` i PowerShell-skript för att undvika problem med `ö` i sökvägar.
- Se `GIT_COMMANDS.md` och `README_GIT.md` för full guide.
- Exempel:
  - `cd $PSScriptRoot`
  - `git -C $PSScriptRoot status`
  - `.\commit-changes.ps1` (ligger i repo-roten och använder `$PSScriptRoot`)

### GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tbinho/flocken-website.git
git branch -M main
git push -u origin main
```

### Vercel

1. Logga in på https://vercel.com med GitHub
2. Importera `tbinho/flocken-website`
3. Deploy automatiskt
4. Konfigurera domän: flocken.info

## 📝 Företagsinformation

- Företag: Spitakolus AB
- Org.nr: 559554-6101
- E-post: support@spitakolus.com
- Adress: Svängrumsgatan 46, 421 71 Västra Frölunda

## 🔗 Länkar

- Production: https://flocken.info
- GitHub: https://github.com/tbinho/flocken-website

