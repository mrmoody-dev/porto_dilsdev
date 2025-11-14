// src/components/Features.tsx
import React from "react";
import { motion } from "framer-motion"; // Import motion
import { allFeatures } from "../data/features"; // Impor data dari file terpusat

function Features() {
  return (
    <motion.section
          className="features-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="features-title">Layanan Kami</h2>
          <div className="features-grid-wrapper"> {/* New wrapper div */}
            <div className="features-grid">
              {allFeatures.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="feature-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }} // Staggered animation
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px var(--shadow-color)" }} // Micro-interaction
                >
                  <img src={item.icon} alt={item.title} className="feature-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div> {/* End new wrapper div */}
        </motion.section>
  );
}

export default Features;
