import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/module-one.css';
import moduloUnoPdf from '../assets/resources/pdf-materials/MODULO UNO JOUP.pdf';

const ModuloUnoPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="modulo-page">
      <Link to="/educacion" className="back-button-modulo">
        <FaArrowLeft />
        <span>{t('resources.backToEducation')}</span>
      </Link>

      <div className="pdf-viewer-full">
        <iframe
          src={`${moduloUnoPdf}#toolbar=0&navpanes=0&scrollbar=0&zoom=45`}
          className="pdf-iframe"
          title={t('resources.moduleOneTitle')}
        />
      </div>

      <div className="pdf-download-footer">
        <a href={moduloUnoPdf} download="MODULO_UNO_JOUP.pdf" className="download-pdf-btn-footer">
          <FaDownload />
          <span>{t('resources.downloadPdf')}</span>
        </a>
      </div>
    </div>
  );
};

export default ModuloUnoPage;
