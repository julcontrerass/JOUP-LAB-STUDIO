import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './HeroService.css';

const HeroService = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="hero-service">
      <div
        ref={elementRef}
        className={`hero-service-content scroll-animation fade-in-up ${isVisible ? 'animate' : ''}`}
      >
        <h1>JOUP STUDIO</h1>
        <p>Soluciones integrales para proyectos con café especial</p>

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
