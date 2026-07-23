import React, { useState, useEffect } from "react";

// Image Imports
import imgAdi from "./assets/images/adi.png";
import imgTradingBot1 from "./assets/images/tradingbot_ss1.png";
import imgTradingBot2 from "./assets/images/tradingbot_ss2.png";
import imgTradingBot3 from "./assets/images/tradingbot_ss3.png";
import imgClipper1 from "./assets/images/clipper_ss1.png";
import imgClipper2 from "./assets/images/clipper_ss2.png";
import imgSimobe from "./assets/images/simobe_preview.jpg";
import imgSimobeDash from "./assets/images/simobe_dashboard_real.png";
import imgSimobeCpl from "./assets/images/simobe_cpl.png";
import imgSimobeRps from "./assets/images/simobe_rps.png";
import imgMembership from "./assets/images/ss_member.aspikom_landingpage.jpg";
import imgMembershipDash from "./assets/images/ss_member_aspikom_dashboard.png";
import imgSeventhsense from "./assets/images/ss_seventhsense.jpg";
import imgIicacs from "./assets/images/ss_iicacs.jpg";
import imgSuratonline from "./assets/images/suratonline.png";
import imgSuratonlineDash from "./assets/images/suratonline_dashboard.png";
import imgRadio from "./assets/images/ss_radiobuduluhur.jpg";
import imgAspikom from "./assets/images/ss_aspikom_org.jpg";
import imgMakadaya from "./assets/images/ss_makadaya.jpg";

