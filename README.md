# Temant — Sahabat Ginekologi Onkologi

Media edukasi pasien tentang **kanker organ reproduksi perempuan** (kanker
serviks, ovarium, rahim, dll.) dengan bahasa yang mudah dipahami.

Dibangun dengan [Astro](https://astro.build) — ringan, cepat, dan gratis
di-deploy. Cocok untuk dibuka di ponsel pasien, ditampilkan lewat **QR code** di
ruang konsultasi, atau dicetak sebagai lembar edukasi.

## Fitur

- 📱 **Mobile-first & ringan** — nyaman dibuka walau sinyal lemah.
- 📚 **Topik terstruktur** — alur baku: apa itu → gejala → faktor risiko →
  pemeriksaan → stadium → pengobatan → efek samping → kontrol → pencegahan →
  FAQ → tanda bahaya.
- 📖 **Kamus istilah** — bisa dicari; istilah di dalam artikel bisa di-tap untuk
  melihat artinya (popover).
- 🔗 **QR code & berbagi** — tiap halaman punya QR (dibuat saat build) + tombol
  bagikan/cetak.
- ✅ **Alur validasi** — tiap topik bertanda *Draf* atau *Tervalidasi dokter*.
- 🩺 **Disclaimer** otomatis — menegaskan ini edukasi, bukan pengganti dokter.
- ⚡ **PWA** — bisa "dipasang" ke layar utama & dibaca offline setelah dikunjungi.

## Menjalankan secara lokal

```bash
npm install        # sekali saja
npm run dev        # buka http://localhost:4321
```

Perintah lain:

```bash
npm run build      # build ke folder dist/
npm run preview    # pratinjau hasil build
npm run gen:icons  # buat ulang ikon PWA dari logo
```

## Menambah / mengubah konten

### Menambah topik baru

1. Buat file baru di `src/content/topics/`, mis. `kanker-ovarium.mdx`.
   Nama file menjadi alamat halaman: `/topik/kanker-ovarium`.
2. Isi bagian _frontmatter_ di paling atas, lalu tulis isinya dengan Markdown:

   ```mdx
   ---
   title: "Kanker Ovarium (Indung Telur)"
   category: "Kanker Ginekologi"
   summary: "Ringkasan singkat untuk kartu di beranda."
   order: 2              # urutan tampil (kecil = lebih dulu)
   icon: "🌸"
   updatedDate: 2026-06-23
   validated: false       # true bila sudah divalidasi dokter
   reviewer: ""           # mis. "dr. Nama, Sp.O.G (Onk)"
   draft: false           # true = sembunyikan dari daftar
   ---

   import Istilah from '../../components/Istilah.astro';
   import Callout from '../../components/Callout.astro';

   ## Apa itu ...
   Tulis isi di sini.
   ```

### Menandai sebuah istilah agar bisa di-tap

Gunakan komponen `<Istilah>` dengan `id` sesuai slug di kamus:

```mdx
<Istilah id="histerektomi">histerektomi</Istilah>
```

### Kotak sorotan (callout)

```mdx
<Callout type="danger" title="Tanda bahaya">
  <p>Isi peringatan…</p>
</Callout>
```

Tipe yang tersedia: `info`, `tip`, `warn`, `danger`.

### Menambah istilah ke kamus

Edit `src/data/glossary.ts` dan tambahkan satu objek. Istilah ini otomatis
muncul di halaman **/kamus** sekaligus bisa dipakai `<Istilah id="...">` di
artikel mana pun (sumber tunggal, tidak perlu menulis ulang definisi).

### Menandai topik sudah divalidasi dokter

Pada frontmatter topik, ubah `validated: true` dan isi `reviewer`. Label di
beranda dan banner di halaman topik akan otomatis berganti menjadi
"✓ Tervalidasi dokter".

## Sebelum deploy

Edit `astro.config.mjs` dan ganti `site` dengan domain final, lalu `npm run build`
ulang agar QR code menunjuk ke alamat yang benar. Perbarui juga URL `Sitemap`
pada `public/robots.txt`.

```js
// astro.config.mjs
site: 'https://domain-anda.com',
```

## Deploy gratis

Situs ini statis, jadi bisa di-deploy gratis ke mana saja, misalnya:

- **Netlify / Vercel / Cloudflare Pages** — hubungkan repo, perintah build
  `npm run build`, folder output `dist`.
- **GitHub Pages** — jika memakai subpath (`namauser.github.io/edukasipasien`),
  set `base: '/edukasipasien'` di `astro.config.mjs`.

## Struktur proyek

```
src/
  content/topics/      ← artikel tiap penyakit (.mdx)
  data/glossary.ts     ← kamus istilah (sumber tunggal)
  components/          ← Istilah, ShareQR, Callout, kartu, dll.
  layouts/             ← kerangka halaman
  pages/               ← beranda, /kamus, /tentang, /topik/[slug]
public/                ← manifest PWA, service worker, ikon, favicon
scripts/               ← pembuat ikon PWA
```

## Catatan penting

Seluruh konten **bersifat edukasi dan bukan pengganti konsultasi, diagnosis,
atau pengobatan oleh dokter**. Pastikan setiap topik ditinjau tenaga medis
sebelum ditandai *Tervalidasi*.
