import React, { useState } from 'react';
import GorillaImage from '../assets/images/gorilla.png';
import BcsItLogo from '../assets/images/Logo BCS IT.png';
import ItLogo from '../assets/images/LogoIT.png';
import BatariImage from '../assets/images/batari.png'; // Re-using batari.png for now
import { FaGlobe, FaUsers, FaCalendarAlt, FaEnvelope, FaServer } from 'react-icons/fa';

const portfolioImages = [
  { id: 1, src: GorillaImage, alt: 'Website Development (seventhsense.id)' },
  { id: 2, src: BcsItLogo, alt: 'Membership System (member.aspikom.org)' },
  { id: 3, src: ItLogo, alt: 'Conference Website (iicacs.com - 2024)' },
  { id: 4, src: BatariImage, alt: 'Online Letter System (suratonline - budiluhur)' },
  { id: 5, src: GorillaImage, alt: 'Server Migration' }, // Re-using GorillaImage
];

const servicesData = [
  { icon: <FaGlobe />, title: 'Website Development', description: 'Developed and maintained various websites, including seventhsense.id.' },
  { icon: <FaUsers />, title: 'Membership System', description: 'Implemented and managed membership systems, such as member.aspikom.org.' },
  { icon: <FaCalendarAlt />, title: 'Conference Website', description: 'Built conference websites, including iicacs.com (2024).' },
  { icon: <FaEnvelope />, title: 'Online Letter System', description: 'Developed online letter systems, like suratonline for Budiluhur.' },
  { icon: <FaServer />, title: 'Server Migration', description: 'Successfully migrated servers for various organizations (aspikom.org, radiobudiluhur, member.aspikom.org, makadaya.org).' },
];

// Combine data
const workAndServices = servicesData.map(service => ({
  ...service,
  images: portfolioImages.filter(image => image.alt === service.title),
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

            {activeService.images.length > 0 && (
              <div className="portfolio-grid" style={{ marginTop: '1.5rem' }}>
                {activeService.images.map((item) => (
                  <div key={item.id} className="portfolio-item">
                    <img src={item.src} alt={item.alt} />
                  </div>
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
