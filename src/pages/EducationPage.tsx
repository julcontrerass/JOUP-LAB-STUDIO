import { motion } from 'framer-motion';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/EducationPage.css';
import aeropressPdf from '../assets/Educacion/Joup-informe.pdf';
import moduloUnoPdf from '../assets/Educacion/MODULO UNO JOUP.pdf';
import aeropressImg from '../assets/Leyes de la física Aplicados a la aeropress.png';
import historiaImg from '../assets/HISTORIA DEL CAFÉ.png';

const EducationPage = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const closePdfViewer = () => {
    setSelectedPdf(null);
  };
  const resources = [
    {
      title: "Leyes de la física aplicados a la Aeropress",
      description: "Conceptos básicos y fundamentos del café de especialidad",
      pdfUrl: aeropressPdf,
      image: aeropressImg,
      moduleLink: "/aeropress"
    },
    {
      title: "Modulo uno JOUP",
      description: "Historia del cafe: Origen, expansión global y cultura",
      pdfUrl: moduloUnoPdf,
      image: historiaImg,
      moduleLink: "/modulo-1"
    }
  ];

  return (
    <div className="education-page">
      <Link to="/" className="back-button">
        <FaArrowLeft />
        <span>Volver al inicio</span>
      </Link>

      <div className="education-page-container">
        <motion.div
          className="education-page-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="education-page-title">EDUCACIÓN GRATUITA Y RECURSOS</h1>
          <p className="education-page-intro">
            Todos nuestros recursos educativos están disponibles de forma gratuita.
            Descargá el material que necesites y comenzá tu aprendizaje en el mundo del café de especialidad.
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
                    Ver Módulo Web
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
            ¿Querés más recursos? Seguinos en nuestras redes sociales para acceder a contenido exclusivo
            y mantenerte actualizado con nuevas publicaciones educativas.
          </p>
          <Link to="/#join-us" className="join-us-page-btn" onClick={() => {
            setTimeout(() => {
              const element = document.getElementById('join-us');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}>
            Sumate a JOUP
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
