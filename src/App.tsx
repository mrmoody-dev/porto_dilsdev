import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./styles/main.scss";

import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import ProjectDetail from "./components/ProjectDetail"; // Keep ProjectDetail
import { FaInstagram } from 'react-icons/fa';

const navLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About Me' },
  { href: '#contact', label: 'Contact' },
];

// Komponen yang menangani gulir
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // Menambah sedikit jeda
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return null;
}

import { ThemeProvider } from "./context/ThemeContext";

// Komponen Home untuk halaman utama
function Home() {
  return (
    <>
      <MobileNav />
      <div className="app-container">
      {/* === LEFT COLUMN (STICKY) === */}
      <aside className="left-column">
        <div className="left-column-inner">
          <a href="#home" className="logo">
            <h1>dilsdev</h1>
            <p className="tagline">Web Developer</p>
          </a>

          <nav className="main-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="social-links">
            <a href="https://www.instagram.com/batari.wulan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            {/* Add other social links here if needed */}
          </div>
        </div>
      </aside>

      {/* === RIGHT COLUMN (SCROLLABLE) === */}
      <main className="right-column">
        <section id="home">
          <Hero />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <ScrollToHash />
      </ThemeProvider>
    </Router>
  );
}

export default App;
