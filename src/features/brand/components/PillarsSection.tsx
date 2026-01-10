import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import claseImage from '../assets/images/classroom.png';
import consultoriaImage from '../assets/images/consulting.png';
import '../styles/pillars.css';

const OurPillars = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      number: t('pillars.lab.number'),
      title: t('pillars.lab.title'),
      description: t('pillars.lab.description'),
      details: t('pillars.lab.details'),
      image: claseImage
    },
    {
      number: t('pillars.studio.number'),
      title: t('pillars.studio.title'),
      description: t('pillars.studio.description'),
      details: t('pillars.studio.details'),
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
          <h2 className="our-pillars-title">{t('pillars.title')}</h2>
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
