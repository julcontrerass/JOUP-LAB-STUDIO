import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import filtrado from '../assets/images/slow-bar/main-filtrado.png';
import slowbar1 from '../assets/images/slow-bar/gallery-1.png';
import slowbar2 from '../assets/images/slow-bar/gallery-2.png';
import slowbar3 from '../assets/images/slow-bar/gallery-3.png';
import slowbar4 from '../assets/images/slow-bar/gallery-4.png';
import slowbar5 from '../assets/images/slow-bar/gallery-5.png';
import '../styles/slow-bar.css';

const SlowBar = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryImages = [
    filtrado,
    slowbar1,
    slowbar2,
    slowbar3,
    slowbar4,
    slowbar5
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
            <h2 className="slow-bar-title">{t('slowBar.title')}</h2>
            <div className="slow-bar-info">
              <p className="slow-bar-schedule">
                {t('slowBar.schedule')}<span className="highlight">{t('slowBar.scheduleHighlight')}</span>
              </p>
              <p className="slow-bar-location">
                {t('slowBar.location')}
              </p>
            </div>

            <div className="slow-bar-description">
              <p>
                {t('slowBar.description1')}
              </p>

              <div className="slow-bar-concept">
                <p className="concept-title">{t('slowBar.conceptTitle')}</p>
                <p>
                  {t('slowBar.concept1')}
                </p>
                <p>
                  {t('slowBar.concept2')}
                </p>
              </div>

              <p className="slow-bar-mission">
                {t('slowBar.mission')}
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
                    src={image}
                    alt={`${t('slowBar.imageAlt')} ${index + 1}`}
                    className="gallery-image"
                  />
                  <div className={`gallery-overlay ${hoveredIndex === index ? 'visible' : ''}`}>
                    <span className="gallery-overlay-text">{t('slowBar.title')}</span>
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
