import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/philosophy.css';

const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <section id="philosophy" className="philosophy-section">
      <div className="philosophy-container">
        <motion.div
          className="philosophy-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="philosophy-title">{t('philosophy.title')}</h2>
        </motion.div>

        <motion.div
          className="philosophy-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="philosophy-text">
            {t('philosophy.text1')}
          </p>
          <p className="philosophy-text">
            {t('philosophy.text2')}
          </p>
          <p className="philosophy-text">
            {t('philosophy.text3')}
          </p>
          <p className="philosophy-text emphasis">
            {t('philosophy.text4')}
          </p>
          <p className="philosophy-text highlight">
            {t('philosophy.text5')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
