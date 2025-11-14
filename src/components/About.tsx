import React from 'react';
import BatariImage from '../assets/images/batari.png';

const About: React.FC = () => {
  return (
    // The <section> tag is now in App.tsx
    <>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Welcome! I'm Adi Fuadil Hidayah, a passionate and experienced web developer. My goal is to build robust, scalable, and user-friendly web applications that solve real-world problems.
          </p>
          <p>
            I specialize in full-stack development, with expertise in React, Node.js, and various database technologies. I'm dedicated to writing clean, efficient, and maintainable code. Let's build something amazing together!
          </p>
        </div>
        <div className="about-image">
          <img src={BatariImage} alt="Adi Fuadil Hidayah - Web Developer" />
        </div>
      </div>
    </>
  );
};

export default About;