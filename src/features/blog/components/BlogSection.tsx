import BlogCard from './BlogCard';
import '../styles/blog-section.css';

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

interface BlogSectionProps {
  title: string;
  posts: BlogPost[];
}

const BlogSection = ({ title, posts }: BlogSectionProps) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="blog-section">
      <h2 className="blog-section-title">{title}</h2>
      <div className="blog-section-grid">
        {posts.map((post) => (
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
    </section>
  );
};

export default BlogSection;
