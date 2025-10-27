import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Header.css';
import videoSrc from '../assets/WhatsApp Video 2025-10-26 at 00.21.10.mp4';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <a href="#join-us">Compromiso</a>
            <a href="#slow-bar">Slow Bar</a>
          </nav>
        </div>
      </header>

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
    </>
  );
};

export default Header;
