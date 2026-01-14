import { useState } from 'react';
import BlogCard from './BlogCard';
import '../styles/blog-section.css';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface BlogSectionProps {
  title: string;
  posts: BlogPost[];
}

const BlogSection = ({ title, posts }: BlogSectionProps) => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Set<string>>(new Set());

  const toggleBookmark = (postId: string) => {
    setBookmarkedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

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
            isBookmarked={bookmarkedPosts.has(post.id)}
            onBookmarkToggle={() => toggleBookmark(post.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
