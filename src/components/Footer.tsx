import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>
        JOUP LAB & STUDIO WEB by{' '}
        <a
          href="https://tukicode.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="tukicode-link"
        >
          <span className="tuki-white">TUKI</span>
          <span className="code-violet">CODE</span>
        </a>
      </h3>
      {/* <div className="footer-content">
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
      </div> */}
    </footer>
  );
};

export default Footer;
