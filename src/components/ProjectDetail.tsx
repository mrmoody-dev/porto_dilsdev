// src/components/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../data/projects"; // Impor data dari file terpusat

function ProjectDetail() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return <h2>Proyek Tidak Ditemukan</h2>;
  }

  return (
    <section className="project-detail-section">
      <div className="project-detail-content">
        <h2>{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <p>{project.description}</p>
        <p>{project.details}</p>
      </div>
    </section>
  );
}

export default ProjectDetail;
