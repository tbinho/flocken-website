/**
 * Script för att skapa iPhone-mockups av app screenshots
 * Lägger screenshots i realistiska iPhone-ramar
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const os = require('os');

// iPhone 14 Pro dimensioner
const DEVICE_WIDTH = 430;
const DEVICE_HEIGHT = 932;
const CORNER_RADIUS = 47;

// Mockup dimensioner (med marginal)
const MOCKUP_WIDTH = 500;
const MOCKUP_HEIGHT = 1020;

// Beräkna centrering
const OFFSET_X = Math.floor((MOCKUP_WIDTH - DEVICE_WIDTH) / 2);
const OFFSET_Y = Math.floor((MOCKUP_HEIGHT - DEVICE_HEIGHT) / 2);

/**
 * Skapar en iPhone mockup av en screenshot
 */
async function createIPhoneMockup(screenshotPath, outputPath) {
  try {
    console.log(`📱 Bearbetar: ${path.basename(screenshotPath)}`);

    // Läs in screenshot
    const screenshot = sharp(screenshotPath);
    const metadata = await screenshot.metadata();

    // Skala screenshot till iPhone-dimensioner (behåll aspect ratio)
    const resizedScreenshot = await screenshot
      .resize(DEVICE_WIDTH, DEVICE_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .toBuffer();

    const resizedMeta = await sharp(resizedScreenshot).metadata();
    const screenshotWidth = resizedMeta.width;
    const screenshotHeight = resizedMeta.height;

    // Centrera screenshot på device
    const screenshotX = Math.floor((DEVICE_WIDTH - screenshotWidth) / 2);
    const screenshotY = Math.floor((DEVICE_HEIGHT - screenshotHeight) / 2);

    // Skapa device background (svart med rundade hörn)
    const deviceBackground = await sharp({
      create: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        channels: 4,
        background: { r: 20, g: 20, b: 20, alpha: 1 }
      }
    })
    .png()
    .toBuffer();

    // Composita screenshot på device background
    const deviceWithScreenshot = await sharp(deviceBackground)
      .composite([
        {
          input: resizedScreenshot,
          top: screenshotY,
          left: screenshotX
        }
      ])
      .toBuffer();

    // Skapa mockup canvas med transparent bakgrund
    const mockupCanvas = await sharp({
      create: {
        width: MOCKUP_WIDTH,
        height: MOCKUP_HEIGHT,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      }
    })
    .png()
    .toBuffer();

    // Skapa skugga (blur effect)
    const shadow = await sharp({
      create: {
        width: DEVICE_WIDTH + 40,
        height: DEVICE_HEIGHT + 40,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0.15 }
      }
    })
    .blur(15)
    .png()
    .toBuffer();

    // Composita allt tillsammans
    const finalMockup = await sharp(mockupCanvas)
      .composite([
        // Lägg till skugga
        {
          input: shadow,
          top: OFFSET_Y - 20,
          left: OFFSET_X - 20
        },
        // Lägg till device med screenshot
        {
          input: deviceWithScreenshot,
          top: OFFSET_Y,
          left: OFFSET_X
        }
      ])
      .png({ quality: 95 })
      .toFile(outputPath);

    console.log(`✅ Skapade mockup: ${path.basename(outputPath)}`);
    return true;

  } catch (error) {
    console.error(`❌ Fel vid skapande av mockup: ${error.message}`);
    return false;
  }
}

/**
 * Huvudfunktion
 */
async function main() {
  console.log('🎨 Skapar iPhone mockups...\n');

  const projectRoot = path.join(__dirname, '..');
  const screenshotsDir = path.join(projectRoot, 'public', 'assets', 'flocken', 'screenshots');
  const downloadsDir = path.join(os.homedir(), 'Downloads');

  // Mappling av screenshots
  const screenshotsMap = {
    'flocken_screen_para': 'flocken_para_karta-alla-hundar.png',
    'flocken_screen_passa': 'flocken_passa_lista-personer-som-kan-passa.png',
    'flocken_screen_rasta': 'flocken_rasta_starta-promenad.png',
    'flocken_screen_besoka': 'flocken_besoka_karta-alla.png',
  };

  console.log(`📁 Screenshots mapp: ${screenshotsDir}`);
  console.log(`📁 Letar i Downloads: ${downloadsDir}\n`);

  // Skapa output-mapp om den inte finns
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  let successCount = 0;
  let totalCount = 0;

  // Bearbeta varje screenshot
  for (const [inputName, outputName] of Object.entries(screenshotsMap)) {
    totalCount++;

    // Leta efter filen i Downloads (prova olika extensions)
    let inputPath = null;
    const extensions = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];
    
    for (const ext of extensions) {
      const potentialPath = path.join(downloadsDir, inputName + ext);
      if (fs.existsSync(potentialPath)) {
        inputPath = potentialPath;
        break;
      }
    }

    if (!inputPath) {
      console.log(`⚠️  Hittade inte: ${inputName} (prövade ${extensions.join(', ')})`);
      continue;
    }

    const outputPath = path.join(screenshotsDir, outputName);
    
    const success = await createIPhoneMockup(inputPath, outputPath);
    if (success) successCount++;
  }

  console.log(`\n✨ Klart! ${successCount}/${totalCount} iPhone mockups skapade.`);
  
  if (successCount > 0) {
    console.log('\n📋 Nästa steg:');
    console.log('   1. Kontrollera bilderna i: public/assets/flocken/screenshots/');
    console.log('   2. Kör: npm run dev (för att testa lokalt)');
    console.log('   3. Committa och pusha ändringarna');
  }
}

// Kör huvudfunktionen
main().catch(error => {
  console.error('❌ Oväntat fel:', error);
  process.exit(1);
});

