import { motion } from 'framer-motion';
import '../styles/Philosophy.css';

const Philosophy = () => {
  const principles = [
    {
      title: "Educamos con propósito",
      description: "Cada clase, cata o experiencia es una oportunidad para ampliar la sensibilidad y el criterio profesional."
    },
    {
      title: "Honramos la trazabilidad",
      description: "Valoramos la historia que hay detrás de cada grano y el trabajo humano que lo hace posible."
    },
    {
      title: "Buscamos coherencia",
      description: "Entre lo que decimos, lo que hacemos y lo que servimos."
    },
    {
      title: "Promovemos comunidad",
      description: "Porque el conocimiento crece cuando se comparte, no cuando se guarda."
    },
    {
      title: "Celebramos la lentitud",
      description: "En un mundo que corre, elegimos la pausa. La observación. La precisión. La escucha."
    }
  ];

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
          <h2 className="philosophy-title">FILOSOFÍA</h2>
          <p className="philosophy-intro">
            En Joup creemos que el café de especialidad no se trata de moda, sino de conciencia.
            De entender lo que hay detrás de cada aroma, de cada decisión, de cada persona.
          </p>
          <p className="philosophy-intro-subtitle">Por eso trabajamos desde una filosofía clara:</p>
        </motion.div>

        <div className="principles-list">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="principle-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="principle-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="principle-content">
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-description">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
