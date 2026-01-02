import { motion } from 'framer-motion';
import '../styles/LabInfo.css';

const LabInfo = () => {
  return (
    <section id="lab-info" className="lab-info-section">
      <div className="lab-info-container">
        <motion.div
          className="lab-info-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="lab-info-title">EL LABORATORIO SENSORIAL DONDE ESTUDIAMOS, ANALIZAMOS Y VIVIMOS EL CAFÉ</h2>
        </motion.div>

        <motion.div
          className="lab-info-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="lab-info-text">
            Catas técnicas, evaluaciones de calidad, experimentación, análisis de café verde y tostado, sesiones de extracción y experiencias inmersivas.
          </p>
          <p className="lab-info-text">
            JOUP LAB es la base científica de la marca, donde entrenamos paladares, exploramos procesos, probamos metodologías y creamos espacios para que la comunidad descubra el café de una manera más profunda, precisa y significativa.
          </p>

          <div className="lab-development-notice">
            <p className="development-text">🚧 Módulo en desarrollo 🚧</p>
            <p className="development-subtext">Próximamente estará disponible todo el contenido de JOUP LAB</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LabInfo;
