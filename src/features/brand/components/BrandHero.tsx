import { useScrollAnimation } from '@/shared/hooks';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/brand-hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div
        ref={elementRef}
        className={`hero-content scroll-animation fade-in-up ${isVisible ? 'animate' : ''}`}
      >
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')} <br/> {t('hero.subtext')}</p>

        <div className="hero-buttons">
          <motion.button
            onClick={() => navigate('/studio')}
            className="hero-btn lab-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.labButton')}
          </motion.button>

          <motion.button
            onClick={() => navigate('/service')}
            className="hero-btn studio-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.studioButton')}
          </motion.button>

          <motion.button
            onClick={() => navigate('/blog')}
            className="hero-btn blog-btn mobile-only-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('header.blog')}
          </motion.button>
        </div>

        <motion.a
          href="#story"
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
