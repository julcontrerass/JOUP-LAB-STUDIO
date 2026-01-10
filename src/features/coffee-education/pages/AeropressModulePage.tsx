import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/aeropress-module.css';
import aeropressPdf from '../assets/resources/pdf-materials/Joup-informe.pdf';

const AeropressPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aeropress-page">
      <Link to="/educacion" className="back-button-aeropress">
        <FaArrowLeft />
        <span>{t('resources.backToEducation')}</span>
      </Link>

      <div className="pdf-viewer-full">
        <iframe
          src={`${aeropressPdf}#toolbar=0&navpanes=0&scrollbar=0&zoom=65`}
          className="pdf-iframe"
          title={t('resources.aeropressTitle')}
        />
      </div>

      <div className="pdf-download-footer">
        <a href={aeropressPdf} download="Leyes_Fisica_Aeropress_JOUP.pdf" className="download-pdf-btn-footer">
          <FaDownload />
          <span>{t('resources.downloadPdf')}</span>
        </a>
      </div>
    </div>
  );
};

export default AeropressPage;
