// src/data/projects.js
import projectImage1 from "../assets/images/gorilla.png";
import projectImageMembership from "../assets/images/ss member.aspikom landing page.jpg";
import projectImageIicacs from "../assets/images/ss iicacs.jpg";

export const allProjects = [
  {
    id: "aplikasi-membership",
    title: "Aplikasi Membership",
    image: projectImageMembership,
    description: "Website Membership organisasi asosiasi pendidikan ilmu komunikasi se-indonesia.",
    details:
      "Deskripsi lengkap tentang proyek E-Commerce ini, termasuk teknologi yang digunakan, tantangan yang dihadapi, dan hasil akhir. Proyek ini dibangun dengan React dan Node.js.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    role: "Full-stack Developer",
    challenges: "Mengelola data anggota dalam jumlah besar dan memastikan keamanan data.",
    liveUrl: "https://member.aspikom.org",
    githubUrl: "https://github.com/your-username/aplikasi-membership",
  },
  {
    id: "website-agency",
    title: "Website Agency Seventhsense",
    image: projectImage1,
    description: "Website Agency miliki Seventhsense.",
    details:
      "Website untuk profiling agency dan talent talent nya.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    role: "Front-end Developer",
    challenges: "Membuat desain responsif yang menarik dan mengoptimalkan performa website.",
    liveUrl: "https://seventhsense.id",
    githubUrl: "https://github.com/your-username/website-agency",
  },
  {
    id: "aplikasi-form-pendaftaran",
    title: "Aplikasi Pendaftaran Peserta Converence",
    image: projectImageIicacs,
    description: "Aplikasi untuk pendafataran peserta converence taraf internasional.",
    details:
      "Aplikasi web untuk melakukan pendaftaran peserta converence taraf internasional.",
    technologies: ["Vue.js", "Laravel", "PostgreSQL", "REST API"],
    role: "Back-end Developer",
    challenges: "Mengintegrasikan berbagai metode pembayaran dan mengelola data pendaftaran yang kompleks.",
    liveUrl: "https://iicacs.com",
    githubUrl: "https://github.com/your-username/aplikasi-pendaftaran",
  },
  // Tambahkan data proyek lainnya di sini jika Anda mau
];
