// src/components/Header.tsx
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
// Removed react-icons import
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust threshold as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`main-header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="header-left">
            <Link to="/#beranda" className="header-logo-link">
              <img src="/logo_dilsdev.png" alt="Logo Perusahaan" className="logo-img" style={{ width: '100px', height: 'auto' }} />
              <span className="logo-text">My Portfolio</span> {/* Added text logo */}
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/#beranda">Beranda</Link>
              </li>
              <li>
                <Link to="/#layanan">Layanan</Link>
              </li>
              <li>
                <Link to="/#tentang">Tentang</Link>
              </li>
              <li>
                <Link to="/#portofolio">Portofolio</Link>
              </li>
              <li>
                <Link to="/#kontak">Kontak</Link>
              </li>
            </ul>
          </nav>
          <div className="header-right">
            <button onClick={toggleTheme} className="theme-toggle-button">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <Link to="/#kontak"> {/* Added CTA button */}
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </Link>
          </div>    </motion.header>
  );
}

export default Header;
