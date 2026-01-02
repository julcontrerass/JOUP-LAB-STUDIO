import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './HeroLab.css';

const HeroLab = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="hero-lab">
      <div
        ref={elementRef}
        className={`hero-lab-content scroll-animation fade-in-up ${isVisible ? 'animate' : ''}`}
      >
        <h1>JOUP LAB</h1>
        <p>Experimentación, investigación y desarrollo en café de especialidad</p>

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
