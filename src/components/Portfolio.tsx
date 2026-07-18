import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUsers, FaCalendarAlt, FaEnvelope, FaServer, FaShoppingCart, FaRobot, FaLayerGroup } from 'react-icons/fa';
import { allProjects } from '../data/projects';

const servicesData = [
  { id: "all", icon: <FaLayerGroup />, title: 'All Work & Projects', description: 'Daftar portofolio lengkap pengembangan aplikasi web, platform e-commerce, bot sistem otomasi, dan portal enterprise.' },
  { id: "ecommerce-platform", icon: <FaShoppingCart />, title: 'E-Commerce & Digital Store', description: 'Pengembangan platform toko online modern, game top-up store, integrasi payment gateway, dan manajemen transaksi otomatis.' },
  { id: "automation-bot", icon: <FaRobot />, title: 'Automation & Trading Bots', description: 'Pengembangan bot trading algoritma crypto, data streaming WebSocket, REST API, dan notifikasi terintegrasi Telegram/Discord.' },
  { id: "website-development", icon: <FaGlobe />, title: 'Full-Stack Web Development', description: 'Membangun aplikasi web responsif dan modern dari awal hingga tingkat produksi dengan React, Node.js, PHP, & Tailwind/SCSS.' },
  { id: "membership-system", icon: <FaUsers />, title: 'Membership & Enterprise Systems', description: 'Sistem keanggotaan organisasi, manajemen pengguna, KTA digital, dan portal dokumentasi API.' },
  { id: "conference-website", icon: <FaCalendarAlt />, title: 'Conference & Event Web', description: 'Website event dan pendaftaran konferensi taraf internasional lengkap dengan sistem verifikasi abstrak & pembayaran.' },
  { id: "online-letter-system", icon: <FaEnvelope />, title: 'Online Approval Workflows', description: 'Sistem pengajuan surat digital dan alur persetujuan bertingkat terintegrasi.' },
  { id: "server-migration", icon: <FaServer />, title: 'Cloud & Server Migration', description: 'Layanan migrasi server VPS/Cloud, pengelolaan domain, optimasi hosting, dan konfigurasi CI/CD.' },
];

// Combine data
const workAndServices = servicesData.map(service => ({
  ...service,
  projects: service.id === "all" ? allProjects : allProjects.filter(project => project.serviceId === service.id),
}));

const Portfolio: React.FC = () => {
  // State to track the active tab, initialized with "All Work & Projects"
  const [activeTab, setActiveTab] = useState(servicesData[0].title);

  // Find the currently active service object based on the activeTab state
  const activeService = workAndServices.find(service => service.title === activeTab);

  return (
    <>
      <h2 className="section-title">My Work & Services</h2>
      
      {/* Tab Navigation */}
      <div className="tabs-nav">
        {servicesData.map(service => (
          <button 
            key={service.title} 
            className={`tab-item ${activeTab === service.title ? 'active' : ''}`}
            onClick={() => setActiveTab(service.title)}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeService && (
          <div className="service-group">
            <div className="service-card">
              <div className="service-icon">{activeService.icon}</div>
              <h3 className="service-title">{activeService.title}</h3>
              <p className="service-description">{activeService.description}</p>
            </div>

            {activeService.projects.length > 0 && (
              <div className="portfolio-grid" style={{ marginTop: '1.5rem' }}>
                {activeService.projects.map((project) => (
                  <Link to={`/project/${project.id}`} key={project.id} className="portfolio-item">
                    <img src={Array.isArray(project.image) ? project.image[0] : project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <h4>{project.title}</h4>
                      {project.technologies && (
                        <p style={{ fontSize: '0.8rem', opacity: 0.85, marginTop: '0.25rem' }}>
                          {project.technologies.slice(0, 3).join(' • ')}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;

