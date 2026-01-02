import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    cafeteria: '',
    tipoAsesoria: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const { nombre, email, cafeteria, tipoAsesoria, mensaje } = formData;
    const whatsappMessage = `Hola! Mi nombre es ${nombre || '[Nombre]'}
Email: ${email || '[Email]'}
${cafeteria ? `Cafetería: ${cafeteria}` : ''}
${tipoAsesoria ? `Tipo de Asesoría: ${tipoAsesoria}` : ''}
Mensaje: ${mensaje || '[Mensaje]'}`;

    const whatsappUrl = `https://wa.me/5491234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', cafeteria: '', tipoAsesoria: '', mensaje: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">CONTACTO</h2>
          <p className="contact-subtitle">
            Contáctanos para explicarnos tu idea o la asesoría que necesitas
          </p>
        </motion.div>

        <div className="contact-grid-wrapper">
          <motion.div
            className="contact-description"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Nuestros Servicios</h3>
            <p>
              En JOUP LAB ofrecemos servicios especializados para elevar tu negocio de café de especialidad al siguiente nivel.
            </p>
            <ul className="service-list">
              <li>
                <strong>Consultoría Personalizada:</strong> Asesoramiento integral para cafeterías, desde la selección de equipos hasta el diseño de menú.
              </li>
              <li>
                <strong>Desarrollo de Protocolos:</strong> Creación de procesos de calidad adaptados a tu negocio.
              </li>
              <li>
                <strong>Análisis Sensorial:</strong> Catas profesionales y evaluación de cafés de especialidad.
              </li>
              <li>
                <strong>Capacitación de Baristas:</strong> Formación técnica y sensorial para tu equipo.
              </li>
            </ul>
            <p className="contact-cta">
              ¿Listo para transformar tu proyecto? Completa el formulario y conversemos.
            </p>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cafeteria">Nombre de la Cafetería (opcional)</label>
              <input
                type="text"
                id="cafeteria"
                name="cafeteria"
                value={formData.cafeteria}
                onChange={handleChange}
                placeholder="Nombre de tu cafetería"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tipoAsesoria">Tipo de Asesoría</label>
              <select
                id="tipoAsesoria"
                name="tipoAsesoria"
                value={formData.tipoAsesoria}
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="Asesoria">Asesoria</option>
                <option value="Consultas">Consultas</option>
                <option value="Sobre Cursos">Sobre Cursos</option>
                {/* <option value="Analisis Sensorial">Análisis Sensorial</option> */}
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Cuéntanos tu idea o qué asesoría necesitas..."
              />
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Enviar Mensaje
              </button>
              <button type="button" className="whatsapp-btn" onClick={handleWhatsAppClick}>
                <FaWhatsapp /> Contactar por WhatsApp
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
