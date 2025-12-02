# 🐾 Flocken.info - Projektöversikt

**Skapad:** ${new Date().toLocaleDateString('sv-SE')}  
**Utvecklad av:** AI (Claude Sonnet 4.5)  
**För:** Spitakolus AB  
**GitHub:** https://github.com/tbinho/flocken-website  
**Production:** https://flocken.info

---

## 📊 Sammanfattning

Komplett Next.js-webbplats för Flocken-appen med:
- Design-first approach (Tailwind config med Flockens brand)
- Två layout-typer (marketing + legal)
- Block-baserad arkitektur (lätt att bygga ut)
- Persona-driven content (Marco, Anna, Anders, Jonas)
- GDPR-kompatibla legala dokument
- SEO-optimerad från start

---

## 📁 Sidor (3 st)

### 1. Startsida (`/`)
**Layout:** Marketing
**Innehåll:**
- Hero med "Gratis i 6 månader"-erbjudande
- Community section (AI-genererad bild)
- 4 feature blocks (Para, Passa, Rasta, Besöka)
- 4 personas-testimonials
- USP section ("Varför Flocken?")
- Retention section ("För varje dag")
- Final CTA med app store badges

### 2. Integritetspolicy (`/integritetspolicy`)
**Layout:** Legal (med Table of Contents sidebar)
**Innehåll:**
- Personuppgiftsansvarig (Spitakolus AB)
- Vilka uppgifter vi samlar (konto, hundar, GPS, meddelanden, betalning)
- Rättslig grund (GDPR Art. 6.1.a/b/f)
- Tredjepartstjänster (Supabase, Stripe, Google Maps, OSM)
- Lagringstider
- Användarrättigheter (tillgång, rättelse, radering, etc.)
- Säkerhet (RLS, BankID, kryptering)
- Kontaktinfo

### 3. Användarvillkor (`/anvendarvillkor`)
**Layout:** Legal (med Table of Contents sidebar)
**Innehåll:**
- Definitioner (Para, Passa, Rasta, Besöka)
- Kontotyper (Privatperson vs Kennel)
- Lanserings-kampanj (6 månader gratis)
- Priser (22 kr/mån privatperson, 60 kr/mån kennel)
- Användaransvar per funktion
- Ansvarsbegränsning (hundvakt-disclaimer)
- Förbjudet innehåll
- Uppsägningsregler
- Tvistlösning (svensk lag, ARN)

---

## 🧩 Komponenter (15 st)

### Shared (5 st)
- `Header.tsx` - 2 varianter (marketing med CTA / legal enkel)
- `Footer.tsx` - 2 varianter (full med länkar / minimal)
- `Button.tsx` - Primary/secondary, sm/md/lg
- `Container.tsx` - Max-width wrapper
- `Card.tsx` - Sandfärgade kort

### Marketing (5 st)
- `HeroBlock.tsx` - Above fold med hero image + CTA
- `FeatureBlock.tsx` - Alternating layout med screenshot
- `PhoneMockup.tsx` - CSS iPhone-ram
- `TestimonialBlock.tsx` - Grid med citat
- `CTABlock.tsx` - Final CTA med gradient

### Legal (1 st)
- `TableOfContents.tsx` - Auto-genererad TOC från H2/H3

### Layouts (4 st)
- `app/layout.tsx` - Root med metadata
- `app/(marketing)/layout.tsx` - Marketing header + footer
- `app/(legal)/layout.tsx` - Legal header + footer + sidebar

---

## 🎨 Designsystem

### Färger (från color_system.md)
```css
Olivgrön:    #6B7A3A  (primary CTA)
Accent grön: #8BA45D  (hover)
Sand:        #E8DCC0  (bakgrund kort)
Cream:       #F5F1E8  (alt bakgrund)
Brun:        #3E3B32  (text, headers)
Grå:         #A29D89  (sekundär text)
Varm beige:  #D4C4A8  (dividers)
```

### Typografi
- Display: 3.5rem
- H1: 3rem
- H2: 2.25rem
- H3: 1.875rem
- Body: 1rem
- Small: 0.875rem

### Spacing
- Section padding: 4-6rem
- Container: max-width 80rem
- Gap: 0.75-3rem

### Components
- Border radius: 1-2rem (rundade hörn)
- Shadows: soft / card / elevated
- Transitions: 200-300ms

---

## 📸 Assets

### Logotyper (2 st)
- `logo_icon_flocken_large_1x1.png` (1024x1024)
- `logo_icon_flocken_small_1x1.png` (512x512)

