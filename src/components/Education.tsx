import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Education.css';

const Education = () => {

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="education-title">EDUCACIÓN GRATUITA</h2>
          <p className="education-intro">
            Creemos que el conocimiento debe ser accesible para todos. Por eso compartimos recursos
            educativos gratuitos sobre café de especialidad, técnicas de preparación y mucho más.
          </p>
          <p className="education-subtitle">
            Descargá nuestros materiales y comenzá tu camino en el mundo del café.
          </p>
        </motion.div>

        <motion.div
          className="view-documents-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/educacion" className="view-documents-btn">
            <FaBook />
            <span>Ver Documentos</span>
          </Link>
        </motion.div>

        <motion.div
          className="education-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="cta-text">
            ¿Querés más recursos? Seguinos en nuestras redes para acceder a contenido exclusivo
            y mantenerte actualizado con nuevas publicaciones.
          </p>
          <a href="#join-us" className="join-us-link-btn">
            Sumate a JOUP
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
