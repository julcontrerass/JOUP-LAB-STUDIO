import { motion } from 'framer-motion';
import '../styles/QualityCommitment.css';

const QualityCommitment = () => {
  return (
    <section id="quality-commitment" className="quality-commitment-section">
      <div className="quality-commitment-container">
        <motion.div
          className="quality-commitment-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="quality-commitment-title">COMPROMISO CON LA CALIDAD, LA EDUCACIÓN Y EL FUTURO</h2>
        </motion.div>

        <motion.div
          className="quality-commitment-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="quality-commitment-text">
            Trabajamos con firmeza, con criterio y con responsabilidad.
          </p>
          <p className="quality-commitment-text">
            Honramos nuestra historia, fortalecemos nuestra filosofía y nos comprometemos con una sola misión:
          </p>
          <p className="quality-commitment-text emphasis">
            elevar la experiencia del café en Argentina.
          </p>
          <p className="quality-commitment-text">
            JOUP COFFEE es la unión entre conocimiento, técnica, comunidad y visión.
          </p>
          <p className="quality-commitment-text">
            Somos educación, laboratorio y desarrollo profesional.
          </p>
          <p className="quality-commitment-text highlight">
            Somos el punto de encuentro entre las personas que quieren cambiar el café desde adentro.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityCommitment;
