import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div
        ref={elementRef}
        className={`hero-content scroll-animation fade-in-up ${isVisible ? 'animate' : ''}`}
      >
        <h1>JOUP LAB & STUDIO</h1>
        <p>Educación, asesoría y excelencia en café de especialidad <br/> Cursos • Consultoría • Catas.</p>

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
            LAB
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
            STUDIO
          </motion.button>
        </div>

        <motion.a
          href="#join-us"
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
