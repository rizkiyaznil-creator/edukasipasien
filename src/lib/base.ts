// Helper untuk menambahkan base path (mis. "/edukasipasien") ke tautan & aset
// internal. Saat di-deploy ke subpath (GitHub Pages), semua tautan harus diawali
// base path ini. Aman dipakai baik `base` diakhiri "/" maupun tidak.
//
// Vite/Astro mengganti `import.meta.env.BASE_URL` dengan nilai `base` di
// astro.config.mjs, baik di kode server (frontmatter) maupun kode klien.
const RAW_BASE = import.meta.env.BASE_URL || '/';

/** Gabungkan base path dengan path internal. withBase('/kamus') -> '/edukasipasien/kamus' */
export function withBase(path = '/'): string {
  const base = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}
