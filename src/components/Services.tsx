import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';
import calibracion from '../assets/Servicios/Calibracion.jpeg';
import cataYSensorial from '../assets/Servicios/CataYSensorial.jpg';
import filtrado from '../assets/Servicios/Filtrado.png';
import latteArt from '../assets/Servicios/LatteArt.png';

const Services = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const card1Animation = useScrollAnimation({ threshold: 0.2 });
  const card2Animation = useScrollAnimation({ threshold: 0.2 });
  const card3Animation = useScrollAnimation({ threshold: 0.2 });
  const card4Animation = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      title: 'Calibración',
      description: 'Ajuste y optimización de equipos de espresso para garantizar la mejor extracción. Incluye calibración de molinos, presión y temperatura para resultados consistentes.',
      image: calibracion,
      animation: card1Animation
    },
    {
      title: 'Cata y Sensorial',
      description: 'Sesiones de catación profesional para desarrollar tu paladar. Aprende a identificar notas, sabores y evaluar la calidad del café como un experto.',
      image: cataYSensorial,
      animation: card2Animation
    },
    {
      title: 'Métodos de Filtrado',
      description: 'Domina las técnicas de preparación de café filtrado: V60, Chemex, Aeropress y más. Extrae todo el potencial aromático de cada origen.',
      image: filtrado,
      animation: card3Animation
    },
    {
      title: 'Latte Art',
      description: 'Aprende el arte de crear diseños en tu espresso. Desde técnicas básicas hasta patrones avanzados para impresionar con cada taza.',
      image: latteArt,
      animation: card4Animation
    }
  ];

  const delays = ['', 'delay-100', 'delay-200', 'delay-300'];

  return (
    <section className="services" id="servicios">
      <h2
        ref={titleAnimation.elementRef}
        className={`scroll-animation fade-in-up ${titleAnimation.isVisible ? 'animate' : ''}`}
      >
        Cursos
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            ref={service.animation.elementRef}
            className={`service-card scroll-animation fade-in-up ${delays[index]} ${service.animation.isVisible ? 'animate' : ''}`}
          >
            <div className="service-image" style={{backgroundImage: `url(${service.image})`}}></div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p className="description">{service.description}</p>
              <button className="btn-ver-mas">Ver Más</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
