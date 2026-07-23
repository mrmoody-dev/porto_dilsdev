import React, { useState, useEffect } from 'react';
import { FaFilePdf, FaEnvelope, FaCode, FaBriefcase, FaGraduationCap, FaUser, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'profile', label: 'Profil & About', icon: <FaUser /> },
    { id: 'projects', label: 'Portofolio Proyek', icon: <FaCode /> },
    { id: 'job-finder', label: 'Cari Loker & AI Tools', icon: <FaBriefcase />, isNew: true },
    { id: 'education', label: 'Pendidikan & Sertifikat', icon: <FaGraduationCap /> },
    { id: 'contact', label: 'Kontak', icon: <FaEnvelope /> },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 24px' : '18px 24px',
        background: scrolled ? 'rgba(11, 15, 25, 0.92)' : 'rgba(11, 15, 25, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('profile')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '20px',
              color: '#FFFFFF',
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)',
            }}
          >
            d
          </div>
          <div>
            <span style={{ fontSize: '18px', fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.5px', display: 'block' }}>
              dilsdev<span style={{ color: '#06B6D4' }}>.</span>
            </span>
            <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>Adi Fuadil Hidayah, S.Kom</span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: isActive ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid transparent',
                  color: isActive ? '#22D3EE' : '#94A3B8',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
              >
                {item.icon}
                {item.label}
                {item.isNew && (
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #EF4444, #F59E0B)',
                      color: '#FFF',
                      fontSize: '9px',
                      fontWeight: 800,
                      padding: '2px 6px',
                      borderRadius: '8px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Demo
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* PDF Download Action Buttons */}
        <div className="pdf-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            href="/CV_Adi_Fuadil_Hidayah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan"
            style={{ fontSize: '12px', padding: '8px 14px' }}
          >
            <FaFilePdf /> CV (PDF)
          </a>
          <a
            href="/Lampiran_Dokumen_Adi_Fuadil.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: '12px', padding: '8px 14px' }}
          >
            <FaFilePdf /> Ijazah & Transkrip
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#F8FAFC',
            fontSize: '22px',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#0B0F19',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '20px',
            marginTop: '12px',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: activeSection === item.id ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: activeSection === item.id ? '#22D3EE' : '#F8FAFC',
                padding: '12px',
                borderRadius: '10px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <a
              href="/CV_Adi_Fuadil_Hidayah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <FaFilePdf /> CV (PDF)
            </a>
            <a
              href="/Lampiran_Dokumen_Adi_Fuadil.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <FaFilePdf /> Ijazah PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
