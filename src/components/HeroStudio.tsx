import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './HeroStudio.css';

const HeroStudio = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="hero-studio">
      <div
        ref={elementRef}
        className={`hero-studio-content scroll-animation fade-in-up ${isVisible ? 'animate' : ''}`}
      >
        <h1>JOUP STUDIO</h1>
        <p>Educación, asesoría y excelencia en café de especialidad</p>

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

export default HeroStudio;
