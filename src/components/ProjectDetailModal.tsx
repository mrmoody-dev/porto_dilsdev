import React, { useState } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaLayerGroup, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface ProjectItem {
  id: string;
  title: string;
  image: string | string[];
  description: string;
  details: string;
  technologies: string[];
  role: string;
  challenges: string;
  liveUrl: string;
  githubUrl: string;
  serviceId?: string;
}

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const images: string[] = Array.isArray(project.image) ? project.image : [project.image];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <span className="section-subtitle" style={{ fontSize: '12px' }}>Project Detail</span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#F8FAFC' }}>{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#F8FAFC',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <FaTimes />
          </button>
        </div>

        {/* Multi-Image Carousel Showcase */}
        <div style={{ position: 'relative', marginBottom: '24px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', background: '#06050b' }}>
          <img
            src={images[activeImageIndex]}
            alt={`${project.title} screenshot ${activeImageIndex + 1}`}
            style={{ width: '100%', maxHeight: '450px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#22D3EE',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                }}
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={handleNextImage}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#22D3EE',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                }}
              >
                <FaChevronRight />
              </button>

              {/* Image Indicators */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      width: idx === activeImageIndex ? '20px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: idx === activeImageIndex ? '#06B6D4' : 'rgba(255, 255, 255, 0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#06B6D4', fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>Ringkasan Proyek</h4>
            <p style={{ color: '#CBD5E1', fontSize: '15px', lineHeight: 1.6 }}>{project.details}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Peran Utama</div>
              <div style={{ color: '#F8FAFC', fontSize: '14px', fontWeight: 700 }}>{project.role}</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Tantangan Teknis</div>
              <div style={{ color: '#F8FAFC', fontSize: '13px', lineHeight: 1.5 }}>{project.challenges}</div>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#06B6D4', fontSize: '14px', fontWeight: 700, marginBottom: '10px' }}>Teknologi yang Digunakan</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-cyan">
                <FaExternalLinkAlt /> Kunjungi Web Live
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FaGithub /> GitHub Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
