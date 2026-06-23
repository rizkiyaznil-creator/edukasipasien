// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deploy: GitHub Pages (project site) -> https://rizkiyaznil-creator.github.io/edukasipasien/
// - `site`  : origin GitHub Pages (tanpa subpath).
// - `base`  : subpath repo. Semua tautan/aset internal memakai helper withBase()
//             di src/lib/base.ts agar tetap benar di bawah subpath ini.
// Jika nanti pindah ke domain sendiri di root, set `base` ke '/' (atau hapus)
// dan ganti `site` ke domain final; QR/sitemap/canonical ikut menyesuaikan.
export default defineConfig({
  site: 'https://rizkiyaznil-creator.github.io',
  base: '/edukasipasien',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
