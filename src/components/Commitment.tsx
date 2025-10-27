import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import '../styles/Commitment.css';

const Commitment = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const values = [
    {
      icon: "🌱",
      title: "Trazabilidad",
      description: "Trabajamos con cafés de origen trazable, respetando al productor y acompañando procesos de mejora continua."
    },
    {
      icon: "🤝",
      title: "Desarrollo Local",
      description: "Nos involucramos con el desarrollo del talento local y promovemos un café argentino que se piense a sí mismo desde la excelencia."
    },
    {
      icon: "💚",
      title: "Ética y Sostenibilidad",
      description: "Nuestro compromiso va más allá de lo técnico: abarca la ética, la sostenibilidad y el impacto que dejamos en la comunidad."
    }
  ];

  return (
    <section id="commitment" className="commitment-section" ref={containerRef}>
      <div className="commitment-container">
        <motion.div
          className="commitment-content"
          style={{ scale, opacity }}
        >
          <motion.div
            className="commitment-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="commitment-title">COMPROMISO</h2>
            <p className="commitment-intro">
              Creemos que la calidad no se mide solo en taza, sino en intención.
            </p>
            <p className="commitment-subtitle">
              Por eso nuestro compromiso va más allá de lo técnico: abarca la ética, la sostenibilidad y el impacto que dejamos en la comunidad.
            </p>
          </motion.div>

          <div className="values-container">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="commitment-promise"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <p className="promise-text">
              Nuestra promesa es simple: hacer las cosas bien, con respeto, con propósito.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Commitment;
