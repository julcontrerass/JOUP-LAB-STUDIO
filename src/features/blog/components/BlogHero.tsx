import { useTranslation } from 'react-i18next';
import '../styles/blog-hero.css';

const BlogHero = () => {
  const { t } = useTranslation();

  return (
    <section className="blog-hero">
      <div className="blog-hero-container">
        <h1 className="blog-hero-title">{t('blog.title')}</h1>
        <p className="blog-hero-description">
          {t('blog.description')}
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
