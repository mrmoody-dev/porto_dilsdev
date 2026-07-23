import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const waText = `Halo Adi Fuadil, nama saya ${name} (${email}). Saya menghubungi Anda dari portofolio web dilsdev.vercel.app:%0A%0A"${message}"`;
    window.open(`https://wa.me/6289650522522?text=${waText}`, '_blank');
    setSentSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" style={{ padding: '60px 0 100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Hubungi Saya untuk Diskusi / Penawaran Proyek</h2>
          <p className="section-desc">
            Siap bekerja secara remote freelance WFA atau proyek onsite kawasan industri Cilegon & Serang.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {/* Contact Details Card */}
          <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#F8FAFC' }}>Informasi Kontak Langsung</h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.15)', color: '#4ADE80', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                <FaWhatsapp />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>WhatsApp / Telepon</div>
                <a href="https://wa.me/6289650522522" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC' }}>
                  0896 5052 2522
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', color: '#22D3EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                <FaEnvelope />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Email Resmi</div>
                <a href="mailto:adifuadil@gmail.com" style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC' }}>
                  adifuadil@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.15)', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Lokasi Domisili</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC' }}>
                  Sukajadi Komplek P.U.K, Serang - Cilegon, Banten
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#F8FAFC', marginBottom: '16px' }}>Kirim Pesan Instan</h3>

            {sentSuccess ? (
              <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #4ADE80', padding: '20px', borderRadius: '12px', color: '#4ADE80', textAlign: 'center' }}>
                <FaCheckCircle style={{ fontSize: '32px', marginBottom: '8px' }} />
                <div style={{ fontWeight: 800, fontSize: '16px' }}>Pesan Terhubung ke WhatsApp!</div>
                <p style={{ fontSize: '13px', color: '#CBD5E1', marginTop: '4px' }}>Terima kasih, saya akan merespon pesan Anda sesegera mungkin.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#94A3B8', fontWeight: 600, marginBottom: '6px' }}>Nama Anda:</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama lengkap Anda..."
                    style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#FFF', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#94A3B8', fontWeight: 600, marginBottom: '6px' }}>Email Anda:</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.com..."
                    style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#FFF', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#94A3B8', fontWeight: 600, marginBottom: '6px' }}>Pesan / Penawaran Proyek:</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan kebutuhan proyek atau tawaran posisi pekerjaan di sini..."
                    style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#FFF', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <button type="submit" className="btn-cyan" style={{ justifyContent: 'center', padding: '12px' }}>
                  <FaPaperPlane /> Kirim Pesan Cepat via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
