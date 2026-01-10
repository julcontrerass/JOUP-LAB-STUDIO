import { useScrollAnimation } from '@/shared/hooks';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/studio-hero.css';

const StudioHero = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useTranslation();

  return (
    <section className="hero-studio">
      <div
        ref={elementRef}
        className={`hero-studio-content scroll-animation fade-in-up ${isVisible ? 'animate' : ''}`}
      >
        <h1>{t('studio.title')}</h1>
        <p>{t('studio.subtitle')}</p>

        <motion.a
          href="#studio-info"
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

export default StudioHero;
