import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BlogCard from './BlogCard';
import '../styles/blog-tabs.css';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  authorName: string;
  authorImage: string;
  slug: string;
}

interface BlogTabsProps {
  escrituras: BlogPost[];
  entrevistas: BlogPost[];
}

type TabType = 'escrituras' | 'entrevistas';

const BlogTabs = ({ escrituras, entrevistas }: BlogTabsProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>('escrituras');

  const getCurrentPosts = () => {
    switch (activeTab) {
      case 'escrituras':
        return escrituras;
      case 'entrevistas':
        return entrevistas;
      default:
        return escrituras;
    }
  };

  const tabs = [
    { key: 'escrituras' as TabType, label: t('blog.sections.escrituras'), count: escrituras.length },
    { key: 'entrevistas' as TabType, label: t('blog.sections.entrevistas'), count: entrevistas.length }
  ];

  const currentPosts = getCurrentPosts();

  return (
    <div className="blog-tabs">
      <div className="blog-tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`blog-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            {tab.count > 0 && <span className="blog-tab-count">({tab.count})</span>}
          </button>
        ))}
      </div>

      <div className="blog-tabs-content">
        {currentPosts.length > 0 ? (
          <div className="blog-tabs-grid">
            {currentPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.description}
                date={post.date}
                image={post.image}
                authorName={post.authorName}
                authorImage={post.authorImage}
                slug={post.slug}
              />
            ))}
          </div>
        ) : (
          <div className="blog-tabs-empty">
            <p>No hay contenido disponible en esta sección aún.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogTabs;
