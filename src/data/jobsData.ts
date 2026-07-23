import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: 'job-lemonilo-01',
    title: 'IT Support Specialist Manufacturing',
    company: 'PT Lemonilo Indonesia Sehat',
    companyType: 'FMCG',
    location: 'Kawasan Industri Modern Cikande, Serang',
    zone: 'Cikande',
    type: 'Full-time',
    experienceLevel: 'Mid Level (1-3 th)',
    salaryRange: 'Rp 6.500.000 - Rp 9.000.000',
    postedDate: '16 Juli 2026',
    description: 'Mengelola dan mengoptimalkan operasional IT end-to-end di lingkungan pabrik Cikande, memelihara perangkat keras, jaringan LAN/WLAN, sistem barcode industri, CCTV, serta memberikan dukungan teknis kepada staf operasional.',
    responsibilities: [
      'Memelihara infrastruktur jaringan pabrik (Mikrotik, Switch, Access Point, VLAN).',
      'Troubleshooting perangkat keras (PC, Printer Industri, Scanner Barcode, Access Control).',
      'Memastikan ketersediaan konektivitas data produksi dan integrasi ke sistem ERP.',
      'Melakukan backup data rutin server lokal dan memelihara keamanan akses pengguna.',
      'Berkoordinasi dengan tim IT Pusat dan General Affair (GA) untuk kebutuhan IT pabrik.'
    ],
    requirements: [
      'Minimal S1 Teknik Informatika, Sistem Informasi, atau Teknik Komputer.',
      'Pengalaman kerja 1-3 tahun sebagai IT Support (diutamakan di lingkungan Manufaktur/Pabrik).',
      'Menguasai Mikrotik/Cisco, LAN/WLAN, Subnetting, dan Windows/Linux Server.',
      'Memiliki kemampuan troubleshooting cepat, logis, dan mampu bekerja shift jika dibutuhkan.',
      'Komunikatif dan siap bertugas di Cikande, Banten.'
    ],
    techStack: ['Mikrotik', 'Windows Server', 'LAN/VLAN', 'Hardware Troubleshooting', 'Linux', 'CCTV Maintenance'],
    isVerified: true,
    applyUrl: 'https://www.jobstreet.co.id/id/job-search/it-support-jobs-in-banten/',
    contactEmail: 'recruitment@lemonilo.com'
  },
  {
    id: 'job-snf-02',
    title: 'IT Infrastructure & Information Security Supervisor',
    company: 'PT Snf Polymers Indonesia',
    companyType: 'Manufaktur',
    location: 'Kawasan Industri Cikande, Serang',
    zone: 'Cikande',
    type: 'Full-time',
    experienceLevel: 'Supervisor / Lead',
    salaryRange: 'Rp 11.000.000 - Rp 16.000.000',
    postedDate: '15 Juli 2026',
    description: 'Memimpin perencanaan, implementasi, dan pengawasan jaringan infrastruktur TI serta kebijakan keamanan informasi perusahaan skala industri kimia di Cikande.',
    responsibilities: [
      'Mengembangkan dan menegakkan kebijakan keamanan informasi (ISO 27001).',
      'Mengelola server fisik/virtual, cloud infrastructure, disaster recovery, dan backup.',
      'Melakukan penilaian kerentanan (vulnerability assessment) dan mitigasi risiko siber.',
      'Memimpin dan mengarahkan staf IT junior dalam operasional harian.',
      'Manajemen vendor pengadaan perangkat keras, lisensi software, dan koneksi ISP.'
    ],
    requirements: [
      'S1/S2 Teknik Informatika, Keamanan Siber, atau Sistem Informasi.',
      'Pengalaman minimal 3-5 tahun di bidang IT Infrastructure/Security (minimal 1 tahun di posisi Supervisor).',
      'Sertifikasi relevan (CCNA, CCNP, CEH, CompTIA Security+) menjadi nilai tambah.',
      'Menguasai Virtualisasi (VMware/Proxmox), Firewall (Fortinet/Palo Alto), dan AWS/Azure Cloud.',
      'Bahasa Inggris aktif untuk komunikasi dengan tim global.'
    ],
    techStack: ['Fortinet', 'VMware', 'AWS', 'Linux Server', 'Penetration Testing', 'CCNA/CCNP', 'Disaster Recovery'],
    isVerified: true,
    applyUrl: 'https://www.jobstreet.co.id/id/job-search/it-infrastructure-jobs-in-banten/',
    contactEmail: 'hrd.indonesia@snf.com'
  },
  {
    id: 'job-krakatau-03',
    title: 'Full-Stack Software Engineer (React & Node.js)',
    company: 'PT Krakatau Information Technology (Krakatau IT)',
    companyType: 'Software House',
    location: 'Krakatau Industrial Estate Cilegon (KIEC), Cilegon',
    zone: 'Cilegon',
    type: 'Full-time',
    experienceLevel: 'Mid Level (1-3 th)',
    salaryRange: 'Rp 8.000.000 - Rp 12.500.000',
    postedDate: '17 Juli 2026',
    description: 'Mengembangkan aplikasi solusi enterprise, dashboard manufaktur, dan platform digital terintegrasi untuk anak perusahaan Krakatau Steel Group.',
    responsibilities: [
      'Mengembangkan frontend web modern menggunakan React, TypeScript, dan SCSS/Tailwind.',
      'Membangun RESTful API & Microservices berkinerja tinggi menggunakan Node.js (Express/NestJS) & PostgreSQL.',
      'Melakukan integrasi gerbang pembayaran, SAP backend, dan sistem IoT industri.',
      'Menulis unit test, melakukan code review, dan optimasi query database SQL.',
      'Mengimplementasikan CI/CD pipeline dan deployment Docker di lingkungan server.'
    ],
    requirements: [
      'S1 Teknik Informatika, Ilmu Komputer, atau berpengalaman setara.',
      'Pengalaman minimal 2 tahun membangun aplikasi full-stack dengan React dan Node.js/Python.',
      'Menguasai TypeScript, PostgreSQL/MySQL, Docker, dan Git version control.',
      'Memahami arsitektur microservices, REST API, dan WebSocket.',
      'Terbiasa dengan metodologi Agile/Scrum.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'REST API', 'Git'],
    isVerified: true,
    applyUrl: 'https://id.linkedin.com/jobs/search/?keywords=Krakatau%20IT&location=Cilegon',
    contactEmail: 'karir@krakatau-it.co.id'
  },
  {
    id: 'job-chandraasri-04',
    title: 'Industrial IT & Automation Control Specialist',
    company: 'PT Chandra Asri Pacific Tbk',
    companyType: 'Petrokimia',
    location: 'Ciwandan / Merak, Cilegon',
    zone: 'Merak',
    type: 'Full-time',
    experienceLevel: 'Senior Level (3-5+ th)',
    salaryRange: 'Rp 14.000.000 - Rp 20.000.000',
    postedDate: '14 Juli 2026',
    description: 'Mengintegrasikan infrastruktur IT operasional kilang petrokimia dengan sistem otomatisasi pabrik (DCS/SCADA) serta mengelola sistem pemantauan data real-time.',
    responsibilities: [
      'Memastikan komunikasi data yang aman antara jaringan IT perkantoran dan OT (Operational Technology) kilang.',
      'Mengelola database histori industri (OSIsoft PI System / Wonderware) dan dashboard analytics.',
      'Memelihara redundansi server SCADA, jaringan serat optik kilang, dan protokol Industri 4.0.',
      'Melaksanakan program pemeliharaan preventif IT kilang secara berkala.',
      'Memastikan kepatuhan standar keselamatan kerja (HSE) petrokimia.'
    ],
    requirements: [
      'S1 Teknik Elektro (Konsentrasi Otomasi/Kendali), Teknik Komputer, atau Teknik Informatika.',
      'Pengalaman 3-5 tahun di industri Petrokimia, Minyak & Gas, atau Manufaktur Berat.',
      'Menguasai protokol komunikasi industri (Modbus, OPC-UA, Ethernet/IP) dan sistem DCS.',
      'Memahami cybersecurity untuk jaringan OT (IEC 62443).',
      'Penempatan di Cilegon, Banten.'
    ],
    techStack: ['SCADA/DCS', 'OPC-UA', 'Industrial Ethernet', 'OSIsoft PI', 'Python', 'OT Cybersecurity'],
    isVerified: true,
    applyUrl: 'https://www.chandra-asri.com/careers',
    contactEmail: 'recruitment@chandra-asri.com'
  },
  {
    id: 'job-hermina-05',
    title: 'Staff IT & Administrator SIMRS',
    company: 'RS Hermina Serang',
    companyType: 'Kesehatan / RS',
    location: 'Kota Serang, Banten',
    zone: 'Serang',
    type: 'Full-time',
    experienceLevel: 'Entry Level / Fresh Graduate',
    salaryRange: 'Rp 4.800.000 - Rp 6.800.000',
    postedDate: '18 Juli 2026',
    description: 'Mengelola operasional Sistem Informasi Manajemen Rumah Sakit (SIMRS), pemetaan bridging BPJS vclaim/antrean online, dan memberikan bantuan teknis bagi dokter & staf medis.',
    responsibilities: [
      'Memastikan kelancaran sistem SIMRS untuk pendaftaran, rekam medis elektronik, dan kasir.',
      'Melakukan bridging API BPJS Kesehatan (VClaim, Antrean Online, P-Care) dan Lisensi Rumah Sakit.',
      'Troubleshooting hardware komputer medis, printer resep, PACS radiologi, dan jaringan LAN RS.',
      'Mengelola database SQL rumah sakit (MySQL/PostgreSQL) dan backup data medis harian.',
      'Memberikan edukasi dan panduan penggunaan modul SIMRS kepada staf rumah sakit baru.'
    ],
    requirements: [
      'Minimal D3/S1 Teknik Informatika, Sistem Informasi, atau Rekam Medis IT.',
      'Fresh graduate atau pengalaman 1 tahun di bidang IT Support Rumah Sakit / Vendor SIMRS.',
      'Menguasai SQL query, Web API (JSON/REST), dan troubleshooting jaringan dasar.',
      'Memahami alur pelayanan rumah sakit dan alur klaim BPJS Kesehatan.',
      'Bersedia bekerja sistem shift dan domisili Serang/Cilegon.'
    ],
    techStack: ['SIMRS', 'Bridging BPJS', 'MySQL', 'PHP/Laravel', 'REST API', 'LAN Troubleshooting'],
    isVerified: true,
    applyUrl: 'https://www.jobstreet.co.id/id/job-search/simrs-jobs-in-banten/',
    contactEmail: 'rekrutmen.serang@herminahospitals.com'
  },
  {
    id: 'job-budi-06',
    title: 'Staff EDP & Network Administrator',
    company: 'PT Budi Texindo Prakarsa',
    companyType: 'Tekstil',
    location: 'Cikande, Serang',
    zone: 'Cikande',
    type: 'Full-time',
    experienceLevel: 'Entry Level / Fresh Graduate',
    salaryRange: 'Rp 5.200.000 - Rp 7.500.000',
    postedDate: '12 Juli 2026',
    description: 'Mengoperasikan pemrosesan data elektronik (EDP), memelihara server lokal pabrik tekstil, mengelola sistem absensi biometrik, dan merawat infrastruktur jaringan.',
    responsibilities: [
      'Input & verifikasi data transaksi produksi ke sistem database internal (EDP).',
      'Mengelola akun pengguna, hak akses folder server, dan lisensi software kantor.',
      'Pemeliharaan kabel UTP, Wi-Fi pabrik, Mikrotik router, dan mesin absensi jari/wajah.',
      'Membantu penyusunan laporan persediaan bahan baku dan modul ERP sederhana.',
      'Menangani masalah teknis harian karyawan (Helpdesk IT).'
    ],
    requirements: [
      'D3/S1 Teknik Informatika, Manajemen Informatika, atau SMK Komputer berpengalaman.',
      'Terbuka untuk Fresh Graduate yang memiliki motivasi tinggi belajar sistem industri.',
      'Memahami pengoperasian database SQL, Microsoft Excel lanjutan, dan Mikrotik.',
      'Jujur, teliti dalam pengolahan data, dan disiplin.',
      'Diutamakan berdomisili di Serang Timur / Cikande.'
    ],
    techStack: ['Mikrotik', 'SQL', 'EDP System', 'Hardware Maintenance', 'Excel Advanced', 'Helpdesk'],
    isVerified: true,
    applyUrl: 'https://www.jobstreet.co.id/id/job-search/edp-jobs-in-banten/',
    contactEmail: 'hrd@buditex.com'
  },
  {
    id: 'job-remote-07',
    title: 'Remote Senior React & TypeScript Developer',
    company: 'NexaTech Global Solutions',
    companyType: 'Software House',
    location: 'Remote (Work From Anywhere - Indonesia)',
    zone: 'Remote / Hybrid',
    type: 'Remote',
    experienceLevel: 'Senior Level (3-5+ th)',
    salaryRange: 'Rp 15.000.000 - Rp 22.000.000',
    postedDate: '18 Juli 2026',
    description: 'Membangun aplikasi web SaaS berbasis React, Next.js, & Tailwind CSS untuk klien internasional secara penuh WFA (Work From Anywhere).',
    responsibilities: [
      'Mengembangkan UI komponen reusabel menggunakan React 18, TypeScript, dan Tailwind CSS.',
      'State management kompleks menggunakan Zustand / Redux Toolkit dan TanStack Query.',
      'Kolaborasi erat dengan Product Manager dan UI/UX Designer melalui Figma.',
      'Optimasi performa Core Web Vitals dan penulisan unit testing (Jest/Testing Library).',
      'Partisipasi dalam daily standup meeting dan komunikasi asynchronous.'
    ],
    requirements: [
      'S1 Teknik Informatika / Self-taught developer dengan portofolio proyek yang kuat.',
      'Pengalaman minimal 3 tahun spesialis Front-End Development (React & TypeScript).',
      'Portofolio aplikasi web modern (React, Next.js, Tailwind, Rest API).',
      'Komunikasi Bahasa Inggris tertulis yang lancar (Slack / Jira).',
      'Memiliki koneksi internet stabil dan perangkat laptop pribadi yang mumpuni.'
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Zustand', 'REST API', 'Figma'],
    isVerified: true,
    applyUrl: 'https://glints.com/id/opportunities/jobs/explore?keyword=React&country=ID',
    contactEmail: 'careers@nexatech.io'
  },
  {
    id: 'job-dalova-08',
    title: 'Laravel Full-Stack Developer (SIMOBE Project)',
    company: 'Dalova IT Solusi',
    companyType: 'Software House',
    location: 'Tangerang / Remote Hybrid Banten',
    zone: 'Remote / Hybrid',
    type: 'Full-time',
    experienceLevel: 'Mid Level (1-3 th)',
    salaryRange: 'Rp 7.500.000 - Rp 11.000.000',
    postedDate: '17 Juli 2026',
    description: 'Mengembangkan dan memelihara sistem informasi kurikulum OBE (Outcome-Based Education) multi-tenant untuk perguruan tinggi di seluruh Indonesia.',
    responsibilities: [
      'Membangun modul matriks kurikulum CPL-MK dan grafik spider chart berbasis Laravel & Chart.js.',
      'Mengembangkan REST API untuk bridging data mahasiswa & mata kuliah dengan SIAKAD kampus.',
      'Optimasi query database PostgreSQL/MySQL untuk pengolahan akumulasi nilai CPL.',
      'Membuat modul ekspor laporan akreditasi instan PDF & Excel.'
    ],
    requirements: [
      'Pengalaman 2+ tahun dengan Laravel framework & Vue/React.',
      'Menguasai database MySQL/PostgreSQL, Eloquent ORM, dan Git.',
      'Memahami konsep arsitektur SaaS multi-tenant.',
      'Suka memecahkan masalah logika matematika/algoritma perhitungan.'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Chart.js', 'REST API'],
    isVerified: true,
    applyUrl: 'https://id.linkedin.com/jobs/search/?keywords=Laravel%20Developer&location=Banten',
    contactEmail: 'dev@dalova.co.id'
  }
];
