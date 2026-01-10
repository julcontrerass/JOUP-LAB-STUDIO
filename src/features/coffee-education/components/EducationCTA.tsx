import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/education-cta.css';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="education-title">{t('education.title')}</h2>
          <p className="education-intro">
            {t('education.intro')}
          </p>
          <p className="education-subtitle">
            {t('education.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="view-documents-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/educacion" className="view-documents-btn">
            <FaBook />
            <span>{t('education.viewDocuments')}</span>
          </Link>
        </motion.div>

        <motion.div
          className="education-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="cta-text">
            {t('education.ctaText')}
          </p>
          <Link to="/#join-us" className="join-us-link-btn">
            {t('education.ctaButton')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
