import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Koleksi "topics": setiap topik penyakit adalah satu file .md / .mdx
// di dalam src/content/topics/. Slug halaman diambil dari nama file.
const topics = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/topics' }),
  schema: z.object({
    // Judul topik, mis. "Kanker Serviks (Leher Rahim)"
    title: z.string(),
    // Pengelompokan, mis. "Kanker Ginekologi"
    category: z.string().default('Kanker Ginekologi'),
    // Ringkasan singkat untuk kartu di halaman depan
    summary: z.string(),
    // Urutan tampil (kecil = lebih dulu)
    order: z.number().default(0),
    // Emoji/ikon sederhana untuk kartu
    icon: z.string().default('🎗️'),
    // Tanggal pembaruan konten
    updatedDate: z.coerce.date(),
    // Status validasi oleh dokter
    validated: z.boolean().default(false),
    // Nama dokter yang memvalidasi (jika sudah)
    reviewer: z.string().optional(),
    // Sembunyikan dari daftar jika masih digarap
    draft: z.boolean().default(false),
  }),
});

export const collections = { topics };
