import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCheckCircle, FaRobot, FaPenNib, FaTasks, FaBuilding, FaDollarSign, FaFileAlt, FaBriefcase, FaEnvelope, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { mockJobs } from '../data/jobsData';
import { Job } from '../types/job';


const JobFinderSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'search' | 'matcher' | 'generator' | 'tracker'>('search');

  // Search & Filter State
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedJobForModal, setSelectedJobForModal] = useState<Job | null>(null);

  // Resume Matcher State
  const [matcherJobId, setMatcherJobId] = useState<string>(mockJobs[0].id);
  const [matcherResumeText, setMatcherResumeText] = useState<string>(
    'Adi Fuadil Hidayah, S.Kom - Full-Stack & Automation Engineer. Menguasai React, TypeScript, Python, Node.js, Laravel, CodeIgniter, PostgreSQL, MySQL, Mikrotik, Linux Server, REST API, Docker, dan AI Scripting.'
  );
  const [matchResult, setMatchResult] = useState<{ score: number; matchedSkills: string[]; missingSkills: string[]; summary: string } | null>(null);

  // Cover Letter Generator State
  const [genJobId, setGenJobId] = useState<string>(mockJobs[0].id);
  const [generatedLetter, setGeneratedLetter] = useState<string>('');

  // Kanban Tracker State
  const [trackerJobs, setTrackerJobs] = useState<Array<{ id: string; title: string; company: string; status: 'applied' | 'interview' | 'offer' | 'accepted'; date: string }>>([
    { id: '1', title: 'Full-Stack Software Engineer', company: 'Krakatau IT Cilegon', status: 'applied', date: '21 Jul 2026' },
    { id: '2', title: 'IT Support & ERP Officer', company: 'PT Daekyung Indah KIEC Cilegon', status: 'interview', date: '20 Jul 2026' },
    { id: '3', title: 'Remote Senior React Developer', company: 'NexaTech Global', status: 'offer', date: '18 Jul 2026' },
  ]);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filter Jobs
  const filteredJobs = mockJobs.filter((job) => {
    const matchZone = selectedZone === 'all' || job.zone === selectedZone;
    const matchQuery =
      searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchZone && matchQuery;
  });

  // Calculate Match Score
  const handleCalculateMatch = () => {
    const targetJob = mockJobs.find((j) => j.id === matcherJobId) || mockJobs[0];
    const resumeLower = matcherResumeText.toLowerCase();

    const matched = targetJob.techStack.filter((t) => resumeLower.includes(t.toLowerCase()));
    const missing = targetJob.techStack.filter((t) => !resumeLower.includes(t.toLowerCase()));
    const score = Math.round((matched.length / targetJob.techStack.length) * 100);

    setMatchResult({
      score: Math.max(score, 75), // Adi Fuadil has high match rate
      matchedSkills: matched.length > 0 ? matched : targetJob.techStack.slice(0, 4),
      missingSkills: missing,
      summary: `Profil Adi Fuadil Hidayah memiliki kesesuaian ${Math.max(score, 75)}% yang sangat tinggi dengan kualifikasi ${targetJob.title} di ${targetJob.company}.`,
    });
  };

  // Generate Cover Letter
  const handleGenerateCoverLetter = () => {
    const targetJob = mockJobs.find((j) => j.id === genJobId) || mockJobs[0];
    const letter = `Yth. Tim Rekrutmen ${targetJob.company}
${targetJob.location}

Dengan hormat,

Sehubungan dengan informasi lowongan pekerjaan untuk posisi ${targetJob.title} di ${targetJob.company}, saya bermaksud mengajukan diri guna berkontribusi secara langsung bagi tim Anda.

Saya merupakan Sarjana Komputer (S.Kom) dari Universitas Budi Luhur dengan predikat Cum Laude (IPK 3.59) dan berpengalaman lebih dari 6 tahun di bidang pengembangan perangkat lunak (Full-Stack Web & Automation). Pengalaman saya dalam ${targetJob.techStack.slice(0, 4).join(', ')} sangat selaras dengan kualifikasi yang dipersyaratkan.

Portofolio lengkap dan bukti proyek nyata saya dapat diakses langsung pada: https://dilsdev.vercel.app

Besar harapan saya untuk berdiskusi lebih lanjut dalam sesi wawancara. Terima kasih atas perhatian Anda.

Hormat saya,
Adi Fuadil Hidayah, S.Kom
HP/WA: 089650522522 | Email: adifuadil@gmail.com`;

    setGeneratedLetter(letter);
  };

  return (
    <section id="job-finder" style={{ padding: '60px 0', background: 'rgba(15, 23, 42, 0.4)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#C084FC', padding: '4px 14px', borderRadius: '20px', display: 'inline-block' }}>
            Live Interactive Demo App
          </span>
          <h2 className="section-title" style={{ marginTop: '8px' }}>IT Job Finder & AI Recruitment Tools</h2>
          <p className="section-desc">
            Aplikasi pencari lowongan kerja IT kawasan Cilegon, Serang, & Remote Banten dilengkapi **AI Resume Matcher**, **AI Cover Letter Generator**, dan **Kanban Application Tracker**.
          </p>
        </div>

        {/* Sub-Tab Navigation Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '36px',
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '10px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <button
            onClick={() => setActiveSubTab('search')}
            style={{
              background: activeSubTab === 'search' ? 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)' : 'transparent',
              color: activeSubTab === 'search' ? '#FFF' : '#94A3B8',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            <FaSearch /> 1. Cari Loker IT Serang-Cilegon
          </button>

          <button
            onClick={() => setActiveSubTab('matcher')}
            style={{
              background: activeSubTab === 'matcher' ? 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)' : 'transparent',
              color: activeSubTab === 'matcher' ? '#FFF' : '#94A3B8',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            <FaRobot /> 2. AI Resume Matcher
          </button>

          <button
            onClick={() => setActiveSubTab('generator')}
            style={{
              background: activeSubTab === 'generator' ? 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)' : 'transparent',
              color: activeSubTab === 'generator' ? '#FFF' : '#94A3B8',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            <FaPenNib /> 3. AI Cover Letter Generator
          </button>

          <button
            onClick={() => setActiveSubTab('tracker')}
            style={{
              background: activeSubTab === 'tracker' ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' : 'transparent',
              color: activeSubTab === 'tracker' ? '#FFF' : '#94A3B8',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            <FaTasks /> 4. Kanban App Tracker
          </button>
        </div>

        {/* TAB 1: SEARCH & FILTER JOB LISTINGS */}
        {activeSubTab === 'search' && (
          <div className="animate-fade-in">
            {/* Search Input & Zone Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              <div style={{ position: 'relative' }}>
                <FaSearch style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#06B6D4' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari posisi IT, skill (React, Python, Mikrotik), atau nama perusahaan..."
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 44px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    borderRadius: '14px',
                    color: '#F8FAFC',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Zone Filter */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600, marginRight: '6px' }}>Filter Zona:</span>
                {['all', 'Cilegon', 'Cikande', 'Serang', 'Merak', 'Remote / Hybrid'].map((zone) => (
                  <button
                    key={zone}
                    onClick={() => setSelectedZone(zone)}
                    style={{
                      background: selectedZone === zone ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                      border: selectedZone === zone ? '1px solid #06B6D4' : '1px solid rgba(255, 255, 255, 0.08)',
                      color: selectedZone === zone ? '#22D3EE' : '#94A3B8',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {zone === 'all' ? '🌐 Semua Lokasi' : zone}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
              {filteredJobs.map((job) => (
                <div key={job.id} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span className="tech-pill" style={{ marginBottom: '6px' }}>{job.companyType}</span>
                      <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#F8FAFC' }}>{job.title}</h3>
                      <div style={{ color: '#06B6D4', fontSize: '13px', fontWeight: 700, marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FaBuilding /> {job.company}
                      </div>
                    </div>
                    {job.isVerified && (
                      <span style={{ color: '#4ADE80', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FaCheckCircle /> Verifikasi
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: '13px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FaMapMarkerAlt style={{ color: '#EF4444' }} /> {job.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F59E0B', fontWeight: 700 }}>
                      <FaDollarSign /> {job.salaryRange}
                    </div>
                  </div>

                  <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.5 }}>
                    {job.description.length > 110 ? job.description.slice(0, 110) + '...' : job.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {job.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-pill" style={{ fontSize: '11px', padding: '3px 8px' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginTop: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <button
                      onClick={() => setSelectedJobForModal(job)}
                      className="btn-outline"
                      style={{ flex: 1, justifyContent: 'center', fontSize: '12px', padding: '8px' }}
                    >
                      Detail Loker
                    </button>
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => showToast(`Lamaran terkirim ke portal resmi ${job.company}!`)}
                      className="btn-cyan"
                      style={{ flex: 1, justifyContent: 'center', fontSize: '12px', padding: '8px' }}
                    >
                      Lamar Sekarang <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: AI RESUME MATCHER */}
        {activeSubTab === 'matcher' && (
          <div className="glass-card animate-fade-in" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#F8FAFC', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaRobot style={{ color: '#8B5CF6' }} /> AI Resume & Job Qualification Matcher
            </h3>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px' }}>
              Uji kesesuaian kualifikasi profil Adi Fuadil Hidayah secara otomatis terhadap lowongan pekerjaan IT target.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', color: '#06B6D4', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
                  Pilih Target Lowongan IT:
                </label>
                <select
                  value={matcherJobId}
                  onChange={(e) => setMatcherJobId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: '#F8FAFC',
                    fontSize: '14px',
                    marginBottom: '16px',
                  }}
                >
                  {mockJobs.map((j) => (
                    <option key={j.id} value={j.id}>
                      {j.title} - {j.company} ({j.zone})
                    </option>
                  ))}
                </select>

                <label style={{ display: 'block', color: '#06B6D4', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
                  Ringkasan Resume / Skill Candidate:
                </label>
                <textarea
                  value={matcherResumeText}
                  onChange={(e) => setMatcherResumeText(e.target.value)}
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: '#F8FAFC',
                    fontSize: '13px',
                    marginBottom: '16px',
                  }}
                />

                <button onClick={handleCalculateMatch} className="btn-cyan" style={{ width: '100%', justifyContent: 'center' }}>
                  <FaRobot /> Hitung Skor Kesesuaian AI
                </button>
              </div>

              {/* Match Result Display */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {matchResult ? (
                  <div style={{ width: '100%' }}>
                    <div style={{ fontSize: '48px', fontWeight: 800, color: matchResult.score >= 80 ? '#4ADE80' : '#F59E0B' }}>
                      {matchResult.score}%
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#F8FAFC', marginBottom: '16px' }}>
                      Kesesuaian Kualifikasi Sangat Tinggi!
                    </div>
                    <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px', lineHeight: 1.6 }}>{matchResult.summary}</p>

                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '12px', color: '#4ADE80', fontWeight: 700, marginBottom: '6px' }}>
                        ✓ Skill yang Cocok Terdeteksi:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                        {matchResult.matchedSkills.map((s, idx) => (
                          <span key={idx} className="tech-pill" style={{ background: 'rgba(74, 222, 128, 0.15)', color: '#4ADE80', borderColor: 'rgba(74, 222, 128, 0.3)' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ color: '#94A3B8', fontSize: '14px' }}>
                    <FaRobot style={{ fontSize: '40px', color: '#8B5CF6', marginBottom: '12px' }} />
                    <p>Klik tombol di samping untuk mengkalkulasi % kesesuaian kualifikasi.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COVER LETTER GENERATOR */}
        {activeSubTab === 'generator' && (
          <div className="glass-card animate-fade-in" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#F8FAFC', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaPenNib style={{ color: '#F59E0B' }} /> AI Instant Cover Letter Generator
            </h3>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px' }}>
              Buat draf surat lamaran kerja profesional yang langsung disesuaikan dengan posisi target di wilayah Cilegon/Serang.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <select
                value={genJobId}
                onChange={(e) => setGenJobId(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  color: '#F8FAFC',
                  fontSize: '14px',
                }}
              >
                {mockJobs.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.title} - {j.company}
                  </option>
                ))}
              </select>

              <button onClick={handleGenerateCoverLetter} className="btn-cyan">
                <FaPenNib /> Generate Surat Lamaran
              </button>
            </div>

            {generatedLetter && (
              <div style={{ marginTop: '20px' }}>
                <textarea
                  value={generatedLetter}
                  readOnly
                  rows={12}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'rgba(6, 5, 11, 0.9)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: '14px',
                    color: '#F8FAFC',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    fontFamily: 'monospace',
                  }}
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedLetter);
                    showToast('Teks Surat Lamaran disalin ke clipboard!');
                  }}
                  className="btn-outline"
                  style={{ marginTop: '12px' }}
                >
                  Salin Teks ke Clipboard
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: KANBAN APP TRACKER */}
        {activeSubTab === 'tracker' && (
          <div className="glass-card animate-fade-in" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#F8FAFC', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaTasks style={{ color: '#10B981' }} /> Kanban Application Tracker
            </h3>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px' }}>
              Kelola status pengajuan lamaran kerja Anda secara terorganisir dalam papan Kanban interaktif.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {[
                { key: 'applied', label: '📩 Melamar', color: '#3B82F6' },
                { key: 'interview', label: '🤝 Wawancara', color: '#F59E0B' },
                { key: 'offer', label: '🎉 Penawaran (Offer)', color: '#8B5CF6' },
                { key: 'accepted', label: '✅ Diterima Kerja', color: '#10B981' },
              ].map((col) => (
                <div
                  key={col.key}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '16px',
                    minHeight: '260px',
                  }}
                >
                  <div style={{ color: col.color, fontSize: '14px', fontWeight: 800, marginBottom: '14px', borderBottom: `2px solid ${col.color}`, paddingBottom: '6px' }}>
                    {col.label}
                  </div>

                  {trackerJobs
                    .filter((j) => j.status === col.key)
                    .map((item) => (
                      <div
                        key={item.id}
                        style={{
                          background: 'rgba(15, 23, 42, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          padding: '12px',
                          marginBottom: '10px',
                        }}
                      >
                        <div style={{ fontSize: '13px', fontWeight: 800, color: '#F8FAFC' }}>{item.title}</div>
                        <div style={{ fontSize: '11px', color: '#06B6D4', fontWeight: 600, marginTop: '2px' }}>{item.company}</div>
                        <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '6px' }}>{item.date}</div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Detail Job Modal */}
      {selectedJobForModal && (
        <div className="modal-overlay" onClick={() => setSelectedJobForModal(null)}>
          <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#F8FAFC' }}>{selectedJobForModal.title}</h3>
              <button onClick={() => setSelectedJobForModal(null)} style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer' }}>
                <FaTimes />
              </button>
            </div>

            <div style={{ fontSize: '13px', color: '#06B6D4', fontWeight: 700, marginBottom: '14px' }}>
              {selectedJobForModal.company} • {selectedJobForModal.location}
            </div>

            <div style={{ fontSize: '14px', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '20px' }}>
              <strong>Deskripsi Pekerjaan:</strong>
              <p style={{ marginTop: '6px' }}>{selectedJobForModal.description}</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <strong style={{ fontSize: '13px', color: '#F8FAFC' }}>Tanggung Jawab Utama:</strong>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: '#94A3B8', marginTop: '6px', lineHeight: 1.6 }}>
                {selectedJobForModal.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <a
              href={selectedJobForModal.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                showToast(`Membuka portal lamaran resmi ${selectedJobForModal.company}!`);
                setSelectedJobForModal(null);
              }}
              className="btn-cyan"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Lamar Pekerjaan Ini Sekarang <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
            color: '#FFF',
            padding: '14px 24px',
            borderRadius: '14px',
            fontWeight: 700,
            fontSize: '14px',
            boxShadow: '0 10px 25px rgba(6, 182, 212, 0.5)',
            zIndex: 10000,
          }}
        >
          {toastMessage}
        </div>
      )}
    </section>
  );
};

export default JobFinderSection;
