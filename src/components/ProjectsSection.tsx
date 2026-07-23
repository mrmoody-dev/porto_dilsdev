import React, { useState } from 'react';
import { FaCode, FaSearchPlus, FaExternalLinkAlt, FaGithub, FaLayerGroup } from 'react-icons/fa';
import { allProjects } from '../data/projects';
import ProjectDetailModal, { ProjectItem } from './ProjectDetailModal';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Proyek (12)' },
    { id: 'automation-bot', label: 'AI Automation & Bot' },
    { id: 'membership-system', label: 'Full-Stack & Systems' },
    { id: 'website-development', label: 'Web & CMS' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? allProjects
    : allProjects.filter((p) => p.serviceId === selectedCategory);

  return (
    <section id="projects" style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Featured Portfolio</span>
          <h2 className="section-title">Portofolio Proyek Rekam Jejak</h2>
          <p className="section-desc">
            Kumpulan sistem produksi, bot otomatisasi AI/Crypto, serta aplikasi web enterprise yang dibangun dengan standar arsitektur tinggi.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isActive ? '#FFFFFF' : '#94A3B8',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(6, 182, 212, 0.3)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredProjects.map((project) => {
            const mainImg = Array.isArray(project.image) ? project.image[0] : project.image;
            const imgCount = Array.isArray(project.image) ? project.image.length : 1;

            return (
              <div
                key={project.id}
                className="glass-card animate-fade-in"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                {/* Project Image Preview */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    overflow: 'hidden',
                    background: '#06050b',
                  }}
                >
                  <img
                    src={mainImg}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />

                  {imgCount > 1 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        color: '#22D3EE',
                        border: '1px solid rgba(34, 211, 238, 0.4)',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '20px',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <FaLayerGroup /> {imgCount} Screenshots
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '14px' }}>
                  <span style={{ fontSize: '12px', color: '#06B6D4', fontWeight: 700 }}>{project.role}</span>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#F8FAFC', lineHeight: 1.3 }}>{project.title}</h3>
                  <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, flexGrow: 1 }}>{project.description}</p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-pill" style={{ color: '#94A3B8', border: '1px solid rgba(255,255,255,0.1)' }}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <button
                      onClick={() => setSelectedProject(project as ProjectItem)}
                      className="btn-cyan"
                      style={{ fontSize: '13px', padding: '8px 16px' }}
                    >
                      <FaSearchPlus /> Screenshot & Detail
                    </button>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#94A3B8', fontSize: '16px' }}
                          title="GitHub Code"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#06B6D4', fontSize: '16px' }}
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectsSection;
