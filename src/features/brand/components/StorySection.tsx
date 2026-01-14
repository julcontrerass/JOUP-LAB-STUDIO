import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import storyImage from '../assets/images/whatsapp-image.png';
import '../styles/story.css';

const StorySection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="story" className="story-section" ref={containerRef}>
      <div className="story-container">
        <motion.div
          className="story-content"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="story-title">{t('story.title')}</h2>
            <p className="story-subtitle">{t('story.subtitle')}</p>
          </motion.div>

          <motion.div
            className="story-text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="story-text">
              {t('story.text1')}
            </p>
            <p className="story-text">
              {t('story.text2')}<span className="highlight">{t('story.text2Highlight')}</span>{t('story.text2Continue')}
            </p>
          </motion.div>

          <motion.div
            className="story-text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="story-text">
              {t('story.text3')}
            </p>
            <p className="story-text">
              {t('story.text4')}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="story-parallax-image"
          style={{
            y,
            backgroundImage: `url(${storyImage})`
          }}
        >
        </motion.div>
      </div>

      <motion.div
        className="story-arrow-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="story-arrow-text">
          {t('story.arrowText')}
        </p>
        <a href="#our-pillars">
          <motion.div
            className="story-scroll-arrow"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaChevronDown />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default StorySection;
