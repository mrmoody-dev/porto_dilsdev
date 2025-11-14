import React from 'react';
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home', icon: <FaHome /> },
  { href: '#portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
  { href: '#about', label: 'About Me', icon: <FaUser /> },
  { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
];

const MobileNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      {navLinks.map((link) => (
        <a href={link.href} key={link.href} className="bottom-nav-item">
          {link.icon}
          <span className="bottom-nav-label">{link.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default MobileNav;
