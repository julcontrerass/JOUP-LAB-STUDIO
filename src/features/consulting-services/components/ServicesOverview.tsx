import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaUsers } from 'react-icons/fa';
import '../styles/services-overview.css';

// Placeholder image - reemplazar con imagen real
import placeholderImg from '../../../shared/assets/logo/joup-lab-logo.png';

const ServiceInfo = () => {
  const { t } = useTranslation();

  return (
    <section id="service-info" className="service-info-section">
      <div className="service-info-container">
        {/* Header */}
        <motion.div
          className="service-info-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="service-info-title">{t('services.overviewTitle')}</h2>
          <p className="service-info-subtitle">{t('services.overviewSubtitle')}</p>
        </motion.div>

        {/* Main Layout - Simple Grid */}
        <div className="service-layout-grid">
          {/* Text Content - Left Column */}
          <motion.div
            className="service-content-column"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Vision Section */}
            <div className="text-section">
              <h3 className="section-title">{t('services.visionTitle')}</h3>
              <p className="section-text">{t('services.visionText')}</p>
            </div>

            {/* Description Section */}
            <div className="text-section">
              <h3 className="section-title">Qué Hacemos</h3>
              <p className="section-text">{t('services.descriptionMain')}</p>
            </div>
          </motion.div>

          {/* Image Section - Right */}
          <motion.div
            className="service-image-block"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={placeholderImg} alt="JOUP Studio" className="service-image" />
          </motion.div>
        </div>

        {/* Bottom Approach Section - Full Width */}
        <motion.div
          className="approach-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="approach-content">
            <div className="approach-icon-banner">
              <FaUsers />
            </div>
            <div className="approach-text-wrapper">
              <h3 className="approach-banner-title">{t('services.approachTitle')}</h3>
              <p className="approach-banner-text">{t('services.approachText')}</p>
              <p className="approach-banner-highlight">{t('services.approachHighlight')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceInfo;
