# 📅 TODO IMORGON - Flocken.info bildbyten

**Dagens status:** Koden är klar, men bilderna behöver kopieras manuellt.

---

## ⚡ Gör detta imorgon (5 minuter):

### Steg 1: Kopiera bilderna (dra & släpp)

**Favicon:**
```
Från: C:\Users\Torbjörn\Desktop\Flocken Media\logo_icon_flocken_large_1x1.png
Till:  C:\Users\Torbjörn\Desktop\flocken-website\app\icon.png
```

**Hero-bild (de 3 hundarna med boll i park - 1x1 format):**
```
Från: C:\Users\Torbjörn\Desktop\Flocken Media\Färdiga bilder\flocken_image_malua-arlo-coco-play-ball-dog-park_1x1.jpeg
Till:  C:\Users\Torbjörn\Desktop\flocken-website\public\assets\flocken\generated\flocken_image_hero.jpg
```

**Community-bild (3 hundar springer efter boll - 16x9 format):**
```
Från: C:\Users\Torbjörn\Desktop\Flocken Media\Färdiga bilder\flocken_image_malua-arlo-coco-chasing-ball_16x9.jpeg
Till:  C:\Users\Torbjörn\Desktop\flocken-website\public\assets\flocken\generated\flocken_image_community.jpg
```

### Steg 2: Uppdatera bildlänkarna i koden

Öppna `app/(marketing)/page.tsx` och ändra:

**Rad ~27:** 
```typescript
image="/assets/flocken/generated/flocken_image_hero.jpg"
```

**Rad ~46:**
```typescript
src="/assets/flocken/generated/flocken_image_community.jpg"
```

### Steg 3: Pusha till GitHub
```powershell
cd C:\Users\Torbjörn\Desktop\flocken-website

git add .
git commit -m "✨ Nya hundbilder och favicon"
git push origin main
```

Vercel deployer automatiskt!

---

## 📚 Vad som är KLART redan:

- ✅ Textfärger fixade (bättre kontrast)
- ✅ Emojis ersatta med professionella SVG-ikoner
- ✅ Image processor-system skapat
- ✅ Dokumentation komplett:
  - `IMAGE_MANAGEMENT.md`
  - `BILDBYTEN_INSTRUKTION.md`
  - `CHANGELOG_20241204.md`
  - `scripts/creative/README_DOG_MODEL_GENERATION.md` (hundmodeller)

---

## 🔄 Alternativ: Enklare workflow (om du vill)

Istället för att optimera bilderna kan du bara kopiera dem direkt:

```powershell
# Kopiera direkt utan optimering:
Copy-Item "...\play-ball-dog-park_1x1.jpeg" "...\generated\hero.png"
Copy-Item "...\chasing-ball_16x9.jpeg" "...\generated\community.png"

# Då behöver du inte ändra koden alls!
# Pusha direkt:
git add .
git commit -m "Nya hundbilder"
git push origin main
```

---

**God natt! Allt är dokumenterat och redo för imorgon! 🌙**

