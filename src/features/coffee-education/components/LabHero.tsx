import { useScrollAnimation } from '@/shared/hooks';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/lab-hero.css';

const HeroLab = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useTranslation();

  return (
    <section className="hero-lab">
      <div
        ref={elementRef}
        className={`hero-lab-content scroll-animation fade-in-up ${isVisible ? 'animate' : ''}`}
      >
        <h1>{t('lab.title')}</h1>
        <p>{t('lab.subtitle')}</p>

        <motion.a
          href="#lab-content"
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

export default HeroLab;
