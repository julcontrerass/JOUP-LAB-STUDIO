import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/AeropressPage.css';
import aeropressPdf from '../assets/Educacion/Joup-informe.pdf';

const AeropressPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aeropress-page">
      <Link to="/educacion" className="back-button-aeropress">
        <FaArrowLeft />
        <span>Volver a educación</span>
      </Link>

      <div className="pdf-viewer-full">
        <iframe
          src={`${aeropressPdf}#toolbar=0&navpanes=0&scrollbar=0&zoom=65`}
          className="pdf-iframe"
          title="Leyes de la física aplicados a la Aeropress"
        />
      </div>

      <div className="pdf-download-footer">
        <a href={aeropressPdf} download="Leyes_Fisica_Aeropress_JOUP.pdf" className="download-pdf-btn-footer">
          <FaDownload />
          <span>Descargar PDF</span>
        </a>
      </div>
    </div>
  );
};

export default AeropressPage;
