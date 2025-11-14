import React from 'react';
import AdiImage from '../assets/images/adi.png';

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
        <img src={AdiImage} alt="Adi Fuadil Hidayah - Web Developer" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;