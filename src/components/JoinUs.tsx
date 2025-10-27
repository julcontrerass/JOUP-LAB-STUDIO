import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../styles/JoinUs.css';

const JoinUs = () => {
  return (
    <section id="join-us" className="join-us-section">
      <div className="join-us-container">
        <motion.div
          className="join-us-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-glow-bg"></div>

          <motion.div
            className="cta-header"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="cta-title">SUMATE A JOUP</h3>
            <motion.div
              className="cta-title-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="cta-tagline-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="cta-quote-mark">"</div>
            <p className="cta-tagline">EL CAFÉ ES MEJOR CUANDO SE COMPARTE</p>
            <div className="cta-quote-mark closing">"</div>
          </motion.div>

          <motion.p
            className="cta-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Si te mueve la curiosidad, si querés aprender, formar parte o simplemente vivir una experiencia distinta, <span className="highlight">estás invitado</span>.
            Joup es un espacio abierto: para quienes buscan crecer, cuestionar, inspirarse y compartir.
          </motion.p>

          <div className="contact-info">
            {[
              { type: "whatsapp", label: "WhatsApp", value: "+54 11 2509 2014", link: "https://wa.me/5491125092014", Icon: FaWhatsapp },
              { type: "email", label: "Email", value: "joupstudio@gmail.com", link: "mailto:joupstudio@gmail.com", Icon: MdEmail },
              { type: "instagram", label: "Instagram", value: "@joup.coffee", link: "https://instagram.com/joup.coffee", Icon: FaInstagram }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-item contact-${contact.type}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <contact.Icon className="contact-icon" />
                <div className="contact-content">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
                <span className="contact-arrow">→</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
