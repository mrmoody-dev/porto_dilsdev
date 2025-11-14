// src/components/Gallery.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import { allProjects } from "../data/projects"; // Impor data dari file terpusat

function Gallery() {
  return (
    <motion.section
      id="portfolio"
      className="gallery-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Portofolio Kami
      </motion.h2>
      <div className="gallery-grid">
        {allProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="gallery-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}`} className="project-link">
                Lihat Proyek
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Gallery;
