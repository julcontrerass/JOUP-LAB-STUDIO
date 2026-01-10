import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/quality-commitment.css';

const QualityCommitment = () => {
  const { t } = useTranslation();

  return (
    <section id="quality-commitment" className="quality-commitment-section">
      <div className="quality-commitment-container">
        <motion.div
          className="quality-commitment-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="quality-commitment-title">{t('qualityCommitment.title')}</h2>
        </motion.div>

        <motion.div
          className="quality-commitment-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="quality-commitment-text">
            {t('qualityCommitment.text1')}
          </p>
          <p className="quality-commitment-text">
            {t('qualityCommitment.text2')}
          </p>
          <p className="quality-commitment-text emphasis">
            {t('qualityCommitment.text3')}
          </p>
          <p className="quality-commitment-text">
            {t('qualityCommitment.text4')}
          </p>
          <p className="quality-commitment-text">
            {t('qualityCommitment.text5')}
          </p>
          <p className="quality-commitment-text highlight">
            {t('qualityCommitment.text6')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityCommitment;
