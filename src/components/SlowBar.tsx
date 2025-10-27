import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/SlowBar.css';

const SlowBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryImages = [
    "Filtrado.png",
    "imgi_12_550410627_18373733740195994_7284280922494528246_n.jpg",
    "WhatsApp Image 2025-10-26 at 00.24.47.jpeg",
    "WhatsApp Image 2025-10-26 at 00.22.51 (1).jpeg",
    "WhatsApp Image 2025-10-26 at 00.24.42.jpeg",
    "WhatsApp Image 2025-10-26 at 00.22.51 (2).jpeg"
  ];

  return (
    <section id="slow-bar" className="slow-bar-section">
      <div className="slow-bar-container">
        <motion.div
          className="slow-bar-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="slow-bar-text">
            <h2 className="slow-bar-title">SLOW BAR</h2>
            <div className="slow-bar-info">
              <p className="slow-bar-schedule">
                Todos los lunes de <span className="highlight">11:00 a 20:00 hs</span>
              </p>
              <p className="slow-bar-location">
                Socio Café - Arce 415, Cañitas, Buenos Aires
              </p>
            </div>

            <div className="slow-bar-description">
              <p>
                Un espacio donde el café filtrado se vuelve protagonista y la experiencia sensorial cobra vida.
                Cada lunes elegimos distintos orígenes, métodos y perfiles de tostadores invitados para ofrecer una degustación guiada por nuestros baristas.
              </p>

              <div className="slow-bar-concept">
                <p className="concept-title">La Slow Bar no es una barra de paso:</p>
                <p>
                  es una invitación a bajar la velocidad, a escuchar el silencio entre los aromas, a redescubrir el café como un acto de presencia.
                </p>
                <p>
                  Podés venir solo, con amigos o con tu equipo; podés aprender, observar o simplemente disfrutar una buena conversación.
                </p>
              </div>

              <p className="slow-bar-mission">
                Lo que buscamos no es servir café, sino crear momentos que te reconecten con el sentido de tomarlo.
              </p>
            </div>
          </div>

          <div className="slow-bar-gallery">
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="gallery-item"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    scale: 1.02,
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={`/src/assets/Usar/${image}`}
                    alt={`Slow Bar ${index + 1}`}
                    className="gallery-image"
                  />
                  <div className={`gallery-overlay ${hoveredIndex === index ? 'visible' : ''}`}>
                    <span className="gallery-overlay-text">SLOW BAR</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SlowBar;
