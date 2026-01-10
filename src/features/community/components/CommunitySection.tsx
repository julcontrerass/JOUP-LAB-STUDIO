import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/community.css';

const Community = () => {
  const { t } = useTranslation();

  return (
    <section id="community" className="community-section">
      <div className="community-container">
        <motion.div
          className="community-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="community-title">{t('communitySection.title')}</h2>
        </motion.div>

        <motion.div
          className="community-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="community-text">
            {t('communitySection.text1')}
          </p>
          <p className="community-text">
            {t('communitySection.text2')}
          </p>
          <p className="community-text">
            {t('communitySection.text3')}
          </p>
          <p className="community-text highlight">
            {t('communitySection.highlight')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
