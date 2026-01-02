import { motion } from 'framer-motion';
import educacionImage from '../assets/educacion.png';
import '../styles/StudioInfo.css';

const StudioInfo = () => {
  const features = [
    {
      label: "Cursos Avanzados",
      description: "Programas intermedios y avanzados"
    },
    {
      label: "ONE & ONE",
      description: "Capacitaciones personalizadas"
    },
    {
      label: "Pedagogía Única",
      description: "Técnica + sensorialidad"
    }
  ];

  return (
    <section id="studio-info" className="studio-info-section">
      <div className="studio-info-container">
        <div className="studio-info-grid">
          {/* Columna izquierda - Contenido */}
          <motion.div
            className="studio-info-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="studio-info-title">JOUP STUDIO</h2>
            <p className="studio-info-subtitle">La academia donde formamos a la nueva generación de profesionales del café.</p>

            <div className="studio-features-list">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="studio-feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="feature-content">
                    <h3 className="feature-label">{feature.label}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="studio-mission-compact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="mission-title-compact">Enseñamos para transformar.</p>
              <p className="mission-text-compact">
                Para que el conocimiento eleve al oficio.
              </p>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Imagen */}
          <motion.div
            className="studio-info-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="studio-image-container">
              <img src={educacionImage} alt="Educación JOUP Studio" className="studio-image" />
              <div className="image-overlay-gradient"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioInfo;
