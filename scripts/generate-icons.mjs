// Membuat ikon PWA (PNG) dari logo pita medangynsurgery.
// Memakai `sharp` yang sudah menjadi dependensi Astro.
// Jalankan: npm run gen:icons
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outDir = fileURLToPath(new URL('../public/icons/', import.meta.url));

const ribbon = `
  <g fill="none" stroke="#ffffff" stroke-width="8.5" stroke-linecap="round">
    <path d="M38 86 C 16 54, 48 46, 50 26" />
    <path d="M62 86 C 84 54, 52 46, 50 26" />
  </g>`;

const standardSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#129e90" />
      <stop offset="1" stop-color="#0a655c" />
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#g)" />
  ${ribbon}
</svg>`;

// Maskable: latar penuh + pita diperkecil agar masuk "safe zone".
const maskableSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#0d7a6f" />
  <g transform="translate(50 50) scale(0.6) translate(-50 -50)">${ribbon}</g>
</svg>`;

async function render(svg, file) {
  await sharp(Buffer.from(svg)).png().toFile(file);
  console.log('✓', file);
}

await mkdir(outDir, { recursive: true });
await render(standardSvg(192), outDir + 'icon-192.png');
await render(standardSvg(512), outDir + 'icon-512.png');
await render(maskableSvg(512), outDir + 'icon-maskable-512.png');
console.log('Selesai membuat ikon.');
