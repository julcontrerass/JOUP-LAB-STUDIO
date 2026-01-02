import { motion } from 'framer-motion';
import '../styles/Philosophy.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="philosophy-container">
        <motion.div
          className="philosophy-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="philosophy-title">UNA FILOSOFÍA CLARA</h2>
        </motion.div>

        <motion.div
          className="philosophy-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="philosophy-text">
            JOUP existe porque creemos que el café es cultura, identidad, oficio y oportunidad.
          </p>
          <p className="philosophy-text">
            Porque estamos comprometidos con el crecimiento local, la trazabilidad, la transparencia y el desarrollo de un ecosistema más justo y más profesional.
          </p>
          <p className="philosophy-text">
            Creemos en la formación como motor, en la comunidad como red, en la técnica como fundamento y en la colaboración como camino.
          </p>
          <p className="philosophy-text emphasis">
            Por eso trabajamos junto a cafeterías, empresas, instituciones, profesionales y colaboradores que comparten una visión:
          </p>
          <p className="philosophy-text highlight">
            hacer del café un espacio de encuentro, excelencia y propósito compartido.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
