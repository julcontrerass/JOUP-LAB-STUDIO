import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/ModuloUnoPage.css';
import moduloUnoPdf from '../assets/Educacion/MODULO UNO JOUP.pdf';

const ModuloUnoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="modulo-page">
      <Link to="/educacion" className="back-button-modulo">
        <FaArrowLeft />
        <span>Volver a educación</span>
      </Link>

      <div className="pdf-viewer-full">
        <iframe
          src={`${moduloUnoPdf}#toolbar=0&navpanes=0&scrollbar=0&zoom=45`}
          className="pdf-iframe"
          title="Módulo Uno JOUP - Historia del Café"
        />
      </div>

      <div className="pdf-download-footer">
        <a href={moduloUnoPdf} download="MODULO_UNO_JOUP.pdf" className="download-pdf-btn-footer">
          <FaDownload />
          <span>Descargar PDF</span>
        </a>
      </div>
    </div>
  );
};

export default ModuloUnoPage;
