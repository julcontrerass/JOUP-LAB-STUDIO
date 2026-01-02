import { motion } from 'framer-motion';
import claseImage from '../assets/Clase.png';
import consultoriaImage from '../assets/consultoria.png';
import '../styles/OurPillars.css';

const OurPillars = () => {
  const pillars = [
    {
      number: "01",
      title: "JOUP LAB",
      description: "La academia donde formamos a la nueva generación de profesionales del café, donde estudiamos, analizamos y vivimos el café..",
      details: "Creamos cursos intermedios y avanzados, programas ONE & ONE, capacitaciones internas y una propuesta educativa que combina claridad técnica, sensorialidad profunda y una pedagogía única. Enseñamos para transformar. Para que más personas tengan acceso a formación real, moderna y exigente. Para que el conocimiento eleve al oficio.",
      image: claseImage
    },
    // {
    //   number: "02",
    //   title: "JOUP LAB",
    //   description: "El laboratorio sensorial donde estudiamos, analizamos y vivimos el café.",
    //   details: "Catas técnicas, evaluaciones de calidad, experimentación, análisis de café verde y tostado, sesiones de extracción y experiencias inmersivas. JOUP LAB es la base científica de la marca, donde entrenamos paladares, exploramos procesos, probamos metodologías y creamos espacios para que la comunidad descubra el café de una manera más profunda, precisa y significativa.",
    //   image: labImage
    // },
    {
      number: "02",
      title: "JOUP STUDIO",
      description: "Soluciones integrales para proyectos con café especial.",
      details: "Acompañamos aperturas, optimizamos operaciones, diseñamos espacios, estandarizamos procesos y construimos marcas con identidad, estética y presencia digital. Ayudamos a emprendedores, equipos y negocios consolidados a crecer con criterio, orden y profesionalismo. Desde consultoría técnica hasta diseño web, branding, fotografía gastronómica, filmmaking y dirección de proyectos: JOUP STUDIO integra todas las áreas necesarias para que un negocio de café funcione con calidad y coherencia.",
      image: consultoriaImage
    }
  ];

  return (
    <section id="our-pillars" className="our-pillars-section">
      <div className="our-pillars-container">
        <motion.div
          className="our-pillars-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="our-pillars-title">NUESTROS PILARES</h2>
        </motion.div>

        <div className="pillars-list">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="pillar-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="pillar-content">
                <div className="pillar-header">
                  <span className="pillar-number">{pillar.number}</span>
                  <h3 className="pillar-title">{pillar.title}</h3>
                </div>
                <p className="pillar-description">{pillar.description}</p>
                <p className="pillar-details">{pillar.details}</p>
              </div>

              <div className="pillar-image-container">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className={`pillar-image ${pillar.number === '02' ? 'zoom-out' : ''}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPillars;
