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

  // ——— Terapi Target & Imunoterapi (pengobatan presisi) ———
  {
    term: 'Biomarker (Penanda Biologis)',
    slug: 'biomarker',
    category: 'Pemeriksaan',
    aliases: ['penanda biologis', 'penanda tumor', 'pemeriksaan molekuler'],
    definition:
      'Penanda pada tumor atau darah yang dapat diperiksa untuk membantu dokter memilih pengobatan yang paling sesuai. Contohnya BRCA/HRD, dMMR/MSI, PD-L1, dan HER2.',
  },
  {
    term: 'Penghambat PARP',
    slug: 'penghambat-parp',
    category: 'Pengobatan',
    aliases: ['parp inhibitor', 'parp', 'olaparib', 'niraparib'],
    definition:
      'Obat terapi target yang melumpuhkan salah satu cara sel kanker memperbaiki kerusakan DNA-nya, sehingga sel kanker mati. Paling bermanfaat pada kanker ovarium dengan mutasi BRCA atau HRD, sering sebagai terapi pemeliharaan.',
  },
  {
    term: 'Anti-angiogenesis',
    slug: 'anti-angiogenesis',
    category: 'Pengobatan',
    aliases: ['bevacizumab', 'anti-vegf', 'penghambat pembuluh darah'],
    definition:
      'Obat target yang menghambat pembentukan pembuluh darah baru yang dibutuhkan tumor untuk tumbuh. Contohnya bevacizumab, dipakai pada kanker ovarium dan serviks.',
  },
  {
    term: 'Penghambat Checkpoint Imun',
    slug: 'penghambat-checkpoint',
    category: 'Pengobatan',
    aliases: ['immune checkpoint inhibitor', 'anti pd-1', 'anti pd-l1', 'pembrolizumab', 'dostarlimab'],
    definition:
      'Jenis imunoterapi yang melepas "rem" pada sistem kekebalan sehingga sel imun kembali aktif mengenali dan menyerang kanker. Contohnya pembrolizumab dan dostarlimab.',
  },
  {
    term: 'Konjugat Antibodi-Obat (ADC)',
    slug: 'konjugat-antibodi-obat',
    category: 'Pengobatan',
    aliases: ['adc', 'antibody-drug conjugate', 'tisotumab vedotin'],
    definition:
      'Obat yang menggabungkan antibodi sebagai "pengarah" dengan obat perusak sel, sehingga obat diantar lebih terarah ke sel kanker. Salah satu contohnya dipakai pada kanker serviks yang kambuh.',
  },
  {
    term: 'Terapi Pemeliharaan (Maintenance)',
    slug: 'terapi-pemeliharaan',
    category: 'Pengobatan',
    aliases: ['maintenance', 'terapi rumatan'],
    definition:
      'Pengobatan yang dilanjutkan setelah kemoterapi berhasil mengecilkan kanker, bertujuan menjaga remisi dan menunda kekambuhan. Pada kanker ovarium, contohnya penghambat PARP atau bevacizumab.',
  },
  {
    term: 'HRD (Defisiensi Rekombinasi Homolog)',
    slug: 'hrd',
    category: 'Pemeriksaan',
    aliases: ['homologous recombination deficiency', 'defisiensi rekombinasi homolog'],
    definition:
      'Kondisi ketika sel kanker kesulitan memperbaiki kerusakan DNA-nya. Tumor dengan HRD (termasuk yang bermutasi BRCA) cenderung lebih responsif terhadap penghambat PARP.',
  },
  {
    term: 'dMMR / MSI-tinggi',
    slug: 'dmmr-msi',
    category: 'Pemeriksaan',
    aliases: ['dmmr', 'msi', 'mismatch repair', 'mikrosatelit', 'msi-high', 'msi tinggi'],
    definition:
      'Ciri tumor yang menandakan sistem perbaikan DNA-nya tidak bekerja baik, sehingga banyak terjadi kesalahan genetik. Tumor dengan ciri ini — sering pada kanker rahim — umumnya merespons sangat baik terhadap imunoterapi.',
  },
  {
    term: 'PD-L1',
    slug: 'pd-l1',
    category: 'Pemeriksaan',
    aliases: ['pdl1', 'pd l1', 'cps'],
    definition:
      'Protein pada permukaan sel yang dapat "meredam" serangan sistem kekebalan. Bila tumor PD-L1 positif, imunoterapi penghambat checkpoint cenderung lebih bermanfaat — penting misalnya pada kanker serviks.',
  },
  {
    term: 'HER2',
    slug: 'her2',
    category: 'Pemeriksaan',
    aliases: ['her-2', 'her2/neu'],
    definition:
      'Protein yang bila berlebih dapat mendorong pertumbuhan kanker. Pada sebagian kanker rahim jenis serosa yang HER2-positif, tersedia terapi anti-HER2 seperti trastuzumab.',
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

  // ——— Mioma & Endometriosis ———
  {
    term: 'Mioma Uteri (Miom)',
    slug: 'mioma',
    category: 'Umum',
    aliases: ['miom', 'fibroid', 'leiomioma', 'myoma'],
    definition:
      'Tumor jinak yang tumbuh dari otot dinding rahim. Sangat umum, bukan kanker, dan sangat jarang berubah menjadi ganas.',
  },
  {
    term: 'Miomektomi',
    slug: 'miomektomi',
    category: 'Pengobatan',
    aliases: ['myomectomy', 'pengangkatan miom'],
    definition:
      'Operasi mengangkat mioma tetapi tetap mempertahankan rahim, sehingga masih memungkinkan kehamilan.',
  },
  {
    term: 'Embolisasi Arteri Uterina (UAE)',
    slug: 'embolisasi-arteri-uterina',
    category: 'Pengobatan',
    aliases: ['uae', 'embolisasi miom', 'ufe'],
    definition:
      'Tindakan menyumbat pembuluh darah yang memberi makan mioma sehingga mioma mengecil, tanpa operasi besar dan tetap mempertahankan rahim.',
  },
  {
    term: 'Histeroskopi',
    slug: 'histeroskopi',
    category: 'Pemeriksaan',
    aliases: ['hysteroscopy'],
    definition:
      'Pemeriksaan melihat bagian dalam rongga rahim memakai teropong tipis yang dimasukkan lewat vagina dan serviks. Bisa juga dipakai untuk mengangkat mioma submukosa.',
  },
  {
    term: 'Laparoskopi',
    slug: 'laparoskopi',
    category: 'Pemeriksaan',
    aliases: ['laparoscopy', 'operasi lubang kunci', 'bedah minimal invasif'],
    definition:
      'Operasi melalui beberapa sayatan kecil di perut dengan bantuan kamera. Pada endometriosis menjadi cara paling pasti untuk melihat sekaligus mengangkat jaringan.',
  },
  {
    term: 'Endometriosis',
    slug: 'endometriosis',
    category: 'Umum',
    definition:
      'Kondisi ketika jaringan mirip lapisan dalam rahim (endometrium) tumbuh di luar rahim, menimbulkan peradangan, nyeri, dan kadang gangguan kesuburan.',
  },
  {
    term: 'Endometrioma (Kista Cokelat)',
    slug: 'endometrioma',
    category: 'Umum',
    aliases: ['kista cokelat', 'kista coklat', 'chocolate cyst'],
    definition:
      'Kista pada ovarium berisi darah lama berwarna cokelat akibat endometriosis.',
  },
  {
    term: 'Adenomiosis',
    slug: 'adenomiosis',
    category: 'Umum',
    aliases: ['adenomyosis'],
    definition:
      'Kondisi ketika jaringan mirip endometrium tumbuh ke dalam dinding otot rahim, menyebabkan haid nyeri dan banyak serta rahim membesar.',
  },
  {
    term: 'Dismenore (Nyeri Haid)',
    slug: 'dismenore',
    category: 'Umum',
    aliases: ['nyeri haid', 'kram haid', 'dysmenorrhea'],
    definition:
      'Nyeri atau kram di perut bawah saat menstruasi. Nyeri yang sangat berat hingga mengganggu aktivitas tidak boleh dianggap wajar.',
  },
  {
    term: 'Dispareunia',
    slug: 'dispareunia',
    category: 'Umum',
    aliases: ['nyeri saat berhubungan', 'dyspareunia'],
    definition: 'Nyeri yang dirasakan saat berhubungan seksual.',
  },
  {
    term: 'Perdarahan Menstruasi Berat',
    slug: 'perdarahan-menstruasi-berat',
    category: 'Umum',
    aliases: ['menoragia', 'haid banyak', 'perdarahan haid berlebih'],
    definition:
      'Darah haid yang sangat banyak atau berlangsung lama (misalnya harus berganti pembalut tiap 1–2 jam atau keluar gumpalan besar), dan dapat menyebabkan kurang darah (anemia).',
  },
  {
    term: 'Analog GnRH',
    slug: 'analog-gnrh',
    category: 'Pengobatan',
    aliases: ['gnrh agonis', 'agonis gnrh', 'gnrh'],
    definition:
      'Obat hormonal yang untuk sementara menghentikan haid dan menurunkan kadar estrogen. Dipakai untuk mengecilkan mioma atau meredakan endometriosis; efeknya mirip menopause sementara.',
  },
  {
    term: 'Infertilitas (Sulit Hamil)',
    slug: 'infertilitas',
    category: 'Umum',
    aliases: ['sulit hamil', 'kemandulan', 'infertility'],
    definition:
      'Kesulitan memperoleh kehamilan setelah berhubungan secara teratur tanpa kontrasepsi selama sekitar satu tahun.',
  },

  // ——— Kanker Rahim, Kista Ovarium & Dermoid ———
  {
    term: 'Hiperplasia Endometrium',
    slug: 'hiperplasia-endometrium',
    category: 'Umum',
    aliases: ['penebalan endometrium'],
    definition:
      'Penebalan berlebihan pada lapisan dalam rahim (endometrium). Sebagian jenisnya merupakan tahap prakanker yang dapat mendahului kanker rahim.',
  },
  {
    term: 'Kuretase (Dilatasi & Kuretase / D&C)',
    slug: 'kuretase',
    category: 'Pemeriksaan',
    aliases: ['d&c', 'dilatasi dan kuretase', 'kuret'],
    definition:
      'Tindakan mengambil jaringan dari rongga rahim untuk diperiksa di laboratorium atau untuk mengatasi perdarahan. Sering dilakukan bersama histeroskopi.',
  },
  {
    term: 'Terapi Hormonal',
    slug: 'terapi-hormonal',
    category: 'Pengobatan',
    aliases: ['hormonal', 'progestin', 'terapi hormon'],
    definition:
      'Pengobatan menggunakan hormon (misalnya progestin) untuk menghambat pertumbuhan sel yang dipengaruhi hormon; dipakai pada kasus tertentu kanker rahim.',
  },
  {
    term: 'Kistektomi',
    slug: 'kistektomi',
    category: 'Pengobatan',
    aliases: ['ovarian cystectomy', 'pengangkatan kista'],
    definition:
      'Operasi mengangkat kista dari ovarium sambil mempertahankan jaringan ovarium yang sehat, sehingga kesuburan dapat terjaga.',
  },
  {
    term: 'Kista Dermoid (Teratoma Matur)',
    slug: 'kista-dermoid',
    category: 'Umum',
    aliases: ['teratoma', 'teratoma matur', 'teratoma kistik matur', 'dermoid'],
    definition:
      'Jenis kista ovarium jinak yang berasal dari sel benih dan dapat berisi berbagai jaringan tubuh seperti rambut, lemak, kulit, kadang gigi.',
  },
  {
    term: 'Torsio Ovarium (Ovarium Terpuntir)',
    slug: 'torsio-ovarium',
    category: 'Umum',
    aliases: ['torsio', 'ovarium terpuntir', 'terpuntir'],
    definition:
      'Keadaan ketika ovarium (sering karena ada kista) terpuntir pada tangkainya sehingga aliran darahnya terhenti. Menimbulkan nyeri hebat mendadak dan merupakan keadaan gawat darurat.',
  },
  {
    term: 'Kista Fungsional',
    slug: 'kista-fungsional',
    category: 'Umum',
    aliases: ['kista folikel', 'kista korpus luteum'],
    definition:
      'Kista ovarium yang paling umum, terbentuk sebagai bagian normal dari siklus haid dan biasanya hilang dengan sendirinya.',
  },
  {
    term: 'PMOS (Polyendocrine Metabolic Ovarian Syndrome)',
    slug: 'pcos',
    category: 'Umum',
    aliases: ['pcos', 'sindrom ovarium polikistik', 'sopk', 'polycystic ovary syndrome', 'poliendokrin metabolik ovarium'],
    definition:
      'Gangguan hormon dan metabolik yang menyebabkan haid tidak teratur, tanda kelebihan androgen, dan gambaran ovarium polikistik. Sejak 2026, melalui konsensus global, namanya resmi diganti dari PCOS menjadi PMOS karena dinilai lebih akurat.',
  },

  // ——— Tindakan & Operasi ———
  {
    term: 'Laparotomi',
    slug: 'laparotomi',
    category: 'Pengobatan',
    aliases: ['operasi terbuka', 'bedah terbuka'],
    definition:
      'Operasi membuka rongga perut melalui satu sayatan agar dokter dapat memeriksa dan menangani organ di dalamnya secara langsung.',
  },
  {
    term: 'Anestesi Umum (Bius Total)',
    slug: 'anestesi-umum',
    category: 'Pengobatan',
    aliases: ['bius total', 'anestesi', 'pembiusan'],
    definition:
      'Pembiusan yang membuat pasien tertidur dan tidak merasakan nyeri selama operasi berlangsung.',
  },
  {
    term: 'Surgical Staging (Penentuan Stadium saat Operasi)',
    slug: 'surgical-staging',
    category: 'Pengobatan',
    aliases: ['penentuan stadium operasi', 'staging operasi'],
    definition:
      'Rangkaian langkah selama operasi untuk menentukan seberapa jauh kanker menyebar (stadium), sehingga pengobatan lanjutan dapat direncanakan dengan tepat.',
  },
  {
    term: 'Bilas Peritoneum (Sitologi)',
    slug: 'bilas-peritoneum',
    category: 'Pemeriksaan',
    aliases: ['bilasan peritoneum', 'sitologi cairan', 'peritoneal washing'],
    definition:
      'Pengambilan cairan atau cucian dari rongga perut saat operasi untuk diperiksa apakah mengandung sel kanker.',
  },
  {
    term: 'Potong Beku (Frozen Section)',
    slug: 'potong-beku',
    category: 'Pemeriksaan',
    aliases: ['frozen section', 'vries coupe'],
    definition:
      'Pemeriksaan jaringan secara cepat saat operasi masih berlangsung, untuk membantu dokter mengambil keputusan tindakan saat itu juga.',
  },
  {
    term: 'Pemeriksaan Patologi Anatomi (PA)',
    slug: 'patologi-anatomi',
    category: 'Pemeriksaan',
    aliases: ['pa', 'histopatologi', 'patologi'],
    definition:
      'Pemeriksaan jaringan tubuh di bawah mikroskop oleh dokter spesialis untuk memastikan diagnosis. Hasilnya biasanya keluar dalam beberapa hari hingga dua minggu.',
  },
  {
    term: 'Terapi Sulih Hormon (TSH / HRT)',
    slug: 'terapi-sulih-hormon',
    category: 'Pengobatan',
    aliases: ['hrt', 'hormone replacement therapy', 'sulih hormon'],
    definition:
      'Pemberian hormon untuk meredakan gejala menopause (termasuk menopause akibat pengangkatan kedua ovarium). Tidak cocok untuk semua orang dan harus didiskusikan dengan dokter.',
  },

  // ——— PCOS ———
  {
    term: 'Resistensi Insulin',
    slug: 'resistensi-insulin',
    category: 'Umum',
    aliases: ['kebal insulin'],
    definition:
      'Keadaan ketika tubuh kurang peka terhadap insulin sehingga kadar gula dan insulin cenderung tinggi. Sering berkaitan dengan PMOS (dulu PCOS) dan meningkatkan risiko diabetes.',
  },
  {
    term: 'Hiperandrogenisme',
    slug: 'hiperandrogenisme',
    category: 'Umum',
    aliases: ['kelebihan androgen', 'hormon androgen berlebih'],
    definition:
      'Kelebihan hormon androgen (hormon yang lebih dominan pada laki-laki) pada perempuan, yang dapat menimbulkan jerawat, kulit berminyak, dan tumbuh rambut berlebih.',
  },
  {
    term: 'Anovulasi',
    slug: 'anovulasi',
    category: 'Umum',
    aliases: ['tidak berovulasi', 'gangguan ovulasi'],
    definition:
      'Keadaan ketika ovarium tidak melepaskan sel telur seperti seharusnya, sehingga haid menjadi tidak teratur dan kehamilan sulit terjadi.',
  },
  {
    term: 'Hirsutisme',
    slug: 'hirsutisme',
    category: 'Umum',
    aliases: ['rambut berlebih'],
    definition:
      'Tumbuhnya rambut berlebih pada perempuan di area yang biasanya lebih khas pada laki-laki (misalnya wajah atau dada), sering akibat kelebihan hormon androgen.',
  },

  // ——— Gizi & Pengobatan ———
  {
    term: 'Malnutrisi (Kurang Gizi)',
    slug: 'malnutrisi',
    category: 'Efek samping',
    aliases: ['kurang gizi', 'gizi buruk'],
    definition:
      'Keadaan tubuh kekurangan energi atau zat gizi. Selama pengobatan kanker, malnutrisi dapat melemahkan daya tahan dan memperlambat pemulihan.',
  },
  {
    term: 'Dehidrasi',
    slug: 'dehidrasi',
    category: 'Efek samping',
    aliases: ['kurang cairan', 'kekurangan cairan'],
    definition:
      'Kekurangan cairan tubuh. Tandanya antara lain rasa haus, jarang buang air kecil, urin pekat, lemas, dan pusing. Dapat terjadi akibat muntah atau diare selama pengobatan.',
  },
  {
    term: 'Ahli Gizi (Dietisien)',
    slug: 'ahli-gizi',
    category: 'Umum',
    aliases: ['dietisien', 'nutrisionis', 'ahli diet'],
    definition:
      'Tenaga kesehatan yang membantu menyusun pola makan yang sesuai dengan kondisi dan pengobatan pasien.',
  },

  // ——— Konisasi & Kolitis Radiasi ———
  {
    term: 'Tepi Sayatan (Margin)',
    slug: 'margin-sayatan',
    category: 'Pemeriksaan',
    aliases: ['margin', 'tepi reseksi', 'batas sayatan'],
    definition:
      'Batas tepi jaringan yang diangkat saat operasi. Disebut "bebas" bila tidak ditemukan sel abnormal di tepinya, yang berarti lesi kemungkinan terangkat tuntas.',
  },
  {
    term: 'Serviks Inkompeten',
    slug: 'serviks-inkompeten',
    category: 'Umum',
    aliases: ['serviks lemah', 'inkompetensia serviks'],
    definition:
      'Keadaan leher rahim melemah atau memendek sehingga berisiko membuka terlalu dini saat hamil. Risikonya sedikit meningkat setelah konisasi yang luas atau berulang.',
  },
  {
    term: 'Kolitis / Proktitis Radiasi',
    slug: 'kolitis-radiasi',
    category: 'Efek samping',
    aliases: ['proktitis radiasi', 'enteritis radiasi', 'radiasi usus'],
    definition:
      'Peradangan usus besar (kolitis) atau rektum (proktitis) akibat radioterapi panggul. Dapat bersifat akut (selama/segera setelah terapi) atau kronik (muncul bulan hingga tahun kemudian).',
  },
  {
    term: 'Kolonoskopi / Sigmoidoskopi',
    slug: 'kolonoskopi',
    category: 'Pemeriksaan',
    aliases: ['kolonoskopi', 'sigmoidoskopi', 'teropong usus'],
    definition:
      'Pemeriksaan melihat bagian dalam usus besar atau rektum menggunakan selang berkamera, kadang sekaligus mengambil contoh jaringan (biopsi).',
  },

  // ——— Mola Hidatidosa & GTN ———
  {
    term: 'Mola Hidatidosa (Hamil Anggur)',
    slug: 'mola-hidatidosa',
    category: 'Umum',
    aliases: ['hamil anggur', 'mola', 'molahidatidosa'],
    definition:
      'Kehamilan tidak normal ("hamil anggur") ketika jaringan calon plasenta tumbuh berlebihan membentuk gelembung seperti anggur, tanpa janin yang berkembang normal. Termasuk penyakit trofoblas gestasional.',
  },
  {
    term: 'Penyakit Trofoblas Gestasional (PTG)',
    slug: 'penyakit-trofoblas',
    category: 'Umum',
    aliases: ['ptg', 'penyakit trofoblas', 'gtd'],
    definition:
      'Kelompok kondisi akibat pertumbuhan abnormal sel trofoblas (sel pembentuk plasenta), mulai dari mola hidatidosa yang umumnya jinak hingga bentuk ganas (GTN).',
  },
  {
    term: 'GTN (Neoplasia Trofoblas Gestasional)',
    slug: 'gtn',
    category: 'Umum',
    aliases: ['neoplasia trofoblas gestasional', 'tumor trofoblas', 'gtn'],
    definition:
      'Bentuk ganas atau menetap dari penyakit trofoblas — termasuk mola invasif dan koriokarsinoma. Dapat muncul setelah mola, keguguran, atau persalinan, dan ditandai kadar hCG yang menetap atau naik.',
  },
  {
    term: 'β-hCG (Hormon Kehamilan)',
    slug: 'hcg',
    category: 'Pemeriksaan',
    aliases: ['hcg', 'beta hcg', 'b-hcg', 'hormon kehamilan'],
    definition:
      'Hormon yang diproduksi sel plasenta dan terdeteksi pada tes kehamilan. Pada penyakit trofoblas, kadarnya sangat tinggi dan dipakai untuk membantu diagnosis serta pemantauan.',
  },
  {
    term: 'Koriokarsinoma',
    slug: 'koriokarsinoma',
    category: 'Umum',
    aliases: ['choriocarcinoma'],
    definition:
      'Jenis GTN yang agresif dan dapat menyebar (sering ke paru), tetapi sangat responsif terhadap kemoterapi dengan angka kesembuhan tinggi.',
  },

  // ——— Bartolin & Pemantauan ———
  {
    term: 'Kelenjar Bartolin',
    slug: 'kelenjar-bartolin',
    category: 'Anatomi',
    aliases: ['bartolin', "bartholin's gland"],
    definition:
      'Sepasang kelenjar kecil di kedua sisi lubang vagina yang menghasilkan cairan pelumas. Bila salurannya tersumbat dapat terbentuk kista, dan bila terinfeksi menjadi abses.',
  },
  {
    term: 'Abses',
    slug: 'abses',
    category: 'Umum',
    aliases: ['kantong nanah', 'bisul'],
    definition:
      'Kumpulan nanah akibat infeksi, biasanya terasa nyeri, bengkak, dan kemerahan.',
  },
  {
    term: 'Marsupialisasi',
    slug: 'marsupialisasi',
    category: 'Pengobatan',
    aliases: ['marsupialization'],
    definition:
      'Tindakan membuat lubang saluran permanen pada kista (misalnya kista Bartolin) agar cairannya dapat keluar dan tidak menumpuk lagi, untuk mencegah kekambuhan.',
  },
  {
    term: 'Sitz Bath (Rendam Duduk)',
    slug: 'sitz-bath',
    category: 'Pengobatan',
    aliases: ['rendam duduk', 'sitzbath'],
    definition:
      'Merendam area kemaluan dan bokong dalam air hangat selama beberapa menit untuk meredakan nyeri, menjaga kebersihan, dan membantu kista atau abses keluar.',
  },
  {
    term: 'Kateter Word',
    slug: 'kateter-word',
    category: 'Pengobatan',
    aliases: ['word catheter', 'kateter bartolin'],
    definition:
      'Selang kecil berbalon yang dipasang setelah abses Bartolin dikeluarkan, dibiarkan beberapa minggu agar terbentuk saluran baru yang menetap.',
  },
  {
    term: 'Sistitis Radiasi',
    slug: 'sistitis-radiasi',
    category: 'Efek samping',
    aliases: ['radiasi kandung kemih'],
    definition:
      'Peradangan kandung kemih akibat radioterapi panggul; dapat menimbulkan nyeri atau perdarahan saat berkemih dan keinginan berkemih yang lebih sering.',
  },

  // ——— Menopause & Perdarahan Pascamenopause ———
  {
    term: 'Menopause',
    slug: 'menopause',
    category: 'Umum',
    aliases: ['mati haid', 'berhenti haid'],
    definition:
      'Berhentinya haid secara permanen, ditetapkan setelah tidak haid selama 12 bulan berturut-turut. Setelah menopause, perdarahan apa pun dari vagina tidak normal dan perlu diperiksa.',
  },
  {
    term: 'Perdarahan Pascamenopause',
    slug: 'perdarahan-pascamenopause',
    category: 'Umum',
    aliases: ['perdarahan post menopause', 'perdarahan setelah menopause', 'pmb'],
    definition:
      'Perdarahan atau bercak dari vagina yang terjadi setelah menopause. Selalu perlu diperiksa dokter karena — meski sebagian besar penyebabnya jinak — dapat menjadi tanda dini kanker rahim.',
  },
  {
    term: 'Atrofi (Penipisan Jaringan)',
    slug: 'atrofi',
    category: 'Umum',
    aliases: ['atrofi endometrium', 'vaginitis atrofi', 'penipisan jaringan'],
    definition:
      'Penipisan dan melemahnya jaringan (misalnya lapisan rahim atau dinding vagina) akibat menurunnya hormon estrogen setelah menopause. Merupakan penyebab tersering perdarahan pascamenopause dan umumnya jinak.',
  },
  {
    term: 'Polip',
    slug: 'polip',
    category: 'Umum',
    aliases: ['benjolan bertangkai'],
    definition:
      'Pertumbuhan jaringan kecil bertangkai, misalnya pada lapisan rahim atau serviks. Umumnya jinak, tetapi dapat menyebabkan perdarahan dan kadang perlu diangkat.',
  },

  // ——— Polip Endometrium & Serviks ———
  {
    term: 'Polip Endometrium',
    slug: 'polip-endometrium',
    category: 'Umum',
    aliases: ['polip rahim', 'polip lapisan rahim'],
    definition:
      'Pertumbuhan jaringan kecil yang menonjol dari lapisan dalam rahim (endometrium), sering bertangkai dan berada di dalam rongga rahim. Umumnya jinak, tetapi dapat menyebabkan perdarahan tidak normal dan kadang perlu diangkat lalu diperiksa di laboratorium.',
  },
  {
    term: 'Polip Serviks',
    slug: 'polip-serviks',
    category: 'Umum',
    aliases: ['polip leher rahim', 'polip mulut rahim'],
    definition:
      'Pertumbuhan jaringan kecil pada serviks (leher rahim) yang sering terlihat langsung saat pemeriksaan dengan spekulum. Hampir selalu jinak dan biasanya mudah diangkat dengan tindakan kecil.',
  },
  {
    term: 'Sonohisterografi (USG dengan Cairan)',
    slug: 'sonohisterografi',
    category: 'Pemeriksaan',
    aliases: ['sis', 'saline infusion sonography', 'usg dengan cairan', 'hidrosonografi'],
    definition:
      'Pemeriksaan USG yang dilakukan setelah sedikit cairan steril dimasukkan ke dalam rongga rahim. Cairan membantu menampilkan polip atau penebalan pada lapisan rahim dengan lebih jelas.',
  },
  {
    term: 'Polipektomi',
    slug: 'polipektomi',
    category: 'Pengobatan',
    aliases: ['pengangkatan polip', 'angkat polip'],
    definition:
      'Tindakan mengangkat polip. Polip serviks sering dapat diangkat di poliklinik, sedangkan polip di dalam rahim umumnya diangkat melalui histeroskopi. Jaringannya kemudian diperiksa di laboratorium.',
  },

  // ——— Pola Makan & Gizi ———
  {
    term: 'Planetary Health Diet',
    slug: 'planetary-health-diet',
    category: 'Umum',
    aliases: ['pola makan sehat berkelanjutan', 'diet eat-lancet', 'phd'],
    definition:
      'Pola makan yang dianjurkan Komisi EAT-Lancet: berlimpah sayur, buah, biji-bijian utuh, dan kacang-kacangan, dengan sedikit daging — dirancang menyehatkan tubuh sekaligus ramah lingkungan.',
  },
  {
    term: 'Biji-bijian Utuh (Whole Grain)',
    slug: 'biji-bijian-utuh',
    category: 'Umum',
    aliases: ['whole grain', 'gandum utuh', 'serealia utuh', 'karbohidrat kompleks'],
    definition:
      'Biji-bijian yang masih utuh atau hanya sedikit diproses sehingga kaya serat, misalnya beras merah/tumbuk, jagung, gandum utuh, dan oat. Lebih menyehatkan daripada karbohidrat olahan seperti nasi putih atau tepung putih.',
  },
  {
    term: 'Lemak Tak Jenuh',
    slug: 'lemak-tak-jenuh',
    category: 'Umum',
    aliases: ['lemak sehat', 'minyak nabati', 'unsaturated fat'],
    definition:
      'Jenis lemak yang lebih menyehatkan, terutama dari sumber nabati dan ikan (misalnya minyak zaitun, minyak kanola, alpukat, kacang, dan ikan). Berbeda dari lemak jenuh dan lemak trans yang perlu dibatasi.',
  },
  {
    term: 'Makanan Ultraproses',
    slug: 'makanan-ultraproses',
    category: 'Umum',
    aliases: ['ultra-processed food', 'upf', 'makanan olahan'],
    definition:
      'Produk hasil banyak proses industri yang biasanya tinggi gula, garam, lemak tidak sehat, dan bahan tambahan — misalnya mi instan, minuman bersoda, sosis/nugget, dan camilan kemasan. Sebaiknya dibatasi.',
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
