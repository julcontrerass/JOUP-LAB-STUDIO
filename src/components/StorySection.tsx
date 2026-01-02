import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import storyImage from '../assets/WhatsApp Image 2025-10-26 at 00.21.10.png';
import '../styles/StorySection.css';

const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="story" className="story-section" ref={containerRef}>
      <div className="story-container">
        <motion.div
          className="story-content"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="story-title">JOUP COFFEE</h2>
            <p className="story-subtitle">Un ecosistema</p>
          </motion.div>

          <motion.div
            className="story-text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="story-text">
              Un espacio donde la educación, la técnica y el desarrollo de negocios se encuentran para transformar la manera en que Argentina vive el café.
            </p>
            <p className="story-text">
              Formamos a <span className="highlight">más de 4.000 profesionales</span>, entre baristas, instructores, tostadores, dueños de cafetería y apasionados que hoy trabajan detrás de barra, en proyectos gastronómicos, en tostadurías o enseñando en distintas partes del mundo.
            </p>
          </motion.div>

          <motion.div
            className="story-text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="story-text">
              Somos una comunidad en crecimiento constante, unida por una misma idea: elevar la cultura del café desde la formación, la calidad y la colaboración.
            </p>
            <p className="story-text">
              JOUP COFFEE nació como una comunidad-Escuela, creció como un laboratorio y hoy funciona como una plataforma integral que impulsa a personas, negocios y proyectos.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="story-parallax-image"
          style={{
            y,
            backgroundImage: `url(${storyImage})`
          }}
        >
          <div className="image-overlay"></div>
        </motion.div>
      </div>

      <motion.div
        className="story-arrow-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="story-arrow-text">
          Nuestra identidad se sostiene en tres pilares que dan forma a todo lo que hacemos:
        </p>
        <motion.div
          className="story-scroll-arrow"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StorySection;
