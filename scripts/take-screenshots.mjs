import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const outputDir = path.join(__dirname, '..', 'public', 'images', 'portfolio');

const sites = [
  { name: 'grind-me-fine', url: 'https://grind-me-fine.netlify.app' },
  { name: 'roastery-station', url: 'https://roastery-station.netlify.app' },
  { name: 'take-my-trip', url: 'https://take-my-trip.netlify.app' },
  { name: 'ibex-design', url: 'https://ibexdesign.netlify.app' },
  { name: 'pdf-image-merger', url: 'https://pdf-images-doc-merger.netlify.app' },
  { name: 'files-folders', url: 'https://filesfolders.netlify.app' },
  { name: 'favog', url: 'https://favog.netlify.app' },
  { name: 'image-resizer', url: 'https://image-conver.netlify.app' },
  { name: 'videnc', url: 'https://videnc.netlify.app' },
  { name: 'vid-conn', url: 'https://vid-conn.netlify.app' },
  { name: 'batchmark', url: 'https://batchmark.netlify.app' },
  { name: 'memories-in-motion', url: 'https://album-slideshow.netlify.app' },
  { name: 'al-qari', url: 'https://recitation-alqari.netlify.app' },
  { name: 'playback-learn', url: 'https://playbacks.netlify.app' },
  { name: 'track-my-workout', url: 'https://track-my-workout.netlify.app' },
  { name: 'uae-gratuity', url: 'https://my-gratuity.netlify.app' },
  { name: 'pacman', url: 'https://pacmans.netlify.app' },
  { name: 'tic-tac-toe', url: 'https://khurram-tic-tac-toe.netlify.app' },
  { name: 'n-place', url: 'https://n-place.netlify.app' },
  { name: 'flappy-bird', url: 'https://flappy-birrd.netlify.app' },
];

const browser = await chromium.launch({ headless: true });

for (const site of sites) {
  console.log(`Capturing: ${site.name} - ${site.url}`);
  try {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    const filePath = path.join(outputDir, `${site.name}.jpg`);
    await page.screenshot({ path: filePath, type: 'jpeg', quality: 85, clip: { x: 0, y: 0, width: 1280, height: 720 } });
    console.log(`  ✅ Saved: ${site.name}.jpg`);
    await page.close();
  } catch (err) {
    console.error(`  ❌ Failed: ${site.name} - ${err.message}`);
  }
}

await browser.close();
console.log('\nAll screenshots done!');
