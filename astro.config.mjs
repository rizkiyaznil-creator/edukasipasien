// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// PENTING: ganti `site` dengan domain final saat di-deploy.
// Contoh: 'https://sagita.netlify.app' atau domain sendiri.
// Jika di-deploy ke GitHub Pages dengan subpath, isi juga `base`.
export default defineConfig({
  site: 'https://sagita.example.id',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
