import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
            <h2 className="story-title">JOUP COFFEE STUDIO</h2>
            <p className="story-subtitle">Educamos el paladar que define la industria</p>
          </motion.div>

          <motion.div
            className="story-text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="story-text">
              Joup Coffee Studio nació de una pregunta:<br />
              <span className="highlight">¿qué pasaría si nos tomáramos el café tan en serio como la vida misma?</span>
            </p>
            <p className="story-text">
              Si en lugar de correr, lo escucháramos. Si en vez de repetir métodos, los entendiéramos.
              Si la pasión por el café se convirtiera en una forma de pensar, crear y enseñar.
            </p>
          </motion.div>

          <motion.div
            className="story-text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="story-text emphasis">
              Hoy, esa pregunta se transformó en un movimiento.
            </p>
            <p className="story-text">
              Somos un estudio, una escuela, un laboratorio sensorial y un punto de encuentro entre quienes buscan elevar su oficio sin perder su esencia.
              Desde Buenos Aires, trabajamos para formar una nueva generación de profesionales, educadores y amantes del café de especialidad que entienden que detrás de cada taza hay una historia, un principio y una posibilidad.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="story-parallax-image"
          style={{ y }}
        >
          <div className="image-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
