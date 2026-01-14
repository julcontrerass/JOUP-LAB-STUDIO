import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaHome } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ThemeToggle, LanguageToggle } from '../ui';
import '../../styles/layout/header.css';
import '../../styles/layout/floating-settings.css';
import videoSrc from '../../assets/videos/WhatsApp Video 2025-10-26 at 00.21.10.mp4';

interface NavLink {
  label: string;
  href: string;
}

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOutOfHero, setIsOutOfHero] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setIsOutOfHero(window.scrollY > window.innerHeight * 0.8);
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
    if (location.pathname === '/studio') return t('header.titleStudio');
    if (location.pathname === '/service') return t('header.titleService');
    if (location.pathname === '/lab') return t('header.titleLab');
    if (location.pathname === '/blog' || location.pathname.startsWith('/blog/')) return t('header.blog');
    return t('header.title');
  };

  const getNavLinks = (): NavLink[] => {
    if (location.pathname === '/studio') {
      return [
        { label: t('nav.studioInfo'), href: '#studio-info' },
        { label: t('nav.courses'), href: '#courses' },
        { label: t('nav.education'), href: '#education' }
      ];
    }

    if (location.pathname === '/service') {
      return [
        { label: t('nav.services'), href: '#service-info' },
        { label: t('nav.howWeWork'), href: '#how-we-work' },
        { label: t('nav.contact'), href: '#contact' }
      ];
    }

    if (location.pathname === '/lab') {
      return [
        { label: t('nav.labInfo'), href: '#lab-info' }
      ];
    }

    if (location.pathname === '/blog' || location.pathname.startsWith('/blog/')) {
      return [];
    }

    // Homepage navigation
    return [
      { label: t('nav.ourStory'), href: '#story' },
      { label: t('nav.ourPillars'), href: '#our-pillars' },
      { label: t('nav.joinUs'), href: '#join-us' },
      { label: t('nav.slowBar'), href: '#slow-bar' }
    ];
  };

  const getWelcomeMessage = () => {
    if (location.pathname === '/studio') return t('header.welcomeStudio');
    if (location.pathname === '/service') return t('header.welcomeService');
    if (location.pathname === '/lab') return t('header.welcomeLab');
    if (location.pathname === '/blog' || location.pathname.startsWith('/blog/')) return 'Bienvenido al Blog JOUP';
    return t('header.welcome');
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
  const shouldShowBlogButton = !location.pathname.startsWith('/blog');
  const isBlogSection = location.pathname.startsWith('/blog');

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo" onClick={scrollToTop}>{getTitle()}</div>
          {isScrolled && !isBlogSection && (
            <div className="nav-arrow">
              <FaChevronDown />
            </div>
          )}
          {isNotHomePage && (
            <button className="home-button" onClick={goToHome} aria-label={t('header.home')}>
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
          {shouldShowBlogButton && (
            <button className="blog-button" onClick={() => navigate('/blog')} aria-label={t('header.blog')}>
              {t('header.blog')}
            </button>
          )}
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
              <FaHome /> {t('header.home')}
            </a>
          )}
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeSidebar}>
              {link.label}
            </a>
          ))}
          {shouldShowBlogButton && (
            <a onClick={() => { navigate('/blog'); closeSidebar(); }} className="blog-link">
              {t('header.blog')}
            </a>
          )}
        </nav>
        <div className="sidebar-settings">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      {/* Floating Settings - Desktop only */}
      <div className={`floating-settings ${isOutOfHero ? 'out-of-hero' : ''}`}>
        <ThemeToggle />
        <LanguageToggle />
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
