import { useTranslation } from 'react-i18next';
import '../../styles/ui/language-toggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${i18n.language === 'es' ? 'English' : 'Español'}`}
      title={`Switch to ${i18n.language === 'es' ? 'English' : 'Español'}`}
    >
      <span className="language-toggle-text">
        {i18n.language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};

export default LanguageToggle;
