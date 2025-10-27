import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './Header.css';
import videoSrc from '../assets/WhatsApp Video 2025-10-26 at 00.21.10.mp4';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo" onClick={scrollToTop}>JOUP LAB & STUDIO</div>
          {isScrolled && (
            <div className="nav-arrow">
              <FaChevronDown />
            </div>
          )}
          <nav className="nav">
            <a href="#story">Nuestra Historia</a>
            <a href="#philosophy">Filosofía</a>
            <a href="#how-we-work">Cómo Trabajamos</a>
            <a href="#commitment">Compromiso</a>
            <a href="#education">Educación</a>
            <a href="#join-us">Sumate</a>
            <a href="#slow-bar">Slow Bar</a>
          </nav>
          <div className={`menu-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
            {isSidebarOpen ? <FaChevronRight /> : <FaChevronLeft />}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <a href="#story" onClick={closeSidebar}>Nuestra Historia</a>
          <a href="#philosophy" onClick={closeSidebar}>Filosofía</a>
          <a href="#how-we-work" onClick={closeSidebar}>Cómo Trabajamos</a>
          <a href="#commitment" onClick={closeSidebar}>Compromiso</a>
          <a href="#education" onClick={closeSidebar}>Educación</a>
          <a href="#join-us" onClick={closeSidebar}>Sumate</a>
          <a href="#slow-bar" onClick={closeSidebar}>Slow Bar</a>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <div className="floating-video">
        <video
          className="floating-video-element"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {isScrolled && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaChevronUp />
        </div>
      )}
    </>
  );
};

export default Header;
