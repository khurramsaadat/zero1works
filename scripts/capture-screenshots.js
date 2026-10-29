const { chromium } = require('playwright');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sites = [
  { url: 'https://baba-games.netlify.app/', name: 'playland' },
  { url: 'https://baba-solitaire.netlify.app/', name: 'solitaire' },
  { url: 'https://app-sphere-app.netlify.app/', name: 'appsphere' },
  { url: 'https://utility-tools-free.netlify.app/', name: 'utility-tools' },
  { url: 'https://dubi-developers.netlify.app/', name: 'dubi-developers' },
  { url: 'https://po-modoro.netlify.app/', name: 'pomodoro' },
  { url: 'https://pomoflow-ticking.netlify.app/', name: 'pomoflow' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  for (const site of sites) {
    const page = await context.newPage();
    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);

      const rawPath = path.join('.playwright-mcp', 'raw-' + site.name + '.png');
      await page.screenshot({ path: rawPath, type: 'png' });

      const outPath = path.join('public', 'images', 'portfolio', site.name + '.jpg');
      await sharp(rawPath)
        .resize(800, 520, { fit: 'cover', position: 'top' })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(outPath);

      const size = (fs.statSync(outPath).size / 1024).toFixed(1);
      console.log(site.name + '.jpg - ' + size + ' KB');
    } catch (e) {
      console.error('Failed: ' + site.name + ' - ' + e.message);
    }
    await page.close();
  }

  await browser.close();
  console.log('Done - all 7 images processed.');
})();
