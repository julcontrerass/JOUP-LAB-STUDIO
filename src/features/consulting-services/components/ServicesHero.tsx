import { useScrollAnimation } from '@/shared/hooks';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/services-hero.css';

const HeroService = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useTranslation();

  return (
    <section className="hero-service">
      <div
        ref={elementRef}
        className={`hero-service-content scroll-animation fade-in-up ${isVisible ? 'animate' : ''}`}
      >
        <h1>{t('services.heroTitle')}</h1>
        <p>{t('services.heroSubtitle')}</p>

        <motion.a
          href="#service-info"
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

export default HeroService;
