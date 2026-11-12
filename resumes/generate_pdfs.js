import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const resumes = [
  {
    html: 'data_analyst.html',
    pdf: 'Moiz_Anwar_Data_Analyst_Resume.pdf'
  },
  {
    html: 'business_analyst.html',
    pdf: 'Moiz_Anwar_Business_Analyst_Resume.pdf'
  },
  {
    html: 'business_finance_analyst.html',
    pdf: 'Moiz_Anwar_Business_Finance_Analyst_Resume.pdf'
  },
  {
    html: 'ai_data_science.html',
    pdf: 'Moiz_Anwar_AI_Data_Science_Resume.pdf'
  }
];

async function generate() {
  console.log('Launching Chrome from:', chromePath);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  for (const item of resumes) {
    const htmlPath = path.resolve(__dirname, item.html);
    const pdfPath = path.resolve(__dirname, item.pdf);
    const fileUrl = `file://${htmlPath.replace(/\\/g, '/')}`;

    console.log(`Rendering ${item.html} -> ${item.pdf}...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    await page.pdf({
      path: pdfPath,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true
    });

    console.log(`Created: ${pdfPath}`);
  }

  await browser.close();
  console.log('All 4 PDFs generated successfully!');
}

generate().catch(err => {
  console.error('PDF Generation Error:', err);
  process.exit(1);
});
