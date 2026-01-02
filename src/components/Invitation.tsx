import { motion } from 'framer-motion';
import '../styles/Invitation.css';

const Invitation = () => {
  return (
    <section id="invitation" className="invitation-section">
      <div className="invitation-container">
        <motion.div
          className="invitation-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="invitation-title">UNA INVITACIÓN CONSTANTE</h2>
        </motion.div>

        <motion.div
          className="invitation-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="invitation-text">
            Estamos abiertos a nuevas colaboraciones, alianzas y desarrollos.
          </p>
          <p className="invitation-text">
            Buscamos profesionales que quieran sumar su talento, marcas que quieran construir, cafeterías que quieran mejorar, estudiantes que quieran formarse y personas que quieran crecer dentro del mundo del café.
          </p>
          <p className="invitation-text emphasis">
            JOUP COFFEE es un espacio abierto:
          </p>
          <p className="invitation-text highlight">
            para aprender, para crear, para emprender, para investigar, para compartir y para transformar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
