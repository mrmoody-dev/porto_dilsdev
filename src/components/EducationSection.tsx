import React from 'react';
import { FaGraduationCap, FaAward, FaCheckCircle, FaLaptopCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const EducationSection: React.FC = () => {
  const skillsList = [
    { category: 'Frontend Web', skills: ['React', 'TypeScript', 'Vite', 'Next.js', 'Tailwind CSS', 'HTML5/SCSS', 'Bootstrap'] },
    { category: 'Backend & API', skills: ['Python (Flask/FastAPI)', 'PHP (Laravel, CodeIgniter 4)', 'Node.js (Express)', 'RESTful API', 'WebSocket', 'GraphQL'] },
    { category: 'Database & Cloud', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Linux Server (Ubuntu)', 'Mikrotik', 'Nginx/Apache'] },
    { category: 'AI & Automation', skills: ['Gemini AI API', 'FFmpeg Engine', 'Edge TTS', 'Web Scraping', 'Crypto Exchange Trading API', 'Telegram Bot API'] },
  ];

  return (
    <section id="education" style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Education & Credentials</span>
          <h2 className="section-title">Pendidikan & Keahlian Teknis</h2>
          <p className="section-desc">
            Latar belakang akademis resmi dan pemetaan stack teknologi yang dikuasai untuk pembangunan aplikasi kelas enterprise.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="glass-card" style={{ padding: '32px', marginBottom: '40px', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.6) 100%)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  color: '#06B6D4',
                  flexShrink: 0,
                }}
              >
                <FaGraduationCap />
              </div>
              <div>
                <span className="badge-gold" style={{ marginBottom: '6px', display: 'inline-block' }}>
                  <FaAward style={{ marginRight: '4px' }} /> IPK 3.59 - Cum Laude
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#F8FAFC' }}>S1 Teknik Informatika</h3>
                <div style={{ fontSize: '15px', color: '#06B6D4', fontWeight: 700, marginTop: '2px' }}>Universitas Budi Luhur, Jakarta</div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <a href="/Lampiran_Dokumen_Adi_Fuadil.pdf" target="_blank" rel="noopener noreferrer" className="btn-cyan">
                Lihat Verifikasi Ijazah & Transkrip (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {skillsList.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#06B6D4', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaCheckCircle /> {item.category}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {item.skills.map((s, sIdx) => (
                  <span key={sIdx} className="tech-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
