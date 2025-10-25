import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="hero">
      <div
        ref={elementRef}
        className={`hero-content scroll-animation fade-in-up ${isVisible ? 'animate' : ''}`}
      >
        <h1>JOUP LAB & STUDIO</h1>
        <p>Educación, asesoría y excelencia en café de especialidad <br/> Cursos • Consultoría • Catas.</p>

        <a href="#acerca" className="btn-primary">LEER MÁS</a>
      </div>
    </section>
  );
};

export default Hero;
