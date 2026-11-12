import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const files = [
  'data_analyst.html',
  'business_analyst.html',
  'business_finance_analyst.html',
  'ai_data_science.html'
];

async function measure() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  // 8.5 x 11 inches at 96 DPI is 816 x 1056 px
  await page.setViewport({ width: 816, height: 1056 });

  for (const f of files) {
    const htmlPath = path.resolve(__dirname, f);
    await page.goto(`file://${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });
    const height = await page.evaluate(() => document.body.scrollHeight);
    console.log(`${f} scrollHeight: ${height}px (Target printable height ~970px)`);
  }

  await browser.close();
}

measure().catch(console.error);
