import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CicloBaristas.css';

// Daniela Rojas
import danielaMain from '../assets/Entrevistas/DanielaRojas/Daniela .jpg';
import daniela1 from '../assets/Entrevistas/DanielaRojas/Entrevista1.jpg';
import daniela2 from '../assets/Entrevistas/DanielaRojas/Entrevista2.jpg';
import daniela3 from '../assets/Entrevistas/DanielaRojas/Entrevista3.jpg';
import daniela4 from '../assets/Entrevistas/DanielaRojas/Entrevista4.jpg';
import daniela5 from '../assets/Entrevistas/DanielaRojas/Entrevista5.jpg';

// Gonzalo Andrada
import gonzaloMain from '../assets/Entrevistas/GonzaloAndrada/Gonzalo.jpg';
import gonzalo1 from '../assets/Entrevistas/GonzaloAndrada/Entrevista1.jpg';
import gonzalo2 from '../assets/Entrevistas/GonzaloAndrada/Entrevista2.jpg';

// Ileana Vilches
import ileanaMain from '../assets/Entrevistas/IleanaVilches/Ileana .jpg';
import ileana1 from '../assets/Entrevistas/IleanaVilches/Entrevista1.jpg';
import ileana2 from '../assets/Entrevistas/IleanaVilches/Entrevista2.jpg';
import ileana3 from '../assets/Entrevistas/IleanaVilches/Entrevista3.jpg';

interface Interview {
  name: string;
  mainImage: string;
  images: string[];
}

const CicloBaristas = () => {
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const titleAnimation = useScrollAnimation({ threshold: 0.1 });
  const subtitleAnimation = useScrollAnimation({ threshold: 0.1 });
  const card1Animation = useScrollAnimation({ threshold: 0.1 });
  const card2Animation = useScrollAnimation({ threshold: 0.1 });
  const card3Animation = useScrollAnimation({ threshold: 0.1 });

  const interviews: Interview[] = [
    {
      name: 'Daniela Rojas',
      mainImage: danielaMain,
      images: [daniela1, daniela2, daniela3, daniela4, daniela5]
    },
    {
      name: 'Gonzalo Andrada',
      mainImage: gonzaloMain,
      images: [gonzalo1, gonzalo2]
    },
    {
      name: 'Ileana Vilches',
      mainImage: ileanaMain,
      images: [ileana1, ileana2, ileana3]
    }
  ];

  const cardAnimations = [card1Animation, card2Animation, card3Animation];
  const delays = ['', 'delay-100', 'delay-200'];

  const openModal = (interview: Interview) => {
    setSelectedInterview(interview);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedInterview(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedInterview) {
      setCurrentImageIndex((prev) =>
        prev === selectedInterview.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedInterview) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedInterview.images.length - 1 : prev - 1
      );
    }
  };

  // Carousel navigation
  const nextCarousel = () => {
    setCurrentCarouselIndex((prev) =>
      prev === interviews.length - 1 ? 0 : prev + 1
    );
  };

  const prevCarousel = () => {
    setCurrentCarouselIndex((prev) =>
      prev === 0 ? interviews.length - 1 : prev - 1
    );
  };

  const goToCarouselSlide = (index: number) => {
    setCurrentCarouselIndex(index);
    setIsAutoPlaying(false);
  };

  // Carousel autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextCarousel();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentCarouselIndex, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedInterview) {
        if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'Escape') {
          closeModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedInterview, currentImageIndex]);

  return (
    <>
      <section className="ciclo-baristas" id="ciclo-baristas">
        <h2
          ref={titleAnimation.elementRef}
          className={`scroll-animation fade-in-up ${titleAnimation.isVisible ? 'animate' : ''}`}
        >
          Ciclo de Baristas
        </h2>
        <p
          ref={subtitleAnimation.elementRef}
          className={`section-subtitle scroll-animation fade-in-up ${subtitleAnimation.isVisible ? 'animate' : ''}`}
        >
          Conoce las historias detrás de los mejores baristas
        </p>
        {/* Desktop Grid */}
        <div className="interviews-grid desktop-grid">
          {interviews.map((interview, index) => (
            <div
              key={index}
              ref={cardAnimations[index].elementRef}
              className={`interview-card scroll-animation fade-in-up ${delays[index]} ${cardAnimations[index].isVisible ? 'animate' : ''}`}
              onClick={() => openModal(interview)}
            >
              <div className="interview-image" style={{backgroundImage: `url(${interview.mainImage})`}}>
                <div className="interview-overlay">
                  <h3>{interview.name}</h3>
                  <p>Ver Entrevista</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="carousel-container mobile-carousel">
          <div
            className="carousel-wrapper"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={() => setIsAutoPlaying(false)}
          >
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentCarouselIndex * 100}%)` }}
            >
              {interviews.map((interview, index) => (
                <div
                  key={index}
                  className="carousel-slide"
                  onClick={() => openModal(interview)}
                >
                  <div className="interview-image" style={{backgroundImage: `url(${interview.mainImage})`}}>
                    <div className="interview-overlay">
                      <h3>{interview.name}</h3>
                      <p>Ver Entrevista</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-btn carousel-btn-prev" onClick={prevCarousel}>
              ‹
            </button>
            <button className="carousel-btn carousel-btn-next" onClick={nextCarousel}>
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {interviews.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentCarouselIndex === index ? 'active' : ''}`}
                onClick={() => goToCarouselSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedInterview && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>

            <button className="gallery-nav prev" onClick={prevImage}>
              ‹
            </button>

            <div className="gallery-image-container">
              <img
                src={selectedInterview.images[currentImageIndex]}
                alt={`Entrevista ${currentImageIndex + 1}`}
                className="gallery-image"
              />
            </div>

            <button className="gallery-nav next" onClick={nextImage}>
              ›
            </button>

            <div className="gallery-counter">
              {currentImageIndex + 1} / {selectedInterview.images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CicloBaristas;
