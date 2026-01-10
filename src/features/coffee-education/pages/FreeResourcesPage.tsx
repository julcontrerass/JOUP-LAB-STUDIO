import { motion } from 'framer-motion';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/free-resources-page.css';
import aeropressPdf from '../assets/resources/pdf-materials/Joup-informe.pdf';
import moduloUnoPdf from '../assets/resources/pdf-materials/MODULO UNO JOUP.pdf';
import aeropressImg from '../assets/resources/aeropress-physics.png';
import historiaImg from '../assets/resources/coffee-history.png';

const EducationPage = () => {
  const { t } = useTranslation();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const closePdfViewer = () => {
    setSelectedPdf(null);
  };
  const resources = [
    {
      title: t('resources.aeropressTitle'),
      description: t('resources.aeropressDescription'),
      pdfUrl: aeropressPdf,
      image: aeropressImg,
      moduleLink: "/aeropress"
    },
    {
      title: t('resources.moduleOneTitle'),
      description: t('resources.moduleOneDescription'),
      pdfUrl: moduloUnoPdf,
      image: historiaImg,
      moduleLink: "/modulo-1"
    }
  ];

  return (
    <div className="education-page">
      <Link to="/" className="back-button">
        <FaArrowLeft />
        <span>{t('resources.backToHome')}</span>
      </Link>

      <div className="education-page-container">
        <motion.div
          className="education-page-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="education-page-title">{t('resources.pageTitle')}</h1>
          <p className="education-page-intro">
            {t('resources.pageIntro')}
          </p>
        </motion.div>

        <div className="resources-page-grid">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="resource-page-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="resource-page-image">
                <img src={resource.image} alt={resource.title} />
              </div>
              <div className="resource-page-content">
                <h3 className="resource-page-title">{resource.title}</h3>
                <p className="resource-page-description">{resource.description}</p>
                <div className="resource-buttons">
                  <Link to={resource.moduleLink} className="module-page-btn">
                    {t('resources.viewModuleWeb')}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="education-page-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            {t('resources.moreResourcesText')}
          </p>
          <Link to="/#join-us" className="join-us-page-btn" onClick={() => {
            setTimeout(() => {
              const element = document.getElementById('join-us');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}>
            {t('resources.joinJoup')}
          </Link>
        </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="pdf-viewer-overlay" onClick={closePdfViewer}>
          <div className="pdf-viewer-container" onClick={(e) => e.stopPropagation()}>
            <button className="pdf-viewer-close" onClick={closePdfViewer}>
              <FaTimes />
            </button>
            <iframe
              src={selectedPdf}
              className="pdf-viewer-iframe"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationPage;
