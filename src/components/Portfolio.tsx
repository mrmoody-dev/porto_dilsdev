import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUsers, FaCalendarAlt, FaEnvelope, FaServer } from 'react-icons/fa';
import { allProjects } from '../data/projects'; // ADDED THIS IMPORT

const servicesData = [
  { id: "website-development", icon: <FaGlobe />, title: 'Website Development', description: 'Developing responsive and performant websites from the ground up.' },
  { id: "membership-system", icon: <FaUsers />, title: 'Membership System', description: 'Implementing and managing full-featured membership systems.' },
  { id: "conference-website", icon: <FaCalendarAlt />, title: 'Conference Website', description: 'Building websites for international conferences, including registration and abstract management.' },
  { id: "online-letter-system", icon: <FaEnvelope />, title: 'Online Letter System', description: 'Developing online letter submission and approval workflow systems.' },
  { id: "server-migration", icon: <FaServer />, title: 'Server Migration', description: 'Successfully migrated servers and content for various organizations like Aspikom, Radio Budi Luhur, and Makadaya.' },
];

// Combine data
const workAndServices = servicesData.map(service => ({
  ...service,
  projects: allProjects.filter(project => project.serviceId === service.id),
}));

const Portfolio: React.FC = () => {
  // State to track the active tab, initialized with the first service's title
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

            {activeService.projects.length > 0 && ( // FIXED TYPO HERE
              <div className="portfolio-grid" style={{ marginTop: '1.5rem' }}>
                {activeService.projects.map((project) => (
                  <Link to={`/project/${project.id}`} key={project.id} className="portfolio-item">
                    <img src={Array.isArray(project.image) ? project.image[0] : project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <h4>{project.title}</h4>
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
