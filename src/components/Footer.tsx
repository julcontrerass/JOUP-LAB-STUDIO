import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>JOUP LAB & STUDIO</h3>
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-label">UBICACIÓN</p>
          <p>Calle Principal 123</p>
          <p>Buenos Aires, Argentina</p>
        </div>
        <div className="footer-section">
          <p className="footer-label">CONTACTO</p>
          <p>contact@joup.com</p>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
