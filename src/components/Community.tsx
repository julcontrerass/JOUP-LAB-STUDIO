import { motion } from 'framer-motion';
import '../styles/Community.css';

const Community = () => {
  return (
    <section id="community" className="community-section">
      <div className="community-container">
        <motion.div
          className="community-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="community-title">UNA COMUNIDAD QUE CRECE</h2>
        </motion.div>

        <motion.div
          className="community-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="community-text">
            JOUP COFFEE no es solo una marca: es una red de personas que aprendieron, crecieron y hoy construyen el futuro del café en Argentina y el mundo.
          </p>
          <p className="community-text">
            Nuestros egresados trabajan en cafeterías, hoteles, bares, proyectos internacionales, tostadurías y escuelas.
          </p>
          <p className="community-text">
            Muchos enseñan, otros lideran equipos, otros abren negocios propios o viajan representando al país en distintas etapas del café.
          </p>
          <p className="community-text highlight">
            La comunidad JOUP vive, colabora y crece.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
