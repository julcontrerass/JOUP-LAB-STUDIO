import { useNavigate } from 'react-router-dom';
import '../styles/blog-card.css';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  authorName: string;
  authorImage: string;
  slug: string;
}

const BlogCard = ({
  title,
  description,
  date,
  image,
  authorName,
  authorImage,
  slug
}: BlogCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${slug}`);
  };

  const renderDescription = () => {
    if (description.includes('[@')) {
      const parts = description.split(/(\[@[^\]]+\]\([^)]+\))/g);
      return (
        <>
          {parts.map((part, i) => {
            const linkMatch = part.match(/\[@([^\]]+)\]\(([^)]+)\)/);
            if (linkMatch) {
              return (
                <a
                  key={i}
                  href={linkMatch[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card-inline-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  @{linkMatch[1]}
                </a>
              );
            }
            return part;
          })}
        </>
      );
    }
    return description;
  };

  return (
    <article className="blog-card" onClick={handleClick}>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-description">{renderDescription()}</p>
        <div className="blog-card-footer">
          <span className="blog-card-date">{date}</span>
          {authorName && (
            <div className="blog-card-author">
              <img src={authorImage} alt={authorName} className="blog-card-author-image" />
              <span className="blog-card-author-name">{authorName}</span>
            </div>
          )}
        </div>
      </div>
      <div className="blog-card-image">
        <img src={image} alt={title} />
      </div>
    </article>
  );
};

export default BlogCard;
