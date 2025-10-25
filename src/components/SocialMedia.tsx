import './SocialMedia.css';

const SocialMedia = () => {
  const images = [
    'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=400&q=80',
    'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
    'https://images.unsplash.com/photo-1559496417-e7f25c7e5c89?w=400&q=80'
  ];

  return (
    <section className="social-media">
      <h2>Síguenos en las redes sociales</h2>
      <div className="social-grid">
        {images.map((image, index) => (
          <div key={index} className="social-image" style={{backgroundImage: `url(${image})`}}></div>
        ))}
      </div>
      <button className="btn-secondary">Redes sociales</button>
    </section>
  );
};

export default SocialMedia;
