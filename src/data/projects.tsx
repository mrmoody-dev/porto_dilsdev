// src/data/projects.tsx
import projectImageMembership from "../assets/images/ss_member.aspikom_landingpage.jpg";
import projectImageMembershipDashboard from "../assets/images/ss_member_aspikom_dashboard.png";
import projectImageSeventhsense from "../assets/images/ss_seventhsense.jpg";
import projectImageIicacs from "../assets/images/ss_iicacs.jpg";
import projectImageSuratonline from "../assets/images/suratonline.png";
import projectImageSuratonlineDashboard from "../assets/images/suratonline_dashboard.png";
import projectImageRadio from "../assets/images/ss_radiobuduluhur.jpg";
import projectImageAspikom from "../assets/images/ss_aspikom_org.jpg";
import projectImageMakadaya from "../assets/images/ss_makadaya.jpg";
import projectImageWildstore from "../assets/images/wildstore_preview.jpg";
import projectImageTradingBot from "../assets/images/tradingbot_preview.jpg";

export const allProjects = [
  {
    id: "wildstore-platform",
    title: "Wildstore E-Commerce & Game Top-Up Platform",
    image: projectImageWildstore,
    description: "Platform E-Commerce Modern & Top-Up Game dengan integrasi Payment Gateway & Dashboard Transaksi Otomatis.",
    details:
      "Sistem e-commerce multi-niche lengkap dengan katalog produk digital/top-up game, integrasi gerbang pembayaran otomatis, saldo pengguna, manajemen transaksi real-time, dan panel admin berbasis web responsif.",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "PostgreSQL", "SCSS"],
    role: "Full-Stack Developer",
    challenges: "Mengintegrasikan callback payment gateway secara real-time dan mengoptimalkan performa UI dengan glassmorphism & animasi halus.",
    liveUrl: "#",
    githubUrl: "https://github.com/mrmoody-dev/wildstore",
    serviceId: "ecommerce-platform",
  },
  {
    id: "indodax-islm-bot",
    title: "Indodax ISLM Automated Trading Bot & Analytics",
    image: projectImageTradingBot,
    description: "Bot Trading Algoritma Crypto terotomatisasi dengan analisis indikator teknis & notifikasi real-time.",
    details:
      "Sistem otomasi trading crypto yang mengeksekusi order beli/jual berdasarkan analisis indikator teknis (RSI, MACD, Moving Average), manajemen risiko saldo otomatis, data streaming WebSocket, serta notifikasi aktivitas harian ke Telegram/Discord.",
    technologies: ["Python", "Node.js", "REST API", "WebSocket", "Telegram Bot API", "Crypto Exchange API"],
    role: "Backend & Automation Engineer",
    challenges: "Memastikan latensi eksekusi order yang sangat rendah dan algoritma manajemen risiko saldo akun yang presisi.",
    liveUrl: "#",
    githubUrl: "https://github.com/mrmoody-dev/indodax-islm-bot",
    serviceId: "automation-bot",
  },
  {
    id: "aplikasi-membership",
    title: "Aplikasi Membership ASPIKOM",
    image: [projectImageMembership, projectImageMembershipDashboard],
    description: "Website Membership organisasi asosiasi pendidikan ilmu komunikasi se-indonesia.",
    details:
      "Sistem keanggotaan lengkap dengan pendaftaran, pembayaran, manajemen profil, dan akses ke konten eksklusif untuk anggota ASPIKOM.",
    technologies: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap", "jQuery"],
    role: "Full-Stack Developer",
    challenges: "Mengelola data anggota dalam jumlah besar dan memastikan keamanan data.",
    liveUrl: "https://member.aspikom.org",
    githubUrl: "https://github.com/your-username/aplikasi-membership",
    serviceId: "membership-system",
  },
  {
    id: "docs-member-aspikom",
    title: "Portal Dokumentasi Member ASPIKOM",
    image: projectImageMembershipDashboard,
    description: "Portal dokumentasi teknis dan modul panduan sistem keanggotaan ASPIKOM.",
    details:
      "Portal dokumentasi komprehensif yang memuat panduan pengguna, dokumentasi API, dan panduan administrasi keanggotaan organisasi.",
    technologies: ["React", "TypeScript", "Markdown", "Tailwind CSS"],
    role: "Full-Stack Developer",
    challenges: "Menyusun struktur dokumentasi interaktif yang mudah dipahami oleh anggota non-teknis.",
    liveUrl: "#",
    githubUrl: "https://github.com/mrmoody-dev/docs-member-aspikom",
    serviceId: "membership-system",
  },
  {
    id: "website-agency",
    title: "Website Agency Seventhsense",
    image: projectImageSeventhsense,
    description: "Website Agency miliki Seventhsense.",
    details:
      "Website untuk profiling agency dan talent-talentnya, menampilkan portofolio dan layanan yang ditawarkan.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    role: "Front-end Developer",
    challenges: "Membuat desain responsif yang menarik dan mengoptimalkan performa website.",
    liveUrl: "https://seventhsense.id",
    githubUrl: "https://github.com/your-username/website-agency",
    serviceId: "website-development",
  },
  {
    id: "aplikasi-pendaftaran",
    title: "Aplikasi Pendaftaran Peserta Conference",
    image: projectImageIicacs,
    description: "Aplikasi untuk pendaftaran peserta conference taraf internasional (IICACS).",
    details:
      "Aplikasi web untuk melakukan pendaftaran peserta conference taraf internasional, termasuk manajemen abstrak dan pembayaran.",
    technologies: ["CodeIgniter 3", "PHP", "MySQL", "REST API"],
    role: "Full-Stack Developer",
    challenges: "Mengintegrasikan berbagai metode pembayaran dan mengelola data pendaftaran yang kompleks.",
    liveUrl: "https://iicacs.com",
    githubUrl: "https://github.com/your-username/aplikasi-pendaftaran",
    serviceId: "conference-website",
  },
  {
    id: "surat-online",
    title: "Surat Online Universitas Budi Luhur",
    image: [projectImageSuratonline, projectImageSuratonlineDashboard],
    description: "Sistem pengajuan surat online untuk mahasiswa Universitas Budi Luhur.",
    details:
      "Memungkinkan mahasiswa untuk mengajukan berbagai jenis surat secara online, melacak status pengajuan, dan menerima notifikasi.",
    technologies: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap"],
    role: "Full-Stack Developer",
    challenges: "Membangun alur persetujuan (approval workflow) yang dinamis dan terintegrasi dengan sistem internal.",
    liveUrl: "#",
    githubUrl: "https://github.com/your-username/suratonline-ubl",
    serviceId: "online-letter-system",
  },
  {
    id: "website-radio",
    title: "Website Radio Budi Luhur",
    image: projectImageRadio,
    description: "Website streaming dan informasi untuk Radio Budi Luhur.",
    details:
      "Menampilkan jadwal siaran, profil penyiar, dan pemutar radio streaming live.",
    technologies: ["Wordpress", "PHP", "MySQL", "Elementor"],
    role: "Wordpress Developer",
    challenges: "Optimalisasi performa streaming audio agar lancar di berbagai perangkat.",
    liveUrl: "https://radiobudiluhur.com",
    githubUrl: "#",
    serviceId: "website-development",
  },
  {
    id: "website-aspikom",
    title: "Website ASPIKOM",
    image: projectImageAspikom,
    description: "Website profil dan pusat informasi untuk ASPIKOM.",
    details:
      "Website resmi Asosiasi Pendidikan Tinggi Ilmu Komunikasi (ASPIKOM) sebagai pusat informasi kegiatan, berita, dan keanggotaan.",
    technologies: ["Wordpress", "PHP", "MySQL"],
    role: "Wordpress Developer",
    challenges: "Migrasi konten dari website lama dan restrukturisasi arsitektur informasi.",
    liveUrl: "https://aspikom.org",
    githubUrl: "#",
    serviceId: "server-migration",
  },
  {
    id: "website-makadaya",
    title: "Website Makadaya",
    image: projectImageMakadaya,
    description: "Website company profile untuk Makadaya.",
    details:
      "Company profile yang menampilkan layanan, portofolio, dan informasi kontak untuk perusahaan.",
    technologies: ["Wordpress", "PHP", "MySQL"],
    role: "Wordpress Developer",
    challenges: "Membuat desain yang sesuai dengan identitas brand perusahaan.",
    liveUrl: "https://makadaya.org",
    githubUrl: "#",
    serviceId: "server-migration",
  },
];

