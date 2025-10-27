import { motion } from 'framer-motion';
import '../styles/HowWeWork.css';

const HowWeWork = () => {
  const dimensions = [
    {
      number: "01",
      title: "Educación",
      description: "Formamos profesionales capaces de pensar el café, no solo de prepararlo.",
      details: "Ofrecemos capacitaciones técnicas, workshops, programas de desarrollo sensorial y cursos diseñados para distintos niveles, siempre con un enfoque humano y crítico.",
      image: "WhatsApp Image 2025-10-26 at 00.18.45 (3).jpeg"
    },
    {
      number: "02",
      title: "Consultoría",
      description: "Asesoramos a cafeterías, marcas y tostadores en la creación de propuestas coherentes.",
      details: "Desde la selección de café y el diseño de carta hasta la calibración de equipos, capacitación de personal y filosofía de servicio.",
      image: "WhatsApp Image 2025-10-26 at 00.18.45.jpeg"
    },
    {
      number: "03",
      title: "Curaduría y Evaluación Sensorial",
      description: "Trabajamos con protocolos de la SCA y herramientas de análisis sensorial.",
      details: "Nuestra mirada combina el rigor técnico con la intuición estética: lo que medimos, lo sentimos. Cada perfil de taza es una historia traducida al lenguaje del sabor.",
      image: "imgi_11_552108243_18374314876195994_3599689657190091291_n.jpg"
    }
  ];

  return (
    <section id="how-we-work" className="how-we-work-section">
      <div className="how-we-work-container">
        <motion.div
          className="how-we-work-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="how-we-work-title">CÓMO TRABAJAMOS</h2>
          <p className="how-we-work-intro">
            No creemos en fórmulas universales. Creemos en los procesos que respetan la identidad de cada persona, equipo o proyecto.
          </p>
          <p className="how-we-work-intro">
            Por eso, cada colaboración que asumimos comienza con una escucha atenta y una lectura del contexto.
            A partir de ahí, diseñamos experiencias formativas, asesorías o desarrollos sensoriales que integran ciencia, oficio y sensibilidad.
          </p>
          <p className="how-we-work-subtitle">Nuestro trabajo combina tres dimensiones:</p>
        </motion.div>

        <div className="dimensions-list">
          {dimensions.map((dimension, index) => (
            <motion.div
              key={index}
              className="dimension-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="dimension-content">
                <div className="dimension-header">
                  <span className="dimension-number">{dimension.number}</span>
                  <h3 className="dimension-title">{dimension.title}</h3>
                </div>
                <p className="dimension-description">{dimension.description}</p>
                <p className="dimension-details">{dimension.details}</p>
              </div>

              <div className="dimension-image-container">
                <img
                  src={`/src/assets/${dimension.image}`}
                  alt={dimension.title}
                  className={`dimension-image ${dimension.number === '02' ? 'zoom-out' : ''}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
