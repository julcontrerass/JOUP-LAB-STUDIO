import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import educacionImage from '../assets/images/pedagogy-course.png';
import '../styles/academy-info.css';

const StudioInfo = () => {
  const { t } = useTranslation();

  const features = [
    {
      label: t('academyInfo.features.advanced.label'),
      description: t('academyInfo.features.advanced.description')
    },
    {
      label: t('academyInfo.features.oneOnOne.label'),
      description: t('academyInfo.features.oneOnOne.description')
    },
    {
      label: t('academyInfo.features.pedagogy.label'),
      description: t('academyInfo.features.pedagogy.description')
    }
  ];

  return (
    <section id="studio-info" className="studio-info-section">
      <div className="studio-info-container">
        <div className="studio-info-grid">
          {/* Columna izquierda - Contenido */}
          <motion.div
            className="studio-info-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="studio-info-title">{t('academyInfo.title')}</h2>
            <p className="studio-info-subtitle">{t('academyInfo.subtitle')}</p>

            <div className="studio-features-list">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="studio-feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="feature-content">
                    <h3 className="feature-label">{feature.label}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="studio-mission-compact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="mission-title-compact">{t('academyInfo.mission.title')}</p>
              <p className="mission-text-compact">
                {t('academyInfo.mission.text')}
              </p>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Imagen */}
          <motion.div
            className="studio-info-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="studio-image-container">
              <img src={educacionImage} alt="Educación JOUP Studio" className="studio-image" />
              <div className="image-overlay-gradient"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioInfo;
