import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/contact-form.css';

const Contact = () => {
  const { t } = useTranslation();
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

    const whatsappUrl = `https://wa.me/541125092014?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert(t('contactForm.successMessage'));
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
          <h2 className="contact-title">{t('contactForm.title')}</h2>
          <p className="contact-subtitle">
            {t('contactForm.subtitle')}
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
            <h3>{t('contactForm.servicesTitle')}</h3>
            <p>
              {t('contactForm.servicesIntro')}
            </p>
            <ul className="service-list">
              <li>
                <strong>{t('contactForm.service1Title')}</strong> {t('contactForm.service1Text')}
              </li>
              <li>
                <strong>{t('contactForm.service2Title')}</strong> {t('contactForm.service2Text')}
              </li>
              <li>
                <strong>{t('contactForm.service3Title')}</strong> {t('contactForm.service3Text')}
              </li>
              <li>
                <strong>{t('contactForm.service4Title')}</strong> {t('contactForm.service4Text')}
              </li>
            </ul>
            <p className="contact-cta">
              {t('contactForm.ctaText')}
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
              <label htmlFor="nombre">{t('contactForm.nameLabel')}</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder={t('contactForm.namePlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contactForm.emailLabel')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contactForm.emailPlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cafeteria">{t('contactForm.cafeteriaLabel')}</label>
              <input
                type="text"
                id="cafeteria"
                name="cafeteria"
                value={formData.cafeteria}
                onChange={handleChange}
                placeholder={t('contactForm.cafeteriaPlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tipoAsesoria">{t('contactForm.advisoryTypeLabel')}</label>
              <select
                id="tipoAsesoria"
                name="tipoAsesoria"
                value={formData.tipoAsesoria}
                onChange={handleChange}
              >
                <option value="">{t('contactForm.advisoryTypeOption1')}</option>
                <option value="Asesoria">{t('contactForm.advisoryTypeOption2')}</option>
                <option value="Consultas">{t('contactForm.advisoryTypeOption3')}</option>
                <option value="Sobre Cursos">{t('contactForm.advisoryTypeOption4')}</option>
                {/* <option value="Analisis Sensorial">Análisis Sensorial</option> */}
                <option value="Otro">{t('contactForm.advisoryTypeOption5')}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">{t('contactForm.messageLabel')}</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={3}
                placeholder={t('contactForm.messagePlaceholder')}
              />
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                <FaPaperPlane /> {t('contactForm.submitButton')}
              </button>
              <button type="button" className="whatsapp-btn" onClick={handleWhatsAppClick}>
                <FaWhatsapp /> {t('contactForm.whatsappButton')}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
