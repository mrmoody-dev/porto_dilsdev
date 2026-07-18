import React from 'react';
import AdiImage from '../assets/images/adi.png';

const About: React.FC = () => {
  return (
    <>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Halo! Saya <strong>Adi Fuadil Hidayah (dilsdev)</strong>, seorang Full-Stack Web Developer & IT Systems Engineer yang berdedikasi membangun aplikasi web performa tinggi, sistem e-commerce terotomasi, bot trading, dan portal enterprise.
          </p>
          <p>
            Dengan keahlian di ekosistem <strong>React, TypeScript, Node.js, Python, PHP (CodeIgniter/Laravel), PostgreSQL, dan Cloud Infrastructure</strong>, saya berfokus pada penulisan kode yang bersih, scalable, dan mengutamakan pengalaman pengguna (<em>user experience</em>).
          </p>
          <p>
            Saya selalu siap menghadapi tantangan teknis baru, baik untuk pengembangan produk dari awal, integrasi API & payment gateway, maupun pemeliharaan dan optimasi infrastruktur server.
          </p>
        </div>
        <div className="about-image">
          <img src={AdiImage} alt="Adi Fuadil Hidayah - Web Developer" />
        </div>
      </div>
    </>
  );
};

export default About;