import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaHome } from 'react-icons/fa';
import './Header.css';
import videoSrc from '../assets/WhatsApp Video 2025-10-26 at 00.21.10.mp4';

interface NavLink {
  label: string;
  href: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Mostrar mensaje al cargar la página
    setShowMessage(true);

    // Ocultar mensaje después de 10 segundos
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const getTitle = () => {
    if (location.pathname === '/studio') return 'JOUP STUDIO';
    if (location.pathname === '/service') return 'JOUP SERVICE';
    if (location.pathname === '/lab') return 'JOUP LAB';
    return 'JOUP LAB & STUDIO';
  };

  const getNavLinks = (): NavLink[] => {
    if (location.pathname === '/studio') {
      return [
        { label: 'Studio Info', href: '#studio-info' },
        { label: 'Cursos', href: '#courses' },
        { label: 'Educación', href: '#education' }
      ];
    }

    if (location.pathname === '/service') {
      return [
        { label: 'Servicios', href: '#service-info' },
        { label: 'Cómo Trabajamos', href: '#how-we-work' },
        { label: 'Contacto', href: '#contact' }
      ];
    }

    if (location.pathname === '/lab') {
      return [
        { label: 'Lab Info', href: '#lab-info' }
      ];
    }

    // Homepage navigation
    return [
      { label: 'Nuestra Historia', href: '#story' },
      { label: 'Nuestros Pilares', href: '#our-pillars' },
      { label: 'Sumate', href: '#join-us' },
      { label: 'Slow Bar', href: '#slow-bar' }
    ];
  };

  const getWelcomeMessage = () => {
    if (location.pathname === '/studio') return 'Bienvenido a JOUP STUDIO';
    if (location.pathname === '/service') return 'Bienvenido a JOUP SERVICE';
    if (location.pathname === '/lab') return 'Bienvenido a JOUP LAB';
    return 'Bienvenido a JOUP LAB & STUDIO';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navLinks = getNavLinks();
  const isNotHomePage = location.pathname !== '/';

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo" onClick={scrollToTop}>{getTitle()}</div>
          {isScrolled && (
            <div className="nav-arrow">
              <FaChevronDown />
            </div>
          )}
          {isNotHomePage && (
            <button className="home-button" onClick={goToHome} aria-label="Ir a inicio">
              <FaHome />
            </button>
          )}
          <nav className="nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className={`menu-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
            {isSidebarOpen ? <FaChevronRight /> : <FaChevronLeft />}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          {isNotHomePage && (
            <a onClick={() => { goToHome(); closeSidebar(); }} className="home-link">
              <FaHome /> Inicio
            </a>
          )}
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeSidebar}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <div className="floating-video">
        {showMessage && (
          <div className="floating-video-message thought-bubble">
            {getWelcomeMessage()}
          </div>
        )}
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
