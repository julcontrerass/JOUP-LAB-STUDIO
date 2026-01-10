import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/commitment.css';

const Commitment = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const values = [
    {
      icon: t('commitment.traceability.icon'),
      title: t('commitment.traceability.title'),
      description: t('commitment.traceability.description')
    },
    {
      icon: t('commitment.localDevelopment.icon'),
      title: t('commitment.localDevelopment.title'),
      description: t('commitment.localDevelopment.description')
    },
    {
      icon: t('commitment.ethicsSustainability.icon'),
      title: t('commitment.ethicsSustainability.title'),
      description: t('commitment.ethicsSustainability.description')
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
            <h2 className="commitment-title">{t('commitment.title')}</h2>
            <p className="commitment-intro">
              {t('commitment.intro')}
            </p>
            <p className="commitment-subtitle">
              {t('commitment.subtitle')}
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
              {t('commitment.promise')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Commitment;
