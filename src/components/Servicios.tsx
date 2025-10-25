import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Servicios.css';

interface Service {
  title: string;
  description: string;
}

const Servicios = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const accordionAnimation = useScrollAnimation({ threshold: 0.2 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });

  const services: Service[] = [
    {
      title: 'Cursos',
      description: 'Programas de capacitación especializados en barismo, métodos de preparación, latte art y técnicas avanzadas. Cursos adaptados a todos los niveles, desde principiantes hasta profesionales del café de especialidad.'
    },
    {
      title: 'Consultoría',
      description: 'Asesoramiento integral para tu cafetería o negocio de café. Análisis de operaciones, selección de equipos, desarrollo de menú, capacitación de personal y optimización de procesos para mejorar calidad y rentabilidad.'
    },
    {
      title: 'Catas',
      description: 'Sesiones de catación profesional para desarrollar tu paladar y habilidades sensoriales. Aprende a identificar perfiles de sabor, evaluar calidad del café y entender las características únicas de diferentes orígenes y procesos.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="servicios-section" id="servicios-adicionales">
      <div className="servicios-container">
        <h2
          ref={titleAnimation.elementRef}
          className={`scroll-animation fade-in-up ${titleAnimation.isVisible ? 'animate' : ''}`}
        >
          Nuestros servicios
        </h2>

        <div
          ref={accordionAnimation.elementRef}
          className={`accordion scroll-animation fade-in-up ${accordionAnimation.isVisible ? 'animate' : ''}`}
        >
          {services.map((service, index) => (
            <div key={index} className="accordion-item">
              <button
                className={`accordion-header ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{service.title}</span>
                <span className="accordion-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={ctaAnimation.elementRef}
          className={`servicios-cta scroll-animation fade-in-up ${ctaAnimation.isVisible ? 'animate' : ''}`}
        >
          <a href="#contacto" className="btn-reserva">Consultanos</a>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
