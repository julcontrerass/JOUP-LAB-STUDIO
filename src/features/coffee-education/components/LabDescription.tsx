import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/lab-description.css';

const LabInfo = () => {
  const { t } = useTranslation();

  return (
    <section id="lab-info" className="lab-info-section">
      <div className="lab-info-container">
        <motion.div
          className="lab-info-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="lab-info-title">{t('labInfo.title')}</h2>
        </motion.div>

        <motion.div
          className="lab-info-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="lab-info-text">
            {t('labInfo.text1')}
          </p>
          <p className="lab-info-text">
            {t('labInfo.text2')}
          </p>

          <div className="lab-development-notice">
            <p className="development-text">{t('labInfo.developmentNotice')}</p>
            <p className="development-subtext">{t('labInfo.developmentSubtext')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LabInfo;