interface ProjectItem {
  id: string;
  title: string;
  category: "fullstack" | "ai" | "mobile";
  categoryBadge: string;
  stars: string;
  description: string;
  fullDesc: string;
  highlights: string[];
  tech: string[];
  mainImage: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "simobe-aspikom",
    title: "SIMOBE - Sistem Informasi Kurikulum OBE",
    category: "fullstack",
    categoryBadge: "Fullstack Web System",
    stars: "5.0",
    description: "Sistem Informasi Kurikulum OBE (Outcome-Based Education) perguruan tinggi dengan Matriks CPL-MK & Grafik Evaluasi.",
    fullDesc: "Mengembangkan sistem manajemen kurikulum berbasis Outcome-Based Education (OBE) untuk perguruan tinggi. Memungkinkan pemetaan Capaian Pembelajaran Lulusan (CPL), matriks interaktif CPL vs Mata Kuliah, pemetaan CPMK dosen, grafik radar kompetensi mahasiswa, serta otomatisasi laporan akreditasi BAN-PT/LAM.",
    highlights: [
      "Matriks pemetaan interaktif CPL vs Mata Kuliah berbasis Web spreadsheet-like interface.",
      "Generator otomatis RPS (Rencana Pembelajaran Semester) berstandar pendidikan tinggi.",
      "Visualisasi Radar Chart (Spider Chart) kompetensi mahasiswa berbasis Chart.js.",
      "Manajemen multi-tenant untuk prodi dan fakultas berbeda."
    ],
    tech: ["Laravel", "PHP", "Vite", "Blade", "MySQL", "Tailwind CSS", "Chart.js"],
    mainImage: imgSimobe,
    gallery: [imgSimobe, imgSimobeDash, imgSimobeCpl, imgSimobeRps],
    liveUrl: "#",
    githubUrl: "https://github.com/mrmoody-dev/obe-aspikom"
  },
  {
    id: "indodax-trading-bot",
    title: "Indodax Automated Trading Bot & Analytics",
    category: "ai",
    categoryBadge: "AI & Automation",
    stars: "5.0",
    description: "Bot Trading Algoritma Crypto terotomatisasi dengan analisis indikator teknis (RSI/MACD), WebSocket live data & notifikasi Telegram.",
    fullDesc: "Sistem otomasi trading crypto yang mengeksekusi order beli/jual berdasarkan analisis indikator teknis otomatis, manajemen risiko saldo akun, data streaming WebSocket dari exchange, serta bot notifikasi aktivitas harian ke Telegram/Discord.",
    highlights: [
      "Engine eksekusi order latensi rendah dengan manajemen batas stop-loss & take-profit otomatis.",
      "Integrasi WebSocket real-time untuk pemantauan buku order (orderbook depth) dan ticker harga.",
      "Market screener AI yang secara otomatis memilih koin dengan spread & volatilitas terbaik.",
      "Antarmuka dasbor web interaktif yang dikunci dengan PIN keamanan terenkripsi."
    ],
    tech: ["Python", "Node.js", "REST API", "WebSocket", "Telegram Bot API", "Crypto Exchange API"],
    mainImage: imgTradingBot1,
    gallery: [imgTradingBot1, imgTradingBot2, imgTradingBot3],
    liveUrl: "https://dilsdev.vercel.app/project/indodax-trading-bot",
    githubUrl: "https://github.com/mrmoody-dev/indodax-trading-bot"
  },
  {
    id: "islami-shorts-engine",
    title: "AI Smart Clipper & Video Generator Engine",
    category: "ai",
    categoryBadge: "AI & Automation",
    stars: "5.0",
    description: "Sistem Otomasi Generator Video Shorts & Smart Clipper AI berbasis Gemini 2.0 Flash, Edge-TTS & FFmpeg.",
    fullDesc: "Pipeline otomatisasi produksi konten video pendek (Shorts/Reels/TikTok). Fitur utama meliputi AI Script Generator, Text-To-Speech (Edge TTS) dengan timing presisi, Smart Clipper AI untuk mendeteksi momen viral dari video durasi panjang secara otomatis, komposisi video FFmpeg (efek Ken Burns & karaoke subtitle), serta Dashboard Web Flask.",
    highlights: [
      "Pemrosesan transkripsi audio berdurasi panjang dalam potongan chunked berkecepatan tinggi.",
      "Generator subtitle animasi karaoke otomatis dengan efek Ken Burns pada background video.",
      "Integrasi Gemini 2.0 Flash API untuk deteksi momen menarik & penulisan skrip video.",
      "Dashboard Flask interaktif untuk preview video render dan upload otomatis."
    ],
    tech: ["Python", "Flask", "Gemini AI API", "Edge TTS", "FFmpeg", "yt-dlp", "Pillow"],
    mainImage: imgClipper1,
    gallery: [imgClipper1, imgClipper2],
    liveUrl: "#",
    githubUrl: "https://github.com/mrmoody-dev/islami-shorts"
  },
  {
    id: "presensi-mybcs",
    title: "Presensi MyBCS - Web System & Mobile API",
    category: "fullstack",
    categoryBadge: "Fullstack & Mobile API",
    stars: "4.9",
    description: "Sistem Presensi Karyawan terintegrasi Web Admin Dashboard (PHP/CodeIgniter 4) & REST API Mobile Backend dengan GPS Geofencing.",
    fullDesc: "Sistem manajemen absensi dan presensi karyawan terintegrasi untuk PT BCS Logistics. Menangani verifikasi lokasi GPS geo-tagging, manajemen shift karyawan, rekap kehadiran otomatis, serta penyediaan layanan RESTful API aman untuk aplikasi mobile presensi.",
    highlights: [
      "Arsitektur RESTful API aman dengan token JWT & enkripsi data presensi.",
      "Integrasi modul Geofencing GPS untuk pencegahan kecurangan lokasi absensi.",
      "Dashboard admin interaktif dengan grafik kehadiran real-time & ekspor laporan Excel/PDF.",
      "Optimasi query basis data MySQL untuk menangani log ribuan karyawan harian."
    ],
    tech: ["PHP", "CodeIgniter 4", "MySQL", "REST API", "Bootstrap", "Geofencing"],
    mainImage: imgMembershipDash,
    gallery: [imgMembershipDash, imgMembership],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "aplikasi-membership",
    title: "Member.aspikom.org - Portal Keanggotaan ASPIKOM",
    category: "fullstack",
    categoryBadge: "Fullstack Web",
    stars: "4.9",
    description: "Membangun sistem informasi keanggotaan organisasi komunikasi nasional ASPIKOM berbasis web guna merampingkan pendaftaran & verifikasi anggota.",
    fullDesc: "Sistem keanggotaan lengkap dengan pendaftaran online, verifikasi dokumen anggota, manajemen profil, akses konten eksklusif, dan penerbitan kartu anggota digital untuk ASPIKOM.",
    highlights: [
      "Manajemen ribuan data keanggotaan institusi & dosen ilmu komunikasi se-Indonesia.",
      "Penerbitan otomatis E-KTA (Kartu Tanda Anggota Digital) ber-QR Code verifikasi.",
      "Dashboard admin terpusat untuk verifikasi iuran keanggotaan."
    ],
    tech: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap", "jQuery"],
    mainImage: imgMembership,
    gallery: [imgMembership, imgMembershipDash],
    liveUrl: "https://member.aspikom.org",
    githubUrl: "#"
  },
  {
    id: "aplikasi-pendaftaran",
    title: "IICACS.COM - Conference Registration Portal",
    category: "fullstack",
    categoryBadge: "Fullstack Web",
    stars: "4.8",
    description: "Mengembangkan platform IICACS dengan desain web responsif, navigasi seamless, serta integrasi sistem backend conference yang efisien.",
    fullDesc: "Aplikasi web pendaftaran konferensi internasional, mencakup manajemen submisi abstrak makalah, pendaftaran peserta umum/pemateri, serta verifikasi bukti pembayaran.",
    highlights: [
      "Modul submisi & review abstrak karya ilmiah peserta konferensi.",
      "Sistem pembagian tiket & konfirmasi kehadiran otomatis."
    ],
    tech: ["CodeIgniter 3", "PHP", "MySQL", "REST API"],
    mainImage: imgIicacs,
    gallery: [imgIicacs, imgMembershipDash],
    liveUrl: "https://iicacs.com",
    githubUrl: "#"
  },
  {
    id: "website-agency",
    title: "Seventhsense.id - Agency Website",
    category: "fullstack",
    categoryBadge: "Fullstack Web",
    stars: "4.7",
    description: "Pengembangan situs web interaktif dan penataan antarmuka pengguna (UI/UX) untuk Seventhsense.id.",
    fullDesc: "Website company profile profesional untuk showcasing portofolio agency, talent roster, serta layanan pemasaran digital.",
    highlights: [
      "Desain responsif cepat dengan animasi interaktif modern.",
      "Form formulir kontak & booking talent terintegrasi."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    mainImage: imgSeventhsense,
    gallery: [imgSeventhsense, imgMembership],
    liveUrl: "https://seventhsense.id",
    githubUrl: "#"
  },
  {
    id: "surat-online",
    title: "Surat Online Universitas Budi Luhur",
    category: "fullstack",
    categoryBadge: "Fullstack Web",
    stars: "4.9",
    description: "Sistem pelayanan pengajuan surat online untuk mahasiswa Universitas Budi Luhur.",
    fullDesc: "Memungkinkan mahasiswa mengajukan berbagai jenis surat keterangan secara online, melacak status persetujuan berjenjang (approval workflow), serta mengunduh surat resmi bertanda tangan digital.",
    highlights: [
      "Alur approval workflow berjenjang dinamis antar bagian administrasi kampus.",
      "Penerbitan surat PDF otomatis dengan verifikasi QR Code keamanan."
    ],
    tech: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap"],
    mainImage: imgSuratonline,
    gallery: [imgSuratonline, imgSuratonlineDash],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "website-radio",
    title: "Radiobudiluhur.com - Web Streaming",
    category: "fullstack",
    categoryBadge: "Fullstack Web",
    stars: "4.7",
    description: "Pengembangan sistem web portal dan integrasi media digital audio streaming live untuk Radio Budi Luhur.",
    fullDesc: "Menampilkan pemutar audio streaming radio live, jadwal program siaran harian, profil penyiar, serta portal berita seputar aktivitas kampus.",
    highlights: [
      "Integrasi audio player streaming live berlatensi rendah.",
      "Desain portal berita hiburan & jadwal siaran terintegrasi."
    ],
    tech: ["Wordpress", "PHP", "MySQL", "Elementor"],
    mainImage: imgRadio,
    gallery: [imgRadio, imgAspikom],
    liveUrl: "https://radiobudiluhur.com",
    githubUrl: "#"
  },
  {
    id: "website-aspikom",
    title: "Website ASPIKOM Org Pusat",
    category: "fullstack",
    categoryBadge: "Fullstack Web",
    stars: "4.8",
    description: "Website resmi Asosiasi Pendidikan Tinggi Ilmu Komunikasi (ASPIKOM) sebagai pusat publikasi kegiatan & direktori prodi.",
    fullDesc: "Website resmi Asosiasi Pendidikan Tinggi Ilmu Komunikasi (ASPIKOM) sebagai pusat publikasi kegiatan, warta organisasi, dan direktori prodi ilmu komunikasi nasional.",
    highlights: [
      "Migrasi konten dan penataan ulang arsitektur informasi asosiasi.",
      "Portal publikasi berita & galeri kegiatan nasional."
    ],
    tech: ["Wordpress", "PHP", "MySQL"],
    mainImage: imgAspikom,
    gallery: [imgAspikom, imgMembership],
    liveUrl: "https://aspikom.org",
    githubUrl: "#"
  },
  {
    id: "website-makadaya",
    title: "Makadaya.org - Company Profile",
    category: "fullstack",
    categoryBadge: "Fullstack Web",
    stars: "4.7",
    description: "Pengembangan sistem web portal dan company profile resmi untuk Makadaya.org.",
    fullDesc: "Company profile resmi yang menampilkan katalog layanan, portofolio proyek terstruktur, serta informasi kontak perusahaan Makadaya.",
    highlights: [
      "Tampilan company profile korporat bersih & responsif.",
      "Optimasi kecepatan muat halaman dan SEO dasar."
    ],
    tech: ["Wordpress", "PHP", "MySQL"],
    mainImage: imgMakadaya,
    gallery: [imgMakadaya, imgSeventhsense],
    liveUrl: "https://makadaya.org",
    githubUrl: "#"
  }
];

