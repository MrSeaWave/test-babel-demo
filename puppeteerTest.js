const puppeteer = require('puppeteer');

(async () => {
  console.log('puppeteer start---');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
