import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';
import filtrado from '../assets/filtrado.jpg';

const Contact = () => {
  const formAnimation = useScrollAnimation({ threshold: 0.2 });
  const imageAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <div
          ref={formAnimation.elementRef}
          className={`contact-form scroll-animation fade-in-left ${formAnimation.isVisible ? 'animate' : ''}`}
        >
          <h2>Contáctanos</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Nombre* (Obligatorio)" required />
              <input type="text" placeholder="Apellido" />
            </div>
            <input type="email" placeholder="Correo electrónico* (Obligatorio)" required />
            <input type="text" placeholder="Asunto* (Obligatorio)" required />
            <textarea placeholder="Mensaje* (Obligatorio)" rows={6} required></textarea>
            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </div>
        <div
          ref={imageAnimation.elementRef}
          className={`contact-image scroll-animation fade-in-right ${imageAnimation.isVisible ? 'animate' : ''}`}
        >
          <img src={filtrado} alt="Coffee filter" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
