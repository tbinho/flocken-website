# GTM Event Tag: App Install - Steg-för-steg Guide

**Event:** `app_install`  
**Status:** ✅ Tracking implementerad i kod  
**Nästa steg:** Skapa GTM tag

---

## 🎯 Steg 1: Öppna GTM

1. Gå till: https://tagmanager.google.com
2. Välj container: **GTM-PD5N4GT3**
3. Klicka på **"Tags"** i vänstermenyn
4. Klicka på **"New"** (Ny)

---

## 🏷️ Steg 2: Konfigurera Tag

### **2.1 Tag Name**
- Ange: **"GA4 Event - App Install"**

### **2.2 Tag Configuration**
- Klicka på **"Tag Configuration"**
- Välj taggtyp: **"Google Analytics: GA4 Event"**
  - (Den orange ikonen med GA4-logo)

### **2.3 Configuration Tag**
- Under "Configuration Tag", välj: **"GA4 Configuration - Flocken"**
  - (Detta är din Google Tag som redan finns)

### **2.4 Event Name**
- Under "Event Name", välj: **"{{Event}}"**
  - Detta är en built-in variable som tar event name från dataLayer

---

## 🎯 Steg 3: Skapa Trigger

### **3.1 Klicka på "Triggering"**
- Klicka på trigger-fältet (eller "Add Trigger")

### **3.2 Skapa Ny Trigger**
- Klicka på **"+"** (plus-ikonen) för att skapa ny trigger
- Eller välj "Custom Event" om den redan finns

### **3.3 Trigger Configuration**
- **Trigger Type:** Välj **"Custom Event"**
- **Event name:** Ange `app_install`
  - (Exakt samma som i koden: `event: 'app_install'`)
- **This trigger fires on:** Välj **"Some Custom Events"**

### **3.4 Lägg till Condition**
- Klicka på **"Add"** för att lägga till condition
- **Variable:** Välj **"Page Hostname"**
- **Operator:** Välj **"equals"**
- **Value:** Ange `flocken.info`
- Spara trigger som: **"Custom Event - App Install"**

---

## 💾 Steg 4: Spara och Publicera

### **4.1 Spara Taggen**
- Klicka på **"Save"** (Spara) uppe till höger

### **4.2 Publicera**
- Klicka på **"Submit"** (Skicka) i GTM huvudmenyn
- Version name: "Add app_install event tracking"
- Beskrivning: "Track app install clicks from Flocken website"
- Klicka på **"Publish"** (Publicera)

---

## ✅ Steg 5: Testa

### **5.1 GTM Preview Mode**
1. Klicka på **"Preview"** i GTM
2. Ange URL: `https://flocken.info`
3. Klicka på **"Connect"**

### **5.2 Testa Event**
1. Öppna flocken.info i ny flik
2. Klicka på "Ladda ner på Google Play" (eller App Store länk)
3. Gå tillbaka till GTM Preview-panelen
4. Du bör se:
   - ✅ "GA4 Event - App Install" tag aktiverad
   - ✅ Event name: `app_install`
   - ✅ Platform: `android` (eller `ios`)

### **5.3 Verifiera i GA4**
1. Öppna GA4: https://analytics.google.com
2. Välj property: Flocken (G-7B1SVKL89Q)
3. Gå till **DebugView**
4. Du bör se `app_install` event i realtid

---

## 🔍 Troubleshooting

### **Problem: Tag triggas inte**

**Lösning:**
1. Kontrollera att trigger event name är exakt `app_install` (lowercase, underscore)
2. Verifiera att condition är `Page Hostname equals flocken.info`
3. Kontrollera att "GA4 Configuration - Flocken" tag är vald som Configuration Tag

### **Problem: Event syns inte i GA4**

**Lösning:**
1. Vänta 30-60 sekunder (GA4 kan ha delay)
2. Kontrollera att du är i DebugView (inte Realtime)
3. Verifiera att Measurement ID är korrekt: `G-7B1SVKL89Q`

---

## 📊 Nästa Steg

Efter att taggen fungerar:

1. **Markera som Conversion:**
   - GA4 → Admin → Events
   - Hitta `app_install`
   - Toggle "Mark as conversion"

2. **Skapa fler Event Tags:**
   - När backend/app är klar, skapa tags för övriga events
   - Följ samma struktur som denna guide

---

**Säg till när du har skapat taggen så testar vi tillsammans!**

