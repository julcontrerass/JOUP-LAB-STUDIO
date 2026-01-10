import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/essence.css';

const JoupEssence = () => {
  const { t } = useTranslation();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detectar si es dispositivo táctil
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleCardInteraction = (index: number) => {
    setFlippedCards(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const essenceData = [
    {
      key: "filosofia",
      title: t('essence.philosophy.title'),
      intro: t('essence.philosophy.intro'),
      detail: t('essence.philosophy.detail'),
      highlight: t('essence.philosophy.highlight')
    },
    {
      key: "comunidad",
      title: t('essence.community.title'),
      intro: t('essence.community.intro'),
      detail: t('essence.community.detail'),
      highlight: t('essence.community.highlight')
    },
    {
      key: "invitacion",
      title: t('essence.invitation.title'),
      intro: t('essence.invitation.intro'),
      detail: t('essence.invitation.detail'),
      highlight: t('essence.invitation.highlight')
    },
    {
      key: "compromiso",
      title: t('essence.commitment.title'),
      intro: t('essence.commitment.intro'),
      detail: t('essence.commitment.detail'),
      highlight: t('essence.commitment.highlight')
    }
  ];

  return (
    <section id="joup-essence" className="joup-essence-section">
      <div className="joup-essence-container">
        <motion.div
          className="essence-intro-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="essence-main-title">{t('essence.title')}</h2>
          <p className="essence-main-subtitle">
            {t('essence.subtitle')}
          </p>
        </motion.div>

        <div className="essence-mosaic">
          {essenceData.map((item, index) => (
            <motion.div
              key={item.key}
              className={`essence-tile essence-tile-${index + 1} ${flippedCards.includes(index) ? 'flipped' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={isTouchDevice ? () => handleCardInteraction(index) : undefined}
              onMouseEnter={!isTouchDevice ? () => handleCardInteraction(index) : undefined}
            >
              <div className="tile-inner">
                <div className="tile-front">
                  <h3 className="tile-title">{item.title}</h3>
                  <p className="tile-intro">{item.intro}</p>
                  <span className="tile-expand-hint">{t('essence.expandHint')}</span>
                </div>

                <div className="tile-back">
                  <p className="tile-detail">{item.detail}</p>
                  <div className="tile-highlight">
                    <p>{item.highlight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoupEssence;
