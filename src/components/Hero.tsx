import React from 'react';
import BatariImage from '../assets/images/batari.png';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Adi Fuadil Hidayah</h1>
        <p className="tagline">Web Developer</p>
        <a href="#portfolio" className="btn btn-primary">
          View My Work
        </a>
      </div>
      <div className="hero-image-container">
        <img src={BatariImage} alt="Batari Wulan - Makeup Artist" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;