export default function App() {
  // Theme & Accent States
  const [theme, setTheme] = useState<string>(() => localStorage.getItem("portfolio-theme") || "dark");
  const [accent, setAccent] = useState<string>(() => localStorage.getItem("portfolio-accent") || "cyan");

  // Navigation & Scroll State
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("hero");

  // Hero Typing Effect State
  const [typingRole, setTypingRole] = useState<string>("");
  const roles = [
    "IT Infrastructure & Network Specialist",
    "IT Plant Automation Engineer (Level 2)",
    "Full-Stack Web & Backend Developer",
    "Python AI & Trading Bot Specialist"
  ];

  // About Tabs State
  const [activeAboutTab, setActiveAboutTab] = useState<string>("tab-values");

  // Timeline Filter State
  const [timelineFilter, setTimelineFilter] = useState<string>("all");

  // Skill Search State
  const [skillSearchQuery, setSkillSearchQuery] = useState<string>("");

  // Projects Filter & Modal State
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "info" | "success" | "error" } | null>(null);

  // Contact Form State
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactSubject, setContactSubject] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [contactSubmitting, setContactSubmitting] = useState<boolean>(false);
  const [contactErrors, setContactErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Sync Theme Attributes to Document Root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
    localStorage.setItem("portfolio-accent", accent);
  }, [accent]);

  // Navbar Scroll & Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "resume", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 150;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing Effect
  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentRole = roles[roleIdx];

      if (isDeleting) {
        setTypingRole(currentRole.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setTypingRole(currentRole.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === currentRole.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 400;
      }

      timer = setTimeout(type, speed);
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  // Show Toast Helper
  const triggerToast = (text: string, type: "info" | "success" | "error" = "info") => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  // Copy to Clipboard Helper
  const copyToClipboard = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        triggerToast(`Tersalin ke clipboard: ${label}`, "success");
      });
    }
  };

  // Contact Form Submit Handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!contactName.trim()) errors.name = "Nama wajib diisi";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail.trim())) errors.email = "Format email tidak valid";
    if (contactMessage.trim().length < 10) errors.message = "Pesan minimal 10 karakter";

    setContactErrors(errors);

    if (Object.keys(errors).length === 0) {
      setContactSubmitting(true);
      setTimeout(() => {
        triggerToast("Pesan Anda berhasil dikirim! Terima kasih.", "success");
        setContactName("");
        setContactEmail("");
        setContactSubject("");
        setContactMessage("");
        setContactSubmitting(false);
      }, 1200);
    }
  };

  // Skill Data matching exact CV
  const skillsData = [
    {
      category: "network",
      categoryTitle: "Network & IT Infrastructure",
      categoryIcon: "fa-network-wired",
      skills: [
        { name: "LAN/WAN Topology & Mikrotik/Cisco", icon: "fa-solid fa-network-wired color-aws", percent: "95%", tags: "mikrotik cisco lan wan vlan router switch" },
        { name: "Network Security, Firewall & VPN", icon: "fa-solid fa-shield-halved color-db", percent: "90%", tags: "firewall vpn security enterprise antivirus" },
        { name: "Server Administration (Linux & Windows)", icon: "fa-solid fa-server color-node", percent: "92%", tags: "linux ubuntu debian windows server virtualization backup" },
        { name: "UTP/Fiber Optic & CCTV Systems", icon: "fa-solid fa-video color-api", percent: "88%", tags: "fiber optic utp cctv hardware maintenance" }
      ]
    },
    {
      category: "automation",
      categoryTitle: "IT Automation & Control Systems",
      categoryIcon: "fa-microchip",
      skills: [
        { name: "Level 2 Plant Automation Maintenance", icon: "fa-solid fa-industry color-ai", percent: "95%", tags: "posco dx level 2 plant automation scada" },
        { name: "Troubleshooting Hardware/Software Industri", icon: "fa-solid fa-wrench color-python", percent: "92%", tags: "troubleshooting industrial hardware software field operations" },
        { name: "Pelabuhan NPKTOS & Autogate Systems", icon: "fa-solid fa-dharmachakra color-react", percent: "90%", tags: "pelindo npktos autogate logistics ticketing" },
        { name: "Data Backup & Disaster Recovery", icon: "fa-solid fa-database color-db", percent: "90%", tags: "backup disaster recovery data integrity" }
      ]
    },
    {
      category: "webdev",
      categoryTitle: "Web Development & Database",
      categoryIcon: "fa-code",
      skills: [
        { name: "PHP (Laravel / CodeIgniter 4)", icon: "fa-brands fa-php color-node", percent: "95%", tags: "php laravel codeigniter backend web" },
        { name: "JavaScript / TypeScript & React", icon: "fa-brands fa-react color-react", percent: "90%", tags: "javascript typescript react frontend" },
        { name: "Python (AI Automation & Data)", icon: "fa-brands fa-python color-python", percent: "88%", tags: "python automation pandas scraping fastapi" },
        { name: "MySQL, PostgreSQL & RESTful API", icon: "fa-solid fa-database color-db", percent: "92%", tags: "mysql postgresql rest api database" }
      ]
    },
    {
      category: "tools",
      categoryTitle: "Data, QA & Professional Tools",
      categoryIcon: "fa-layer-group",
      skills: [
        { name: "Quality Assurance & Manual Testing", icon: "fa-solid fa-vial-circle-check color-test", percent: "88%", tags: "qa quality assurance testing skilling myskill" },
        { name: "Web Scraping & Data Analysis (Pandas)", icon: "fa-solid fa-chart-line color-css", percent: "86%", tags: "web scraping pandas data analysis python" },
        { name: "Git, Linux CLI & Shell Scripting", icon: "fa-brands fa-github color-git", percent: "90%", tags: "git github linux shell bash" },
        { name: "Canva & Graphic Documentation", icon: "fa-solid fa-palette color-figma", percent: "88%", tags: "canva graphic design documentation" }
      ]
    }
  ];

  return (
    <>
      {/* Ambient Background Orbs */}
      <div className="ambient-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Header Navigation */}
      <header className={`navbar-header ${scrolled ? "scrolled" : ""}`} id="header">
        <div className="container navbar-container">
          <a href="#hero" className="brand-logo">
            <span className="logo-icon">
              <i className="fa-solid fa-code"></i>
            </span>
            <span className="logo-text">
              dils<span>dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className={`nav-menu ${mobileNavOpen ? "active" : ""}`} id="nav-menu">
            <ul className="nav-list">
              <li>
                <a
                  href="#hero"
                  className={`nav-link ${activeNav === "hero" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <i className="fa-solid fa-house"></i> Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activeNav === "about" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <i className="fa-solid fa-user"></i> Tentang
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className={`nav-link ${activeNav === "resume" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <i className="fa-solid fa-briefcase"></i> Resume
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`nav-link ${activeNav === "skills" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <i className="fa-solid fa-layer-group"></i> Keahlian
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`nav-link ${activeNav === "projects" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <i className="fa-solid fa-folder-open"></i> Proyek
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link ${activeNav === "contact" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <i className="fa-solid fa-envelope"></i> Kontak
                </a>
              </li>
            </ul>
          </nav>

          {/* Action Controls */}
          <div className="nav-actions">
            {/* Color Accent Picker */}
            <div className="color-picker" title="Ubah Warna Aksen">
              <button
                className={`accent-btn ${accent === "cyan" ? "active" : ""}`}
                style={{ "--btn-color": "#06b6d4" } as React.CSSProperties}
                onClick={() => {
                  setAccent("cyan");
                  triggerToast("Warna aksen diubah ke CYAN", "info");
                }}
                aria-label="Aksen Cyan"
              ></button>
              <button
                className={`accent-btn ${accent === "emerald" ? "active" : ""}`}
                style={{ "--btn-color": "#10b981" } as React.CSSProperties}
                onClick={() => {
                  setAccent("emerald");
                  triggerToast("Warna aksen diubah ke EMERALD", "info");
                }}
                aria-label="Aksen Emerald"
              ></button>
              <button
                className={`accent-btn ${accent === "purple" ? "active" : ""}`}
                style={{ "--btn-color": "#8b5cf6" } as React.CSSProperties}
                onClick={() => {
                  setAccent("purple");
                  triggerToast("Warna aksen diubah ke PURPLE", "info");
                }}
                aria-label="Aksen Purple"
              ></button>
              <button
                className={`accent-btn ${accent === "rose" ? "active" : ""}`}
                style={{ "--btn-color": "#f43f5e" } as React.CSSProperties}
                onClick={() => {
                  setAccent("rose");
                  triggerToast("Warna aksen diubah ke ROSE", "info");
                }}
                aria-label="Aksen Rose"
              ></button>
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              className="theme-toggle"
              title="Ganti Mode Gelap/Terang"
              onClick={() => {
                const newTheme = theme === "dark" ? "light" : "dark";
                setTheme(newTheme);
                triggerToast(`Mode tampilan diubah ke ${newTheme === "dark" ? "Gelap" : "Terang"}`, "info");
              }}
              aria-label="Ganti Tema"
            >
              <i className="fa-solid fa-moon moon-icon"></i>
              <i className="fa-solid fa-sun sun-icon"></i>
            </button>

            {/* Mobile Hamburger */}
            <button
              className={`hamburger ${mobileNavOpen ? "active" : ""}`}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Buka Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section" id="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="status-badge">
                <span className="pulse-dot"></span>
                <span>Tersedia untuk Proyek Remote &amp; On-Site Cilegon/Serang</span>
              </div>

              <h1 className="hero-title">
                Halo, Saya <span className="text-gradient">Adi Fuadil Hidayah</span>
              </h1>

              <h2 className="hero-subtitle">
                Spesialis <span className="typing-text">{typingRole}</span>
                <span className="cursor">&nbsp;</span>
              </h2>

              <p className="hero-description">
                Lulusan Sarjana Komputer (S.Kom) <strong>Cum Laude (IPK 3.59)</strong> dengan pengalaman kerja <strong>6+ tahun</strong> di bidang IT Automation (PT POSCO DX Indonesia), Infrastruktur Jaringan &amp; Programming (PT BCS Logistics), serta Pemantauan Sistem Pelabuhan (PT Pelindo 2).
              </p>

              {/* Action Buttons */}
              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">
                  <i className="fa-solid fa-rocket"></i> Lihat Portofolio
                </a>
                <a href="#contact" className="btn btn-outline">
                  <i className="fa-solid fa-comments"></i> Hubungi Saya
                </a>
                <a href="/CV_Adi_Fuadil_Hidayah.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                  <i className="fa-solid fa-file-arrow-down"></i> Download Resume (PDF)
                </a>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <span className="social-label">Ikuti &amp; Kontak:</span>
                <a href="https://www.linkedin.com/in/adi-fuadil-563387257/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/mrmoody-dev" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://wa.me/6289650522522" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="mailto:adifuadil@gmail.com" className="social-icon" title="Email Direct">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="hero-visual">
              <div className="avatar-card glass-card">
                <div className="avatar-wrapper">
                  <img src={imgAdi} alt="Adi Fuadil Hidayah" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                  <div className="avatar-glow"></div>
                </div>

                <div className="floating-badge badge-1 glass-card">
                  <div className="badge-icon">
                    <i className="fa-solid fa-code-commit"></i>
                  </div>
                  <div className="badge-info">
                    <span className="badge-number">6+ Tahun</span>
                    <span className="badge-text">Pengalaman IT</span>
                  </div>
                </div>

                <div className="floating-badge badge-2 glass-card">
                  <div className="badge-icon">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="badge-info">
                    <span className="badge-number">3.59 IPK</span>
                    <span className="badge-text">S.Kom Cum Laude</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">Tentang Saya</span>
              <h2 className="section-title">
                Dedikasi Pada <span className="text-gradient">Kualitas &amp; Keandalan</span>
              </h2>
              <p className="section-subtitle">Pengenal singkat mengenai rekam jejak profesionalisme, keahlian industri, dan kualifikasi teknis.</p>
            </div>

            <div className="about-grid">
              {/* Bio Card */}
              <div className="glass-card about-bio-card">
                <h3 className="card-title">
                  <i className="fa-solid fa-laptop-code"></i> Perjalanan &amp; Spesialisasi
                </h3>
                <p>
                  Saya adalah seorang <strong>IT Infrastructure, Network &amp; Automation Specialist / Web Developer</strong> berpendidikan Sarjana Komputer (S.Kom) dari Universitas Banten Jaya dengan predikat <strong>Dengan Pujian (IPK 3.59 Cum Laude)</strong>.
                </p>
                <p>
                  Memiliki rekam jejak <strong>6+ tahun</strong> mengelola pemeliharaan sistem otomatisasi Level 2 pabrik baja di <strong>PT POSCO DX Indonesia</strong> (5 tahun), infrastruktur IT &amp; jaringan Mikrotik di <strong>PT BCS Logistics</strong>, serta pemantauan operasional sistem pelabuhan NPKTOS di <strong>PT Pelindo 2 Ciwandan</strong>.
                </p>

                {/* Metric Counters */}
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-number">6</span>
                    <span className="stat-plus">+</span>
                    <span className="stat-label">Tahun Pengalaman</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5</span>
                    <span className="stat-plus"> Thn</span>
                    <span className="stat-label">POSCO DX Level 2</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100</span>
                    <span className="stat-plus">%</span>
                    <span className="stat-label">IT Infra BCS Logistics</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3.59</span>
                    <span className="stat-plus"> Cum Laude</span>
                    <span className="stat-label">IPK S.Kom</span>
                  </div>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="glass-card about-tabs-card">
                <div className="about-tab-buttons">
                  <button
                    className={`tab-btn ${activeAboutTab === "tab-values" ? "active" : ""}`}
                    onClick={() => setActiveAboutTab("tab-values")}
                  >
                    <i className="fa-solid fa-compass"></i> Kompetensi Utama
                  </button>
                  <button
                    className={`tab-btn ${activeAboutTab === "tab-stack" ? "active" : ""}`}
                    onClick={() => setActiveAboutTab("tab-stack")}
                  >
                    <i className="fa-solid fa-cubes"></i> Ekosistem Tekno
                  </button>
                  <button
                    className={`tab-btn ${activeAboutTab === "tab-interests" ? "active" : ""}`}
                    onClick={() => setActiveAboutTab("tab-interests")}
                  >
                    <i className="fa-solid fa-heart"></i> Pengalaman Industri
                  </button>
                </div>

                {activeAboutTab === "tab-values" && (
                  <div className="tab-content active" id="tab-values">
                    <ul className="value-list">
                      <li>
                        <div className="value-icon">
                          <i className="fa-solid fa-network-wired"></i>
                        </div>
                        <div>
                          <h4>IT Infrastructure &amp; Network Security</h4>
                          <p>Merancang topologi LAN/WAN/VLAN Mikrotik/Cisco, keamanan Firewall enterprise, serta disaster recovery.</p>
                        </div>
                      </li>
                      <li>
                        <div className="value-icon">
                          <i className="fa-solid fa-industry"></i>
                        </div>
                        <div>
                          <h4>Level 2 Industrial Automation (POSCO DX)</h4>
                          <p>Pemeliharaan rutin dan troubleshooting gangguan teknis Layer 2 untuk menjaga stabilitas pabrik tanpa downtime.</p>
                        </div>
                      </li>
                      <li>
                        <div className="value-icon">
                          <i className="fa-solid fa-code"></i>
                        </div>
                        <div>
                          <h4>Web Development (PHP Laravel / CodeIgniter)</h4>
                          <p>Mengembangkan aplikasi web manajemen data logistik, sistem kurikulum OBE, serta RESTful API mobile.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}

                {activeAboutTab === "tab-stack" && (
                  <div className="tab-content active" id="tab-stack">
                    <div className="tech-pills-cloud">
                      <span className="tech-pill">
                        <i className="fa-solid fa-network-wired"></i> Mikrotik / Cisco LAN/WAN
                      </span>
                      <span className="tech-pill">
                        <i className="fa-solid fa-shield-halved"></i> Firewall &amp; Enterprise Security
                      </span>
                      <span className="tech-pill">
                        <i className="fa-solid fa-industry"></i> Level 2 Automation Systems
                      </span>
                      <span className="tech-pill">
                        <i className="fa-brands fa-php"></i> PHP (Laravel / CodeIgniter 4)
                      </span>
                      <span className="tech-pill">
                        <i className="fa-brands fa-react"></i> React &amp; JavaScript/TypeScript
                      </span>
                      <span className="tech-pill">
                        <i className="fa-brands fa-python"></i> Python (Data Science &amp; AI)
                      </span>
                      <span className="tech-pill">
                        <i className="fa-solid fa-database"></i> MySQL &amp; PostgreSQL
                      </span>
                      <span className="tech-pill">
                        <i className="fa-solid fa-server"></i> Linux (Ubuntu/Debian) &amp; Windows Server
                      </span>
                      <span className="tech-pill">
                        <i className="fa-solid fa-vial-circle-check"></i> Quality Assurance (QA)
                      </span>
                    </div>
                  </div>
                )}

                {activeAboutTab === "tab-interests" && (
                  <div className="tab-content active" id="tab-interests">
                    <p className="tab-desc">Pengalaman operasional &amp; pemeliharaan di berbagai sektor industri:</p>
                    <ul className="interest-list">
                      <li>
                        <i className="fa-solid fa-circle-check"></i> <strong>PT POSCO DX Indonesia</strong> (5 Thn) - Level 2 Plant Automation Maintenance
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check"></i> <strong>PT BCS Logistics</strong> - IT Infrastructure, Network &amp; Programming
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check"></i> <strong>PT Pelindo 2 Ciwandan Port</strong> - NPKTOS &amp; Autogate Systems Support
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check"></i> <strong>Pengembangan Sistem Kurikulum OBE</strong> (SIMOBE) &amp; Member ASPIKOM
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* RESUME & EXPERIENCE SECTION */}
        <section className="section resume-section" id="resume">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">Jejak Karir</span>
              <h2 className="section-title">
                Resume &amp; <span className="text-gradient">Pengalaman Kerja</span>
              </h2>
              <p className="section-subtitle">Rekam jejak profesionalisme kerja di industri manufaktur/logistik, pendidikan formal, dan sertifikasi keahlian.</p>
            </div>

            {/* Filter Tab Buttons */}
            <div className="filter-buttons-wrapper">
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${timelineFilter === "all" ? "active" : ""}`}
                  onClick={() => setTimelineFilter("all")}
                >
                  <i className="fa-solid fa-list-check"></i> Semua
                </button>
                <button
                  className={`filter-btn ${timelineFilter === "experience" ? "active" : ""}`}
                  onClick={() => setTimelineFilter("experience")}
                >
                  <i className="fa-solid fa-briefcase"></i> Pengalaman Kerja
                </button>
                <button
                  className={`filter-btn ${timelineFilter === "education" ? "active" : ""}`}
                  onClick={() => setTimelineFilter("education")}
                >
                  <i className="fa-solid fa-graduation-cap"></i> Pendidikan
                </button>
                <button
                  className={`filter-btn ${timelineFilter === "certificate" ? "active" : ""}`}
                  onClick={() => setTimelineFilter("certificate")}
                >
                  <i className="fa-solid fa-award"></i> Sertifikasi
                </button>
              </div>
            </div>

            {/* Timeline Container */}
            <div className="timeline-container">
              {/* Item 1: Job - PT BCS Logistics */}
              {(timelineFilter === "all" || timelineFilter === "experience") && (
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <i className="fa-solid fa-laptop-code"></i>
                  </div>
                  <div className="glass-card timeline-card">
                    <div className="timeline-header">
                      <div>
                        <span className="timeline-date">
                          <i className="fa-regular fa-calendar"></i> April 2025 – April 2026
                        </span>
                        <h3 className="timeline-title">IT Infrastructure, Network &amp; Programming Specialist</h3>
                        <span className="timeline-company">PT. BCS Logistics | Cilegon, Banten</span>
                      </div>
                      <span className="badge badge-accent">Penuh Waktu</span>
                    </div>
                    <p className="timeline-body">
                      Mengelola dan memelihara 100% infrastruktur IT perusahaan meliputi fisik server, workstation hardware, dan lisensi software untuk mendukung kelancaran operasional logistik.
                    </p>
                    <ul className="timeline-highlights">
                      <li>Mengelola &amp; memelihara 100% fisik server, workstation hardware, dan lisensi software operasional logistik.</li>
                      <li>Merancang, mengonfigurasi, dan mengadministrasikan topologi jaringan (LAN/WAN/VLAN) serta perangkat Mikrotik.</li>
                      <li>Menerapkan kebijakan keamanan jaringan (Firewall &amp; Antivirus enterprise) guna melindungi data perusahaan.</li>
                      <li>Mengembangkan dan memelihara aplikasi web internal berbasis <strong>PHP (CodeIgniter)</strong> untuk otomatisasi proses bisnis.</li>
                      <li>Menjalankan prosedur backup data rutin dan menguji keandalan sistem <em>disaster recovery</em>.</li>
                    </ul>
                    <div className="timeline-tags">
                      <span>PHP</span>
                      <span>CodeIgniter</span>
                      <span>Mikrotik</span>
                      <span>LAN/WAN/VLAN</span>
                      <span>Firewall</span>
                      <span>Disaster Recovery</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Item 2: Job - PT POSCO DX Indonesia */}
              {(timelineFilter === "all" || timelineFilter === "experience") && (
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <i className="fa-solid fa-industry"></i>
                  </div>
                  <div className="glass-card timeline-card">
                    <div className="timeline-header">
                      <div>
                        <span className="timeline-date">
                          <i className="fa-regular fa-calendar"></i> Agustus 2019 – Juli 2024 (5 Tahun)
                        </span>
                        <h3 className="timeline-title">IT Automation Specialist (Level 2 System Maintenance)</h3>
                        <span className="timeline-company">PT. POSCO DX INDONESIA | Cilegon, Banten</span>
                      </div>
                      <span className="badge badge-accent">Penuh Waktu</span>
                    </div>
                    <p className="timeline-body">
                      Bertanggung jawab penuh atas pemeliharaan rutin, inspeksi teknis, dan pencegahan downtime pada sistem otomatisasi Level 2 di lingkungan pabrik baja POSCO DX.
                    </p>
                    <ul className="timeline-highlights">
                      <li>Inspeksi pemeliharaan rutin (daily, weekly, monthly) pada sistem otomatisasi Level 2 lini produksi pabrik baja.</li>
                      <li>Menganalisis, mendiagnosis, dan menyelesaikan (troubleshooting) gangguan teknis pada sistem Layer 2.</li>
                      <li>Mengelola performa sistem Layer 2 secara berkelanjutan guna memastikan operasi produksi berjalan dengan <em>zero downtime</em>.</li>
                      <li>Memberikan dukungan teknis (field operations support) serta mentoring kepada tim lapangan mengenai perawatan sistem otomatisasi.</li>
                    </ul>
                    <div className="timeline-tags">
                      <span>Level 2 Automation</span>
                      <span>SCADA</span>
                      <span>Plant Maintenance</span>
                      <span>Troubleshooting</span>
                      <span>Field Support</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Item 3: Job - PT Tangga Karir Kita (Pelindo 2) */}
              {(timelineFilter === "all" || timelineFilter === "experience") && (
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <i className="fa-solid fa-dharmachakra"></i>
                  </div>
                  <div className="glass-card timeline-card">
                    <div className="timeline-header">
                      <div>
                        <span className="timeline-date">
                          <i className="fa-regular fa-calendar"></i> Desember 2017 – Juli 2019
                        </span>
                        <h3 className="timeline-title">IT Support Engineer On-Site (Pelabuhan Pelindo 2)</h3>
                        <span className="timeline-company">PT. Tangga Karir Kita | Ciwandan, Cilegon</span>
                      </div>
                      <span className="badge badge-secondary">On-Site</span>
                    </div>
                    <p className="timeline-body">
                      Memantau dan memastikan kelancaran operasional sistem NPKTOS dan Autogate untuk lalu lintas kendaraan logistik di kawasan Pelabuhan PT Pelindo 2 Ciwandan.
                    </p>
                    <ul className="timeline-highlights">
                      <li>Memantau operasional sistem <strong>NPKTOS</strong> (Non-Container Terminal Operating System) Pelabuhan Pelindo 2 Ciwandan.</li>
                      <li>Memverifikasi dan memvalidasi kesesuaian data laporan transaksi sistem dengan realisasi fisik operasional di lapangan.</li>
                      <li>Memelihara keandalan sistem <strong>Autogate</strong> untuk lalu lintas kendaraan pengangkut logistik barang di pintu gerbang pelabuhan.</li>
                      <li>Mengelola sistem penanganan tiket kendala (Helpdesk Ticketing) dan berkoordinasi dengan tim IT Level 2.</li>
                    </ul>
                    <div className="timeline-tags">
                      <span>NPKTOS Pelindo 2</span>
                      <span>Autogate Systems</span>
                      <span>Helpdesk Ticketing</span>
                      <span>Hardware &amp; Network Support</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Item 4: Education - Universitas Banten Jaya */}
              {(timelineFilter === "all" || timelineFilter === "education") && (
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="glass-card timeline-card">
                    <div className="timeline-header">
                      <div>
                        <span className="timeline-date">
                          <i className="fa-regular fa-calendar"></i> 2013 – 2017
                        </span>
                        <h3 className="timeline-title">Sarjana Komputer (S.Kom) - Teknik Informatika</h3>
                        <span className="timeline-company">Universitas Banten Jaya | Serang, Banten</span>
                      </div>
                      <span className="badge badge-accent">IPK: 3.59 / 4.00 (Cum Laude)</span>
                    </div>
                    <p className="timeline-body">
                      Lulusan berpredikat <strong>Dengan Pujian (Cum Laude)</strong>. Judul Skripsi: <em>Perancangan Sistem Absensi Mahasiswa Terintegrasi dengan Sistem Akademik Menggunakan Teknologi RFID pada STIE Bina Bangsa Banten</em>.
                    </p>
                  </div>
                </div>
              )}

              {/* Item 5: Certificates */}
              {(timelineFilter === "all" || timelineFilter === "certificate") && (
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div className="glass-card timeline-card">
                    <div className="timeline-header">
                      <div>
                        <span className="timeline-date">
                          <i className="fa-regular fa-calendar"></i> Sertifikasi Resmi
                        </span>
                        <h3 className="timeline-title">Pelatihan Keahlian &amp; Dokumen Resmi</h3>
                        <span className="timeline-company">Sertifikat Terverifikasi (MySkill, DQLab, Skilvul, CodingStudio)</span>
                      </div>
                      <span className="badge badge-gold">
                        <i className="fa-solid fa-certificate"></i> Terverifikasi
                      </span>
                    </div>
                    <ul className="timeline-highlights">
                      <li><strong>Quality Assurance Fundamental</strong> – MySkill.com (Oktober 2024)</li>
                      <li><strong>Python for Data Science &amp; Professional Beginner</strong> – DQLab / UMN (Oktober 2024)</li>
                      <li><strong>Python Dasar &amp; Lanjutan</strong> – Skilvul.com (Februari &amp; Juli 2024)</li>
                      <li><strong>Fundamental Cyber Security &amp; Linux Command</strong> – CodingStudio (Juni 2024)</li>
                      <li><strong>Belajar HTTP untuk Pemula</strong> – Programmer Zaman Now (Desember 2023)</li>
                      <li><strong>Introduction to Information Security</strong> – Cyber Academy Indonesia (September 2022)</li>
                      <li><strong>Network Engineer Class Batch II</strong> – Surosowan Cyber Community</li>
                    </ul>
                    <div style={{ marginTop: "1rem" }}>
                      <a href="/Lampiran_Dokumen_Adi_Fuadil.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                        <i className="fa-solid fa-file-pdf"></i> Lihat Lampiran Ijazah &amp; Transkrip PDF (3.9 MB)
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">Keahlian Teknis</span>
              <h2 className="section-title">
                Teknologi &amp; <span className="text-gradient">Spesialisasi</span>
              </h2>
              <p className="section-subtitle">Tingkat penguasaan perangkat lunak, infrastruktur jaringan, bahasa pemrograman, dan otomasi.</p>
            </div>

            {/* Search Box */}
            <div className="skill-search-wrapper">
              <div className="search-box glass-card">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input
                  type="text"
                  placeholder="Cari keahlian (misal: Mikrotik, Python, POSCO DX, Laravel, QA)..."
                  value={skillSearchQuery}
                  onChange={(e) => setSkillSearchQuery(e.target.value)}
                />
                {skillSearchQuery && (
                  <button className="clear-search visible" onClick={() => setSkillSearchQuery("")} title="Hapus pencarian">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
              </div>
            </div>

            <div className="skills-grid">
              {skillsData.map((cat, cIdx) => (
                <div key={cIdx} className="glass-card skill-category-card">
                  <h3 className="category-title">
                    <i className={`fa-solid ${cat.categoryIcon}`}></i> {cat.categoryTitle}
                  </h3>
                  <div className="skill-bars">
                    {cat.skills
                      .filter((s) => !skillSearchQuery || s.tags.toLowerCase().includes(skillSearchQuery.toLowerCase()))
                      .map((skill, sIdx) => (
                        <div key={sIdx} className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">
                              <i className={skill.icon}></i> {skill.name}
                            </span>
                            <span className="skill-percentage">{skill.percent}</span>
                          </div>
                          <div className="skill-progress-bg">
                            <div className="skill-progress-bar" style={{ width: skill.percent }}></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">Karya Terpilih</span>
              <h2 className="section-title">
                Portofolio <span className="text-gradient">Proyek &amp; Aplikasi</span>
              </h2>
              <p className="section-subtitle">Beberapa proyek unggulan yang memadukan keindahan desain dan kehandalan sistem.</p>
            </div>

            {/* Project Filter Buttons */}
            <div className="filter-buttons-wrapper">
              <div className="filter-buttons">
                <button
                  className={`project-filter-btn ${projectFilter === "all" ? "active" : ""}`}
                  onClick={() => setProjectFilter("all")}
                >
                  Semua Proyek
                </button>
                <button
                  className={`project-filter-btn ${projectFilter === "fullstack" ? "active" : ""}`}
                  onClick={() => setProjectFilter("fullstack")}
                >
                  Fullstack Web
                </button>
                <button
                  className={`project-filter-btn ${projectFilter === "ai" ? "active" : ""}`}
                  onClick={() => setProjectFilter("ai")}
                >
                  AI &amp; Automation
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid" id="projects-grid">
              {projectsData
                .filter((p) => projectFilter === "all" || p.category === projectFilter)
                .map((project) => (
                  <div key={project.id} className="glass-card project-card">
                    <div className="project-image-wrapper" style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                      />
                      <div className="project-overlay">
                        <button className="btn btn-sm btn-primary" onClick={() => setSelectedProject(project)}>
                          <i className="fa-solid fa-eye"></i> Detail Proyek
                        </button>
                      </div>
                    </div>
                    <div className="project-content">
                      <div className="project-meta">
                        <span className="badge badge-accent">{project.categoryBadge}</span>
                        <span className="project-stars">
                          <i className="fa-solid fa-star"></i> {project.stars}
                        </span>
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.description}</p>
                      <div className="project-tech-stack">
                        {project.tech.map((t, idx) => (
                          <span key={idx}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">Mari Berdiskusi</span>
              <h2 className="section-title">
                Hubungi <span className="text-gradient">Saya</span>
              </h2>
              <p className="section-subtitle">Apakah Anda memiliki proyek menarik, tawaran kerja Onsite/Remote, atau sekadar ingin menyapa? Silakan kirim pesan!</p>
            </div>

            <div className="contact-grid">
              {/* Left Info Column */}
              <div className="glass-card contact-info-card">
                <h3 className="card-title">
                  <i className="fa-solid fa-paper-plane"></i> Informasi Kontak
                </h3>
                <p className="contact-intro">
                  Saya selalu terbuka untuk mendiskusikan ide baru, peluang kerja sama IT support/automation, atau tawaran posisi software engineer.
                </p>

                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="contact-detail">
                      <span className="contact-label">Email Direct</span>
                      <a href="mailto:adifuadil@gmail.com" className="contact-value">
                        adifuadil@gmail.com
                      </a>
                    </div>
                    <button className="copy-btn" onClick={() => copyToClipboard("adifuadil@gmail.com", "adifuadil@gmail.com")} title="Salin Email">
                      <i className="fa-regular fa-copy"></i>
                    </button>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div className="contact-detail">
                      <span className="contact-label">WhatsApp / Telp</span>
                      <a href="https://wa.me/6289650522522" target="_blank" rel="noopener noreferrer" className="contact-value">
                        +62 896-5052-2522
                      </a>
                    </div>
                    <button className="copy-btn" onClick={() => copyToClipboard("089650522522", "089650522522")} title="Salin Nomor">
                      <i className="fa-regular fa-copy"></i>
                    </button>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="contact-detail">
                      <span className="contact-label">Lokasi Domisili</span>
                      <span className="contact-value">Sukajadi, Serang / Cilegon, Banten (On-Site &amp; Remote)</span>
                    </div>
                  </div>
                </div>

                <div className="contact-availability">
                  <i className="fa-solid fa-clock"></i> Respons rata-rata: <strong>&lt; 2 Jam (Hari Kerja)</strong>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="glass-card contact-form-card">
                <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
                  <div className={`form-group ${contactErrors.name ? "invalid" : ""}`}>
                    <label htmlFor="form-name">
                      <i className="fa-solid fa-user"></i> Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      placeholder="Masukkan nama Anda"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                    />
                    {contactErrors.name && <span className="error-msg">{contactErrors.name}</span>}
                  </div>

                  <div className={`form-group ${contactErrors.email ? "invalid" : ""}`}>
                    <label htmlFor="form-email">
                      <i className="fa-solid fa-at"></i> Alamat Email
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      placeholder="nama@perusahaan.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                    />
                    {contactErrors.email && <span className="error-msg">{contactErrors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-subject">
                      <i className="fa-solid fa-heading"></i> Subjek Pesan
                    </label>
                    <input
                      type="text"
                      id="form-subject"
                      placeholder="Tawaran Proyek / Diskusi / Lowongan Kerja"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                    />
                  </div>

                  <div className={`form-group ${contactErrors.message ? "invalid" : ""}`}>
                    <label htmlFor="form-message">
                      <i className="fa-solid fa-message"></i> Isi Pesan
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="Ceritakan detail proyek atau tawaran pekerjaan..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                    ></textarea>
                    {contactErrors.message && <span className="error-msg">{contactErrors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary btn-block" disabled={contactSubmitting}>
                    {contactSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i> Mengirim...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane"></i> Kirim Pesan Sekarang
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-left">
            <a href="#hero" className="brand-logo">
              <span className="logo-icon">
                <i className="fa-solid fa-code"></i>
              </span>
              <span className="logo-text">
                dils<span>dev</span>
              </span>
            </a>
            <p>&copy; 2026 Adi Fuadil Hidayah, S.Kom. Dibuat dengan dedikasi tinggi &amp; clean code.</p>
          </div>

          <div className="footer-right">
            <a href="#hero" className="back-to-top-btn" title="Kembali ke atas">
              <i className="fa-solid fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="modal-overlay active" onClick={() => setSelectedProject(null)}>
          <div className="modal-card glass-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "750px", width: "90%" }}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Tutup modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-body">
              <div className="modal-project-header">
                <span className="badge badge-accent">{selectedProject.categoryBadge}</span>
                <h2 className="modal-project-title" style={{ marginTop: "0.5rem" }}>
                  {selectedProject.title}
                </h2>
                <div className="modal-project-meta">
                  <span className="project-stars">
                    <i className="fa-solid fa-star"></i> Rating {selectedProject.stars}
                  </span>
                </div>
              </div>

              {/* Gallery Images Carousel/Grid */}
              <div style={{ display: "grid", gridTemplateColumns: selectedProject.gallery.length > 1 ? "repeat(auto-fit, minmax(200px, 1fr))" : "1fr", gap: "10px", margin: "1.2rem 0" }}>
                {selectedProject.gallery.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`${selectedProject.title} screenshot ${idx + 1}`}
                    style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px", border: "1px solid var(--glass-border)" }}
                  />
                ))}
              </div>

              <p className="modal-project-desc">{selectedProject.fullDesc}</p>

              <h4 className="modal-section-title" style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
                <i className="fa-solid fa-check-circle" style={{ color: "var(--accent)" }}></i> Fitur Utama &amp; Pencapaian:
              </h4>
              <ul className="timeline-highlights" style={{ marginBottom: "1.5rem" }}>
                {selectedProject.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>

              <h4 className="modal-section-title" style={{ marginBottom: "0.5rem" }}>
                <i className="fa-solid fa-code" style={{ color: "var(--accent)" }}></i> Teknologi Yang Digunakan:
              </h4>
              <div className="modal-tech-list" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="modal-actions" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Demo / Akses Langsung
                  </a>
                )}
                {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <i className="fa-brands fa-github"></i> Repositori GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="toast-container" id="toast-container">
          <div className="toast">
            <i className={`fa-solid ${toastMessage.type === "success" ? "fa-circle-check" : "fa-circle-info"}`}></i>
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}
    </>
  );
}
