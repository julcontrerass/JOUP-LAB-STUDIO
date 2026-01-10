import { useTranslation } from 'react-i18next';
import '../../styles/layout/footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="footer-title">JOUP LAB & STUDIO</h2>
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credits">
            Web by{' '}
            <a
              href="https://tukicode.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="tukicode-link"
            >
              <span className="tuki-white">TUKI</span>
              <span className="code-violet">CODE</span>
            </a>
          </p>
          <p className="footer-copyright">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
