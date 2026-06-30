// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deploy: GitHub Pages dengan custom domain -> https://medangynsurgery.com (root).
// - `site` : domain final (dipakai untuk QR, sitemap, canonical).
// - `base` : '/' karena tayang di root domain (bukan subpath).
// Semua tautan/aset internal memakai helper withBase() di src/lib/base.ts.
// File public/CNAME menjaga custom domain tetap terpasang pada tiap deploy.
export default defineConfig({
  site: 'https://medangynsurgery.com',
  base: '/',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
