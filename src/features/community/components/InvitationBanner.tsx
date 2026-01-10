import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/invitation.css';

const Invitation = () => {
  const { t } = useTranslation();

  return (
    <section id="invitation" className="invitation-section">
      <div className="invitation-container">
        <motion.div
          className="invitation-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="invitation-title">{t('invitationBanner.title')}</h2>
        </motion.div>

        <motion.div
          className="invitation-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="invitation-text">
            {t('invitationBanner.text1')}
          </p>
          <p className="invitation-text">
            {t('invitationBanner.text2')}
          </p>
          <p className="invitation-text emphasis">
            {t('invitationBanner.emphasis')}
          </p>
          <p className="invitation-text highlight">
            {t('invitationBanner.highlight')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