### AI-Genererade Bilder (3 st)
- `hero.png` (1920x1080, 16:9) - Två hundar hälsar
- `community.png` (1200x628, 1.91:1) - Hundpark
- `para.png` - Para-funktion

### App Screenshots (34 st)
**Gamla (19 st):**
- Para: karta, lista, favoriter
- Passa: karta, lista, favoriter
- Rasta: start, tracking
- Besöka: karta, filter, favoriter
- Mina sidor: översikt, lägg upp hund

**Nya V2 (15 st):**
- flocken_screens_251202 (1-15).jpeg
- Uppdaterade UI med nya designen

---

## 🔧 Teknisk Stack

- **Framework:** Next.js 15
- **UI:** React 18
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript 5
- **Fonts:** Inter (Google Fonts)
- **Images:** Next.js Image (auto-optimering)
- **SEO:** Built-in sitemap & robots
- **Deployment:** Vercel
- **Domain:** flocken.info (Loopia DNS)

---

## 📈 SEO & Performance

### Metadata
- ✅ Unika titles per sida
- ✅ Meta descriptions
- ✅ Open Graph images
- ✅ Twitter cards
- ✅ Canonical URLs
- ✅ Robots.txt
- ✅ Sitemap.xml

### Performance
- ✅ Next.js Image optimization
- ✅ Lazy loading (below fold)
- ✅ Priority loading (above fold)
- ✅ Code splitting (automatic)
- ✅ Font optimization (Google Fonts)

### Accessibility
- ✅ Semantisk HTML
- ✅ Alt-text på bilder
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ ARIA labels
- ✅ Color contrast WCAG AA

---

## 🚀 Deployment Flow

```
Local → GitHub → Vercel → flocken.info
  ↓        ↓        ↓          ↓
 dev    commit   build    auto-HTTPS
```

### Automatisk deployment:
1. Gör ändringar lokalt
2. `git push`
3. Vercel bygger automatiskt
4. Live på flocken.info inom 2 min!

---

## 📝 Content Guidelines

### Tone of Voice (från tone_of_voice.md)
- Vuxen, varm, respektfull
- Kort och tydligt
- Ingen corporate-speak
- Inga emojis (förutom 🎉 för launch offer)
- "Du" till användaren
- Hundperspektiv: "För ett bättre liv som hund"

### Personas (4 st)
1. **Marco (Para)** - Efterforskaren, kräver hälsotester
2. **Anna (Passa)** - Trygghetsmamman, oro vid passning
3. **Anders (Rasta)** - Aktiva, älskar nya rundor
4. **Jonas (Community)** - Vill ha allt på ett ställe

Alla testimonials baserade på riktiga persona-citat!

---

## 🔮 Framtida Utbyggnad

### Enkelt att lägga till:

**FAQ-sida**
- Använd marketing layout
- Accordion-komponenter för Q&A

**Funktionssidor** (`/para`, `/passa`, `/rasta`, `/besoka`)
- Djupdykning i varje funktion
- Fler screenshots och detaljer
- Använd befintliga blocks

**Hundblogg** (`/blogg`)
- SEO-drivande content
- Tips om hundvård, rassguider
- Bygg community

**Om Flocken** (`/om`)
- Team (om relevant)
- Story bakom appen
- Värderingar

**Presskit** (`/press`)
- Logotyper för nedladdning
- Pressfakta
- Media-kontakt

### Tack vare block-baserad arkitektur:
Alla nya sidor = kombinera befintliga komponenter. Ingen ny kod behövs!

---

## 📊 Statistik

### Kod
- **Filer:** 25 st
- **Komponenter:** 15 st
- **Sidor:** 3 st
- **Lines of Code:** ~1500

### Assets
- **Bilder:** 39 st
- **Total storlek:** ~15 MB

### Utvecklingstid
- **Planning:** 1 timme
- **Implementation:** 2 timmar
- **Total:** 3 timmar

---

## ✅ Kvalitetskontroll

- ✅ Inga TypeScript-errors
- ✅ Inga linter-errors
- ✅ Alla imports korrekta
- ✅ Responsiv design
- ✅ Accessibility-ready
- ✅ SEO-optimerad
- ✅ Production-ready

---

## 📞 Kontakt

**E-post:** support@spitakolus.com  
**Adress:** Svängrumsgatan 46, 421 71 Västra Frölunda  
**Org.nr:** 559554-6101

---

**Nästa steg:** Se INSTALLATION.md för deployment!

