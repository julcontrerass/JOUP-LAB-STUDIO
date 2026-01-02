import { motion } from 'framer-motion';
import '../styles/ServiceInfo.css';

const ServiceInfo = () => {
  return (
    <section id="service-info" className="service-info-section">
      <div className="service-info-container">
        <motion.div
          className="service-info-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="service-info-title">SOLUCIONES INTEGRALES</h2>
          <p className="service-info-subtitle">Para proyectos con café especial</p>
        </motion.div>

        <motion.div
          className="service-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="service-text">
            Acompañamos aperturas, optimizamos operaciones, diseñamos espacios, estandarizamos procesos y construimos marcas con identidad, estética y presencia digital.
          </p>
          <p className="service-text">
            Ayudamos a emprendedores, equipos y negocios consolidados a crecer con criterio, orden y profesionalismo.
          </p>
          <p className="service-text-highlight">
            Desde consultoría técnica hasta diseño web (by TukiCode), branding, fotografía gastronómica, filmmaking y dirección de proyectos: JOUP SERVICE integra todas las áreas necesarias para que un negocio de café funcione con calidad y coherencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceInfo;
