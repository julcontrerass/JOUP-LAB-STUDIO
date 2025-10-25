import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./About.css";
import torneoValen from "../assets/torneoValen.jpg";

const About = () => {
  const imageAnimation = useScrollAnimation({ threshold: 0.2 });
  const contentAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="about" id="acerca">
      <div className="about-container">
        <div
          ref={imageAnimation.elementRef}
          className={`about-image scroll-animation fade-in-left ${imageAnimation.isVisible ? 'animate' : ''}`}
        >
          <img src={torneoValen} alt="Coffee mug" />
        </div>
        <div
          ref={contentAnimation.elementRef}
          className={`about-content scroll-animation fade-in-right ${contentAnimation.isVisible ? 'animate' : ''}`}
        >
          <h2>
            Más sobre
            <br />
            JOUP LAB & STUDIO
          </h2>
          <p>
            A veces una taza es todo lo que necesitás para volver a vos. En Joup
            Coffee creemos que cada momento puede ser extraordinario si está
            bien acompañado.
          </p>
          <a href="https://www.instagram.com/joup_coffee" className="btn-secondary">REDES</a>
        </div>
      </div>
    </section>
  );
};

export default About;
