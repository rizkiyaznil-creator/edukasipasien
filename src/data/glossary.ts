// Kamus istilah — SUMBER TUNGGAL.
// Dipakai oleh halaman /kamus dan oleh komponen <Istilah> di dalam artikel.
// Untuk menambah istilah baru, cukup tambahkan satu objek di bawah ini.

export interface GlossaryEntry {
  /** Kata yang ditampilkan, mis. "Histerektomi" */
  term: string;
  /** ID/anchor unik (kebab-case), mis. "histerektomi" */
  slug: string;
  /** Penjelasan dengan bahasa sederhana */
  definition: string;
  /** Kategori untuk pengelompokan/filter (opsional) */
  category?: string;
  /** Kata lain yang merujuk ke istilah ini (untuk pencarian) */
  aliases?: string[];
}

export const glossary: GlossaryEntry[] = [
  // ——— Anatomi ———
  {
    term: 'Serviks (Leher Rahim)',
    slug: 'serviks',
    category: 'Anatomi',
    aliases: ['leher rahim', 'cervix'],
    definition:
      'Bagian bawah rahim yang menyempit dan menghubungkan rahim dengan vagina. Sering disebut "leher rahim".',
  },
  {
    term: 'Rahim (Uterus)',
    slug: 'rahim',
    category: 'Anatomi',
    aliases: ['uterus', 'kandungan'],
    definition:
      'Organ berongga tempat janin tumbuh selama kehamilan. Dindingnya terdiri atas beberapa lapisan otot dan selaput.',
  },
  {
    term: 'Ovarium (Indung Telur)',
    slug: 'ovarium',
    category: 'Anatomi',
    aliases: ['indung telur'],
    definition:
      'Sepasang organ kecil di kanan dan kiri rahim yang menghasilkan sel telur serta hormon perempuan.',
  },
  {
    term: 'Endometrium',
    slug: 'endometrium',
    category: 'Anatomi',
    definition:
      'Lapisan dinding paling dalam rahim yang menebal setiap bulan dan luruh saat menstruasi.',
  },
  {
    term: 'Vagina',
    slug: 'vagina',
    category: 'Anatomi',
    definition:
      'Saluran berotot yang menghubungkan serviks dengan bagian luar tubuh.',
  },
  {
    term: 'Kelenjar Getah Bening',
    slug: 'kelenjar-getah-bening',
    category: 'Anatomi',
    aliases: ['limfonodi', 'getah bening'],
    definition:
      'Kelenjar kecil bagian dari sistem pertahanan tubuh. Sel kanker kadang menyebar lebih dulu ke kelenjar ini.',
  },

  // ——— Penyebab ———
  {
    term: 'HPV (Human Papillomavirus)',
    slug: 'hpv',
    category: 'Penyebab',
    aliases: ['human papillomavirus', 'virus hpv'],
    definition:
      'Virus yang menular melalui kontak seksual. Beberapa tipe berisiko tinggi (terutama tipe 16 dan 18) dapat menyebabkan kanker serviks bila menetap lama.',
  },

  // ——— Pemeriksaan ———
  {
    term: 'IVA (Inspeksi Visual Asam Asetat)',
    slug: 'iva',
    category: 'Pemeriksaan',
    aliases: ['inspeksi visual asam asetat'],
    definition:
      'Pemeriksaan skrining sederhana dengan mengoleskan asam asetat (cuka encer) ke serviks untuk melihat perubahan sel. Tersedia di banyak puskesmas.',
  },
  {
    term: 'Pap Smear (Tes Pap)',
    slug: 'pap-smear',
    category: 'Pemeriksaan',
    aliases: ['tes pap', 'pap test'],
    definition:
      'Pengambilan sampel sel dari permukaan serviks untuk diperiksa di laboratorium guna mendeteksi sel abnormal sejak dini.',
  },
  {
    term: 'Tes HPV DNA',
    slug: 'tes-hpv-dna',
    category: 'Pemeriksaan',
    aliases: ['hpv dna'],
    definition:
      'Pemeriksaan laboratorium untuk mendeteksi keberadaan virus HPV berisiko tinggi pada serviks.',
  },
  {
    term: 'Kolposkopi',
    slug: 'kolposkopi',
    category: 'Pemeriksaan',
    definition:
      'Pemeriksaan serviks menggunakan alat pembesar bercahaya (kolposkop) untuk melihat area abnormal lebih jelas, biasanya setelah hasil skrining tidak normal.',
  },
  {
    term: 'Biopsi',
    slug: 'biopsi',
    category: 'Pemeriksaan',
    definition:
      'Pengambilan sepotong kecil jaringan untuk diperiksa di bawah mikroskop. Ini adalah cara memastikan diagnosis kanker.',
  },
  {
    term: 'FIGO',
    slug: 'figo',
    category: 'Pemeriksaan',
    definition:
      'Sistem penentuan stadium kanker organ reproduksi perempuan yang dipakai secara internasional.',
  },

  // ——— Umum ———
  {
    term: 'Lesi Prakanker',
    slug: 'lesi-prakanker',
    category: 'Umum',
    aliases: ['prakanker', 'displasia', 'lesi pra-kanker'],
    definition:
      'Perubahan sel yang belum menjadi kanker, tetapi bisa berkembang menjadi kanker bila tidak ditangani. Pada tahap ini pengobatan sangat efektif.',
  },
  {
    term: 'Stadium',
    slug: 'stadium',
    category: 'Umum',
    definition:
      'Tingkat penyebaran kanker, mulai dari terbatas di satu tempat (dini) hingga menyebar ke organ lain (lanjut). Stadium membantu menentukan pilihan pengobatan.',
  },
  {
    term: 'Metastasis',
    slug: 'metastasis',
    category: 'Umum',
    aliases: ['menyebar', 'anak sebar'],
    definition:
      'Penyebaran sel kanker dari tempat asalnya ke bagian tubuh yang lain.',
  },
  {
    term: 'Tumor Jinak',
    slug: 'tumor-jinak',
    category: 'Umum',
    definition:
      'Benjolan yang tumbuh tetapi tidak menyebar ke jaringan lain dan umumnya tidak berbahaya.',
  },
  {
    term: 'Tumor Ganas',
    slug: 'tumor-ganas',
    category: 'Umum',
    aliases: ['kanker', 'keganasan'],
    definition:
      'Benjolan kanker yang dapat tumbuh menembus jaringan sekitar dan menyebar ke bagian tubuh lain.',
  },
  {
    term: 'Prognosis',
    slug: 'prognosis',
    category: 'Umum',
    definition:
      'Perkiraan dokter mengenai perjalanan penyakit dan kemungkinan hasil pengobatan.',
  },
  {
    term: 'Remisi',
    slug: 'remisi',
    category: 'Umum',
    definition:
      'Kondisi ketika tanda dan gejala kanker berkurang atau hilang setelah pengobatan.',
  },
  {
    term: 'Kambuh (Rekurensi)',
    slug: 'kambuh',
    category: 'Umum',
    aliases: ['rekurensi', 'kambuh kembali'],
    definition:
      'Kanker yang muncul kembali setelah sebelumnya membaik atau dinyatakan hilang.',
  },
  {
    term: 'Kuratif',
    slug: 'kuratif',
    category: 'Umum',
    definition: 'Pengobatan yang bertujuan untuk menyembuhkan penyakit.',
  },
  {
    term: 'Paliatif',
    slug: 'paliatif',
    category: 'Umum',
    definition:
      'Perawatan yang bertujuan meringankan gejala dan menjaga kualitas hidup, bukan untuk menyembuhkan.',
  },
  {
    term: 'Onkologi',
    slug: 'onkologi',
    category: 'Umum',
    definition: 'Cabang ilmu kedokteran yang khusus menangani kanker.',
  },
  {
    term: 'Ginekologi Onkologi',
    slug: 'ginekologi-onkologi',
    category: 'Umum',
    aliases: ['ginekologi-onkologi', 'gineko onkologi'],
    definition:
      'Subspesialisasi kedokteran yang menangani kanker pada organ reproduksi perempuan, seperti serviks, rahim, dan ovarium.',
  },

  // ——— Pengobatan ———
  {
    term: 'Histerektomi',
    slug: 'histerektomi',
    category: 'Pengobatan',
    definition: 'Operasi pengangkatan rahim.',
  },
  {
    term: 'Histerektomi Radikal',
    slug: 'histerektomi-radikal',
    category: 'Pengobatan',
    definition:
      'Operasi pengangkatan rahim beserta jaringan penyangga di sekitarnya dan bagian atas vagina, biasanya untuk kanker serviks stadium awal.',
  },
  {
    term: 'Trakelektomi',
    slug: 'trakelektomi',
    category: 'Pengobatan',
    aliases: ['trachelectomy'],
    definition:
      'Operasi pengangkatan serviks dengan tetap mempertahankan rahim, sehingga pada kasus tertentu masih memungkinkan kehamilan.',
  },
  {
    term: 'Konisasi',
    slug: 'konisasi',
    category: 'Pengobatan',
    aliases: ['cone biopsy', 'biopsi kerucut'],
    definition:
      'Pengangkatan jaringan serviks berbentuk kerucut, dipakai untuk memastikan diagnosis sekaligus mengobati lesi prakanker.',
  },
  {
    term: 'LEEP / LLETZ',
    slug: 'leep',
    category: 'Pengobatan',
    aliases: ['leep', 'lletz'],
    definition:
      'Tindakan mengangkat jaringan serviks yang abnormal menggunakan kawat tipis beraliran listrik.',
  },
  {
    term: 'Krioterapi',
    slug: 'krioterapi',
    category: 'Pengobatan',
    definition: 'Pengobatan dengan cara membekukan dan merusak sel-sel abnormal.',
  },
  {
    term: 'Kemoterapi',
    slug: 'kemoterapi',
    category: 'Pengobatan',
    aliases: ['kemo'],
    definition:
      'Pengobatan kanker menggunakan obat-obatan (lewat infus atau diminum) untuk membunuh atau menghambat sel kanker.',
  },
  {
    term: 'Radioterapi (Radiasi)',
    slug: 'radioterapi',
    category: 'Pengobatan',
    aliases: ['radiasi', 'penyinaran'],
    definition:
      'Pengobatan kanker menggunakan sinar berenergi tinggi untuk merusak sel kanker.',
  },
  {
    term: 'Brakiterapi',
    slug: 'brakiterapi',
    category: 'Pengobatan',
    definition:
      'Jenis radioterapi yang sumber radiasinya ditempatkan dekat atau di dalam tumor, dari dalam tubuh.',
  },
  {
    term: 'Kemoradiasi',
    slug: 'kemoradiasi',
    category: 'Pengobatan',
    definition:
      'Pemberian kemoterapi dan radioterapi secara bersamaan agar saling menguatkan, sering dipakai pada kanker serviks stadium lanjut lokal.',
  },
  {
    term: 'Terapi Target',
    slug: 'terapi-target',
    category: 'Pengobatan',
    definition:
      'Obat yang dirancang menyerang bagian tertentu pada sel kanker, sehingga lebih terarah.',
  },
  {
    term: 'Imunoterapi',
    slug: 'imunoterapi',
    category: 'Pengobatan',
    definition:
      'Pengobatan yang membantu sistem kekebalan tubuh mengenali dan melawan sel kanker.',
  },

  // ——— Pencegahan ———
  {
    term: 'Vaksin HPV',
    slug: 'vaksin-hpv',
    category: 'Pencegahan',
    definition:
      'Vaksin untuk mencegah infeksi HPV penyebab sebagian besar kanker serviks. Paling efektif diberikan sebelum seseorang aktif secara seksual.',
  },
  {
    term: 'Skrining',
    slug: 'skrining',
    category: 'Pencegahan',
    aliases: ['penapisan'],
    definition:
      'Pemeriksaan berkala untuk menemukan penyakit sedini mungkin, bahkan sebelum muncul gejala. Untuk kanker serviks contohnya IVA, Pap smear, atau tes HPV DNA.',
  },

  // ——— Efek samping ———
  {
    term: 'Limfedema',
    slug: 'limfedema',
    category: 'Efek samping',
    definition:
      'Pembengkakan (sering di tungkai) akibat terganggunya aliran cairan getah bening, kadang muncul setelah operasi atau radiasi.',
  },
  {
    term: 'Neuropati',
    slug: 'neuropati',
    category: 'Efek samping',
    definition:
      'Gangguan saraf yang dapat menimbulkan kebas, kesemutan, atau nyeri, kadang sebagai efek samping kemoterapi.',
  },
  {
    term: 'Menopause Dini',
    slug: 'menopause-dini',
    category: 'Efek samping',
    definition:
      'Berhentinya menstruasi lebih cepat dari biasanya, bisa terjadi akibat operasi pengangkatan ovarium atau radiasi.',
  },

  // ——— Tambahan untuk Kanker Ovarium ———
  {
    term: 'Tuba Falopi (Saluran Telur)',
    slug: 'tuba-falopi',
    category: 'Anatomi',
    aliases: ['saluran telur', 'tuba'],
    definition:
      'Sepasang saluran yang menghubungkan ovarium dengan rahim. Banyak kanker ovarium tipe tersering kini diduga bermula di sini.',
  },
  {
    term: 'Peritoneum',
    slug: 'peritoneum',
    category: 'Anatomi',
    definition:
      'Selaput tipis yang melapisi rongga perut dan menyelimuti organ-organ di dalamnya.',
  },
  {
    term: 'BRCA1 / BRCA2',
    slug: 'brca',
    category: 'Penyebab',
    aliases: ['brca', 'gen brca'],
    definition:
      'Gen yang bila mengalami mutasi dapat meningkatkan risiko kanker ovarium dan payudara. Mutasinya bisa diturunkan dalam keluarga.',
  },
  {
    term: 'CA-125',
    slug: 'ca-125',
    category: 'Pemeriksaan',
    aliases: ['ca125'],
    definition:
      'Salah satu petanda tumor dalam darah yang kadarnya dapat meningkat pada kanker ovarium. Berguna terutama untuk pemantauan, bukan untuk memastikan diagnosis.',
  },
  {
    term: 'Petanda Tumor',
    slug: 'petanda-tumor',
    category: 'Pemeriksaan',
    aliases: ['tumor marker', 'penanda tumor'],
    definition:
      'Zat (sering berupa protein) dalam darah yang kadarnya bisa meningkat pada kanker tertentu, dipakai untuk membantu pemantauan penyakit.',
  },
  {
    term: 'USG Transvaginal',
    slug: 'usg-transvaginal',
    category: 'Pemeriksaan',
    aliases: ['ultrasonografi transvaginal'],
    definition:
      'Pemeriksaan ultrasonografi melalui vagina untuk melihat ovarium dan rahim dengan lebih jelas.',
  },
  {
    term: 'Konseling Genetik',
    slug: 'konseling-genetik',
    category: 'Pencegahan',
    definition:
      'Konsultasi untuk menilai risiko kanker yang diturunkan dalam keluarga, termasuk kemungkinan tes gen seperti BRCA.',
  },
  {
    term: 'Operasi Sitoreduksi (Debulking)',
    slug: 'sitoreduksi',
    category: 'Pengobatan',
    aliases: ['debulking', 'sitoreduktif'],
    definition:
      'Operasi mengangkat sebanyak mungkin jaringan kanker di rongga perut. Hasil terbaik bila tidak ada sisa tumor yang masih terlihat.',
  },
  {
    term: 'Salpingo-ooforektomi',
    slug: 'salpingo-ooforektomi',
    category: 'Pengobatan',
    aliases: ['ooforektomi'],
    definition:
      'Operasi pengangkatan ovarium beserta tuba falopi. Bila dilakukan pada kedua sisi disebut bilateral.',
  },
  {
    term: 'Omentektomi',
    slug: 'omentektomi',
    category: 'Pengobatan',
    aliases: ['omentum'],
    definition:
      'Pengangkatan omentum — lapisan lemak yang menggantung di rongga perut dan sering menjadi tempat penyebaran kanker ovarium.',
  },
  {
    term: 'Terapi Neoadjuvan',
    slug: 'neoadjuvan',
    category: 'Pengobatan',
    definition:
      'Pengobatan (misalnya kemoterapi) yang diberikan lebih dulu sebelum operasi untuk mengecilkan tumor.',
  },
  {
    term: 'Terapi Rumatan (Maintenance)',
    slug: 'terapi-rumatan',
    category: 'Pengobatan',
    aliases: ['maintenance', 'terapi pemeliharaan'],
    definition:
      'Pengobatan lanjutan setelah kemoterapi utama untuk menjaga agar kanker tidak cepat kembali.',
  },
  {
    term: 'Penghambat PARP (PARP Inhibitor)',
    slug: 'parp-inhibitor',
    category: 'Pengobatan',
    aliases: ['parp', 'penghambat parp'],
    definition:
      'Obat terapi target yang sering dipakai sebagai terapi rumatan kanker ovarium, terutama pada pasien dengan mutasi BRCA.',
  },
  {
    term: 'Kista Ovarium',
    slug: 'kista-ovarium',
    category: 'Umum',
    aliases: ['kista'],
    definition:
      'Kantong berisi cairan yang terbentuk pada ovarium. Sebagian besar bersifat jinak dan bukan kanker.',
  },
  {
    term: 'Asites',
    slug: 'asites',
    category: 'Umum',
    definition:
      'Penumpukan cairan di dalam rongga perut yang membuat perut tampak membesar; dapat terjadi pada kanker ovarium stadium lanjut.',
  },

  // ——— Kemoterapi & Radioterapi ———
  {
    term: 'Adjuvan',
    slug: 'adjuvan',
    category: 'Pengobatan',
    aliases: ['terapi adjuvan'],
    definition:
      'Terapi tambahan (misalnya kemoterapi atau radioterapi) yang diberikan setelah pengobatan utama — biasanya operasi — untuk membunuh sisa sel kanker dan menurunkan risiko kambuh.',
  },
  {
    term: 'Siklus Kemoterapi',
    slug: 'siklus-kemoterapi',
    category: 'Pengobatan',
    aliases: ['siklus', 'siklus kemo'],
    definition:
      'Satu putaran pemberian obat kemoterapi yang diikuti masa istirahat agar tubuh pulih. Pengobatan biasanya terdiri atas beberapa siklus.',
  },
  {
    term: 'Intravena (Infus)',
    slug: 'intravena',
    category: 'Pengobatan',
    aliases: ['infus', 'iv'],
    definition:
      'Pemberian obat atau cairan langsung ke pembuluh darah balik (vena), umumnya melalui selang infus.',
  },
  {
    term: 'Chemoport',
    slug: 'chemoport',
    category: 'Pengobatan',
    aliases: ['port', 'port kemo', 'kateter vena sentral'],
    definition:
      'Alat kecil yang dipasang di bawah kulit dan tersambung ke pembuluh darah besar, untuk memudahkan pemberian kemoterapi berulang tanpa sering menusuk lengan.',
  },
  {
    term: 'Antiemetik',
    slug: 'antiemetik',
    category: 'Pengobatan',
    aliases: ['obat anti-mual', 'anti-mual'],
    definition:
      'Obat untuk mencegah dan meredakan mual serta muntah, sering diberikan bersama kemoterapi.',
  },
  {
    term: 'Radioterapi Eksternal (EBRT)',
    slug: 'radioterapi-eksternal',
    category: 'Pengobatan',
    aliases: ['ebrt', 'radiasi eksternal', 'penyinaran luar'],
    definition:
      'Radioterapi yang sumber sinarnya berasal dari mesin di luar tubuh dan diarahkan ke area kanker. Disebut juga EBRT.',
  },
  {
    term: 'Simulasi Radioterapi',
    slug: 'simulasi-radioterapi',
    category: 'Pengobatan',
    aliases: ['simulasi', 'planning radioterapi'],
    definition:
      'Tahap persiapan radioterapi untuk menentukan posisi tubuh dan area penyinaran secara tepat, biasanya memakai CT dan penanda kecil pada kulit.',
  },
  {
    term: 'Fraksinasi',
    slug: 'fraksinasi',
    category: 'Pengobatan',
    aliases: ['fraksi'],
    definition:
      'Pembagian total dosis radiasi menjadi banyak sesi kecil harian (disebut fraksi) agar lebih efektif melawan kanker dan lebih aman bagi jaringan sehat.',
  },
  {
    term: 'Neutropenia',
    slug: 'neutropenia',
    category: 'Efek samping',
    definition:
      'Penurunan sel darah putih jenis neutrofil akibat kemoterapi, yang membuat tubuh lebih mudah terkena infeksi.',
  },
  {
    term: 'Anemia',
    slug: 'anemia',
    category: 'Efek samping',
    aliases: ['kurang darah'],
    definition:
      'Kekurangan sel darah merah atau hemoglobin yang dapat menimbulkan lemas, pucat, dan mudah lelah.',
  },
  {
    term: 'Trombositopenia',
    slug: 'trombositopenia',
    category: 'Efek samping',
    definition:
      'Penurunan jumlah keping darah (trombosit) sehingga tubuh lebih mudah memar atau berdarah.',
  },
  {
    term: 'Mukositis',
    slug: 'mukositis',
    category: 'Efek samping',
    aliases: ['sariawan'],
    definition:
      'Peradangan dan luka pada lapisan mulut atau saluran cerna (sering berupa sariawan) akibat kemoterapi atau radioterapi.',
  },
  {
    term: 'Alopesia (Rambut Rontok)',
    slug: 'alopesia',
    category: 'Efek samping',
    aliases: ['rambut rontok'],
    definition:
      'Kerontokan rambut sebagai efek samping sementara dari sebagian obat kemoterapi. Rambut umumnya tumbuh kembali setelah pengobatan selesai.',
  },
  {
    term: 'Dilator Vagina',
    slug: 'dilator-vagina',
    category: 'Efek samping',
    aliases: ['dilator'],
    definition:
      'Alat berbentuk tabung untuk membantu menjaga kelenturan dan lebar vagina setelah radioterapi panggul, guna mencegah penyempitan.',
  },
];

/** Cari satu istilah berdasarkan slug. */
export function getEntryBySlug(slug: string): GlossaryEntry | undefined {
  return glossary.find((e) => e.slug === slug);
}

/** Daftar kategori unik (untuk filter). */
export function getCategories(): string[] {
  return Array.from(new Set(glossary.map((e) => e.category ?? 'Lainnya'))).sort();
}
