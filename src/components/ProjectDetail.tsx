// src/components/ProjectDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { allProjects } from "../data/projects"; // Impor data dari file terpusat
import { FaCode, FaUserTie, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

function ProjectDetail() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === id);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  if (!project) {
    return <h2>Proyek Tidak Ditemukan</h2>;
  }

  return (
    <section className="project-detail-section">
      <Link to="/" className="back-to-home-link">
        <FaArrowLeft />
        <span>Back to Home</span>
      </Link>

      <div className="project-detail-header">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="project-detail-columns">
        <div className="project-detail-left">
          {Array.isArray(project.image) ? (
            <Slider {...sliderSettings} className="project-slider">
              {project.image.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`${project.title} - slide ${index + 1}`}
                    className="project-image"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}
          <div className="project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Lihat Proyek Live
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Lihat di GitHub
              </a>
            )}
          </div>
        </div>
        <div className="project-detail-right">
          <h3><FaCode /> Teknologi yang Digunakan</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <h3><FaUserTie /> Peran Saya</h3>
          <p>{project.role}</p>

          <h3><FaExclamationTriangle /> Tantangan & Solusi</h3>
          <p>{project.challenges}</p>

          <h3>Detail Proyek</h3>
          <p>{project.details}</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
