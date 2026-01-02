import { motion } from 'framer-motion';
import '../styles/HowWeWork.css';

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Primer Contacto",
      description: "Conversación inicial para entender tu visión",
      details: "Nos reunimos para conocer tu idea, expectativas y objetivos. Escuchamos tu proyecto y contexto para diseñar una asesoría a medida.",
      icon: "💬"
    },
    {
      number: "02",
      title: "Análisis del Proyecto",
      description: "Evaluación detallada de viabilidad y contexto",
      details: "Estudiamos la ubicación, público objetivo, competencia y recursos disponibles. Definimos el alcance y los tiempos del proyecto.",
      icon: "📊"
    },
    {
      number: "03",
      title: "Diseño de Concepto",
      description: "Creación de la identidad de tu cafetería",
      details: "Desarrollamos la filosofía de servicio, propuesta de valor, carta de productos y experiencia del cliente que te diferenciarán.",
      icon: "💡"
    },
    {
      number: "04",
      title: "Selección de Equipos",
      description: "Asesoría en maquinaria y herramientas",
      details: "Te guiamos en la elección de máquinas de espresso, molinos, métodos de filtrado y equipamiento según tu concepto y presupuesto.",
      icon: "⚙️"
    },
    {
      number: "05",
      title: "Curaduría de Café",
      description: "Selección y desarrollo de tu carta de cafés",
      details: "Elegimos los cafés que mejor se adapten a tu propuesta. Diseñamos perfiles de tostado y métodos de preparación específicos.",
      icon: "☕"
    },
    {
      number: "06",
      title: "Capacitación del Equipo",
      description: "Formación técnica y conceptual del personal",
      details: "Entrenamos a tu equipo en técnicas de extracción, calibración, servicio al cliente y la filosofía detrás de cada taza.",
      icon: "👥"
    },
    {
      number: "07",
      title: "Montaje y Calibración",
      description: "Puesta a punto de todos los sistemas",
      details: "Instalamos y calibramos todos los equipos, ajustamos recetas, optimizamos flujos de trabajo y protocolos de calidad.",
      icon: "🔧"
    },
    {
      number: "08",
      title: "Apertura y Seguimiento",
      description: "Acompañamiento en el lanzamiento",
      details: "Estamos presentes en la apertura y ofrecemos seguimiento continuo para ajustar procesos, resolver dudas y garantizar la excelencia.",
      icon: "🎉"
    },
    // {
    //   number: "09",
    //   title: "Fotografía Gastronómica",
    //   description: "Capturamos la esencia visual de tu café",
    //   details: "Sesiones fotográficas profesionales para menús, redes sociales, branding y contenido que refleje la calidad y personalidad de tu cafetería.",
    //   icon: "📸"
    // },
    {
      number: "09",
      title: "Desarrollo Web by TukiCode",
      description: "Tu presencia digital profesional",
      details: "Creación de un sitio web atractivo y funcional que refleje la identidad de tu cafetería, facilitando la conexión con tus clientes y la promoción de tu marca.",
      icon: "💻"
    }
  ];

  return (
    <section id="how-we-work" className="how-we-work-section">
      <div className="how-we-work-container">
        <motion.div
          className="how-we-work-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="how-we-work-title">CÓMO TRABAJAMOS</h2>
          <p className="how-we-work-intro">
            Acompañamos todo el proceso de apertura de tu cafetería, desde la idea inicial hasta el primer día de servicio y más allá.
          </p>
          <p className="how-we-work-subtitle">Tu camino hacia la apertura</p>
        </motion.div>

        <div className="steps-circuit">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="circuit-step"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-connector" />
              <div className="step-card">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <p className="step-details">{step.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
