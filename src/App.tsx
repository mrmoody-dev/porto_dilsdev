import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroProfile from './components/HeroProfile';
import ProjectsSection from './components/ProjectsSection';
import JobFinderSection from './components/JobFinderSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailModal, { ProjectItem } from './components/ProjectDetailModal';
import { allProjects } from './data/projects';
import './styles/main.scss';

// Single Page Main App
function MainPortfolio() {
  const [activeSection, setActiveSection] = useState<string>('profile');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'projects', 'job-finder', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0B0F19' }}>
      <Navbar activeSection={activeSection} setActiveSection={scrollToSection} />
      <main>
        <HeroProfile
          onExploreProjects={() => scrollToSection('projects')}
          onExploreJobs={() => scrollToSection('job-finder')}
        />
        <ProjectsSection />
        <JobFinderSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

// Standalone Project Detail Route Page Handler
function StandaloneProjectRoute() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
        <h2>Proyek Tidak Ditemukan</h2>
        <button onClick={() => navigate('/')} className="btn-cyan" style={{ marginTop: '16px' }}>
          Kembali ke Portofolio Utama
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0B0F19' }}>
      <ProjectDetailModal project={project as ProjectItem} onClose={() => navigate('/')} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/project/:id" element={<StandaloneProjectRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
