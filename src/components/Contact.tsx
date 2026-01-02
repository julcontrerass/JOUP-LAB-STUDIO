import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    cafeteria: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const { nombre, email, cafeteria, mensaje } = formData;
    const whatsappMessage = `Hola! Mi nombre es ${nombre || '[Nombre]'}
Email: ${email || '[Email]'}
${cafeteria ? `Cafetería: ${cafeteria}` : ''}
Mensaje: ${mensaje || '[Mensaje]'}`;

    const whatsappUrl = `https://wa.me/5491234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', cafeteria: '', mensaje: '' });
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

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
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
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
