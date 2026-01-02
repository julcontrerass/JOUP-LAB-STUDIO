import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/JoupEssence.css';

const JoupEssence = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detectar si es dispositivo táctil
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleCardInteraction = (index: number) => {
    setFlippedCards(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const essenceData = [
    {
      key: "filosofia",
      title: "Filosofía",
      intro: "JOUP existe porque creemos que el café es cultura, identidad, oficio y oportunidad.",
      detail: "Estamos comprometidos con el crecimiento local, la trazabilidad, la transparencia y el desarrollo de un ecosistema más justo y más profesional.",
      highlight: "Hacer del café un espacio de encuentro, excelencia y propósito compartido."
    },
    {
      key: "comunidad",
      title: "Comunidad",
      intro: "Una red de personas que aprendieron, crecieron y hoy construyen el futuro del café en Argentina y el mundo.",
      detail: "Nuestros egresados trabajan en cafeterías, hoteles, bares, proyectos internacionales, tostadurías y escuelas. Muchos enseñan, lideran equipos o abren negocios propios.",
      highlight: "La comunidad JOUP vive, colabora y crece."
    },
    {
      key: "invitacion",
      title: "Invitación",
      intro: "Estamos abiertos a nuevas colaboraciones, alianzas y desarrollos.",
      detail: "Buscamos profesionales que quieran sumar su talento, marcas que quieran construir, cafeterías que quieran mejorar, estudiantes que quieran formarse y personas que quieran crecer.",
      highlight: "Un espacio abierto para aprender, crear, emprender, investigar, compartir y transformar."
    },
    {
      key: "compromiso",
      title: "Compromiso",
      intro: "Trabajamos con firmeza, con criterio y con responsabilidad.",
      detail: "Honramos nuestra historia, fortalecemos nuestra filosofía y nos comprometemos con una sola misión: elevar la experiencia del café en Argentina.",
      highlight: "El punto de encuentro entre las personas que quieren cambiar el café desde adentro."
    }
  ];

  return (
    <section id="joup-essence" className="joup-essence-section">
      <div className="joup-essence-container">
        <motion.div
          className="essence-intro-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="essence-main-title">LA ESENCIA DE JOUP</h2>
          <p className="essence-main-subtitle">
            Una filosofía, una comunidad, una invitación constante y un compromiso inquebrantable
          </p>
        </motion.div>

        <div className="essence-mosaic">
          {essenceData.map((item, index) => (
            <motion.div
              key={item.key}
              className={`essence-tile essence-tile-${index + 1} ${flippedCards.includes(index) ? 'flipped' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={isTouchDevice ? () => handleCardInteraction(index) : undefined}
              onMouseEnter={!isTouchDevice ? () => handleCardInteraction(index) : undefined}
            >
              <div className="tile-inner">
                <div className="tile-front">
                  <h3 className="tile-title">{item.title}</h3>
                  <p className="tile-intro">{item.intro}</p>
                  <span className="tile-expand-hint">→</span>
                </div>

                <div className="tile-back">
                  <p className="tile-detail">{item.detail}</p>
                  <div className="tile-highlight">
                    <p>{item.highlight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoupEssence;
