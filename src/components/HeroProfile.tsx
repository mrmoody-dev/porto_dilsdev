import React from 'react';
import { FaFilePdf, FaWhatsapp, FaEnvelope, FaCode, FaRocket, FaCheckCircle, FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import profileImage from '../assets/images/adi.png';

interface HeroProfileProps {
  onExploreProjects: () => void;
  onExploreJobs: () => void;
}

const HeroProfile: React.FC<HeroProfileProps> = ({ onExploreProjects, onExploreJobs }) => {
  return (
    <section id="profile" style={{ paddingTop: '110px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          className="glass-card"
          style={{
            padding: '40px 32px',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)',
          }}
        >
          {/* Background Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Status Badge */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                <span
                  style={{
                    background: 'rgba(34, 197, 94, 0.15)',
                    color: '#4ADE80',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '6px 14px',
                    borderRadius: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
                  Siap Kerja Freelance Remote & Onsite (Cilegon / Serang)
                </span>
                <span className="badge-gold">
                  <FaAward style={{ marginRight: '4px' }} /> IPK 3.59 Cum Laude
                </span>
              </div>

              {/* Name & Title */}
              <div>
                <h1
                  style={{
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: 800,
                    letterSpacing: '-1px',
                    color: '#F8FAFC',
                    marginBottom: '10px',
                    lineHeight: 1.1,
                  }}
                >
                  Adi Fuadil Hidayah, <span style={{ color: '#06B6D4' }}>S.Kom</span>
                </h1>
                <p style={{ fontSize: '18px', fontWeight: 700, color: '#22D3EE', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCode /> Senior Full-Stack & AI Automation Engineer
                </p>
              </div>

              {/* Description */}
              <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7, maxWidth: '850px' }}>
                Pengembang perangkat lunak berpengalaman <strong>6+ tahun</strong> berdomisili di Serang/Cilegon. Spesialis dalam pembangunan sistem web scalable (<strong>React, TypeScript, PHP/Laravel, CodeIgniter</strong>), otomatisasi AI & pemrosesan media (<strong>Python, Gemini AI, FFmpeg</strong>), bot algoritma trading crypto (<strong>WebSocket, REST API</strong>), serta arsitektur backend RESTful API terintegrasi.
              </p>

              {/* Quick Key Highlights Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '14px',
                  margin: '10px 0',
                }}
              >
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#06B6D4' }}>6+ Tahun</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Pengalaman Software Engineer</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#8B5CF6' }}>12+ Proyek</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Web Enterprise & Systems</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#F59E0B' }}>S.Kom Cum Laude</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Univ. Budi Luhur (IPK 3.59)</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaMapMarkerAlt /> Serang / Cilegon
                  </div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Banten, Indonesia (WFA / Onsite)</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '10px' }}>
                <button onClick={onExploreProjects} className="btn-cyan">
                  <FaRocket /> Lihat Portofolio Proyek
                </button>
                <button onClick={onExploreJobs} className="btn-outline" style={{ borderColor: 'rgba(6, 182, 212, 0.4)', color: '#22D3EE' }}>
                  <FaCheckCircle /> Demo Loker IT & AI Tools
                </button>
                <a href="/CV_Adi_Fuadil_Hidayah.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FaFilePdf /> Unduh CV (PDF)
                </a>
                <a href="/Lampiran_Dokumen_Adi_Fuadil.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FaFilePdf /> Lampiran Ijazah & Transkrip (3.9 MB)
                </a>
                <a
                  href="https://wa.me/6289650522522?text=Halo%20Adi,%20saya%20tertarik%20dengan%20portofolio%20Anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    color: '#4ADE80',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <FaWhatsapp /> WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProfile;
