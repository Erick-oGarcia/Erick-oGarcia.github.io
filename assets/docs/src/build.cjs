// Gera os PDFs do CV a partir dos fontes HTML desta pasta.
// Precisa do Playwright. Se nao houver node_modules aqui, aponte para outro projeto que tenha:
//   NODE_PATH=/caminho/para/projeto/node_modules node assets/docs/src/build.cjs
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

const src = path.resolve(__dirname);
const out = path.resolve(__dirname, '..');
const targets = [
  ['cv-pt.html', 'Erick_Garcia_QA_Automation_Pt.pdf'],
  ['cv-en.html', 'Erick_Garcia_QA_Automation_En.pdf'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const [html, pdf] of targets) {
    await page.goto(pathToFileURL(path.join(src, html)).href, { waitUntil: 'load' });
    await page.pdf({ path: path.join(out, pdf), format: 'A4', printBackground: true });
    console.log('gerado:', pdf);
  }
  await browser.close();
})();
