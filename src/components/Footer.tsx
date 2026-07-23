import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(11, 15, 25, 0.95)',
        padding: '32px 24px',
        textAlign: 'center',
        color: '#94A3B8',
        fontSize: '13px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
        <div style={{ fontSize: '18px', fontWeight: 800, color: '#F8FAFC' }}>
          dilsdev<span style={{ color: '#06B6D4' }}>.</span>
        </div>
        <p style={{ maxWidth: '500px', lineHeight: 1.6 }}>
          Official Web Portfolio & AI Interactive Showcase of **Adi Fuadil Hidayah, S.Kom**. Developed with React, TypeScript, and Glassmorphism Dark Aesthetics.
        </p>

        <div style={{ display: 'flex', gap: '16px', fontSize: '18px', margin: '6px 0' }}>
          <a href="https://github.com/mrmoody-dev" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8' }}>
            <FaGithub />
          </a>
          <a href="https://wa.me/6289650522522" target="_blank" rel="noopener noreferrer" style={{ color: '#4ADE80' }}>
            <FaWhatsapp />
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} dilsdev.vercel.app. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;