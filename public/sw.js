// Service worker sederhana untuk medangynsurgery.
// Strategi:
//  - Navigasi halaman: utamakan jaringan, simpan ke cache, fallback ke cache/beranda saat offline.
//  - Aset (css/js/gambar/font): tampilkan dari cache sambil memperbarui di latar (stale-while-revalidate).
// Naikkan VERSION saat ada perubahan besar agar cache lama dibersihkan.
// BASE harus sama dengan `base` di astro.config.mjs (lihat scope SW di BaseLayout).
const VERSION = 'medangynsurgery-v7';
const BASE = '/';
const CORE = [BASE];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.addAll(CORE))
      .catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
      )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Navigasi halaman → network-first
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || caches.match(BASE))
        )
    );
    return;
  }

  // Aset lain → stale-while-revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
