import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';

const htmlPath = new URL('../dist/index.html', import.meta.url);
const html = await readFile(htmlPath, 'utf8');
const emptyRoot = '<div id="root"></div>';

if (!html.includes(emptyRoot)) {
  throw new Error('Could not find the expected empty React root in dist/index.html.');
}

const staticMarkup = render();
const prerenderedHtml = html.replace(emptyRoot, `<div id="root">${staticMarkup}</div>`);
await writeFile(htmlPath, prerenderedHtml, 'utf8');
console.log('Pre-rendered portfolio content into dist/index.html.');
