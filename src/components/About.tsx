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
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="/CV_Adi_Fuadil_Hidayah.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.4rem',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: '#FFFFFF',
                borderRadius: '8px',
                fontWeight: 'bold',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
              }}
            >
              📄 Download Resume (PDF)
            </a>
            <a 
              href="/Lampiran_Dokumen_Adi_Fuadil.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.4rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'inherit',
                borderRadius: '8px',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
            >
              📑 Lihat Lampiran Ijazah & Sertifikat
            </a>
          </div>
        </div>
        <div className="about-image">
          <img src={AdiImage} alt="Adi Fuadil Hidayah - Web Developer" />
        </div>
      </div>
    </>
  );
};


export default About;