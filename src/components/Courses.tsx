import { motion } from 'framer-motion';
import '../styles/Courses.css';

const Courses = () => {
  const courseCategories = [
    {
      title: "FUNDAMENTOS DEL CAFÉ",
      courses: [
        { level: "Nivel Intermedio", description: "Formación base sólida: extracción, espresso, filtrados, sensorialidad inicial y técnicas esenciales de barismo." },
        { level: "Nivel Avanzado", description: "Profundización técnica para alcanzar consistencia real: sensorialidad aplicada, protocolos, correcciones y análisis avanzado." },
        { level: "One & One", description: "Formación personalizada con un profesional JOUP. Contenidos adaptados al nivel y objetivos del alumno." }
      ]
    },
    {
      title: "ESPRESSO & CALIBRACIÓN",
      courses: [
        { level: "Intermedio", description: "Ajustes esenciales para lograr espresso consistente: dosis, molienda, tiempo, flujo y seguridad técnica." },
        { level: "Avanzado", description: "Control científico del espresso: TDS, curvas de extracción, flujo, consistencia y análisis técnico profundo." },
        { level: "One & One", description: "Sesiones personalizadas para dominar calibraciones complejas y workflow bajo presión." }
      ]
    },
    {
      title: "SENSORY & CUPPING",
      courses: [
        { level: "Intermedio", description: "Desarrollo sensorial, defectos básicos, triangulaciones y ampliación del léxico del café." },
        { level: "Avanzado", description: "Análisis sensorial avanzado y protocolo internacional de cata. Enfoque crítico y profesional." },
        { level: "One & One", description: "Sesiones privadas de cata para desarrollar sensibilidad y criterio propio." }
      ]
    },
    {
      title: "FILTRADOS",
      courses: [
        { level: "Intermedio", description: "Técnicas esenciales en V60, Prensa y Aeropress. Recetas claras y consistentes." },
        { level: "Avanzado", description: "Control total de extracción: bypass, turbulencia, lixiviación y ajustes complejos de molienda." },
        { level: "One & One", description: "Sesiones personalizadas para perfeccionar técnicas específicas y recetas de autor." }
      ]
    },
    {
      title: "LATTE ART",
      courses: [
        { level: "Intermedio", description: "Microespuma, control de jarra y figuras base con precisión." },
        { level: "Avanzado", description: "Figuras complejas, free pour avanzado y control milimétrico." },
        { level: "One & One", description: "Entrenamiento personalizado centrado en corrección técnica y figuras profesionales." }
      ]
    },
    {
      title: "PROCESAMIENTO & CAFÉ VERDE",
      courses: [
        { level: "Intermedio", description: "Procesos clásicos y su impacto en sabor: lavado, honey, natural. Varietales principales." },
        { level: "Avanzado", description: "Fermentaciones complejas, procesos modernos y análisis sensorial profundo de café verde." },
        { level: "One & One", description: "Sesiones personalizadas para interpretar, evaluar y seleccionar cafés de origen." }
      ]
    },
    {
      title: "CIENCIA DEL CAFÉ",
      courses: [
        { level: "Intermedio", description: "Física y química aplicada a la extracción: presión, solubilidad, temperatura." },
        { level: "Avanzado", description: "Mecánica de fluidos, extractología científica y análisis técnico profundo." },
        { level: "One & One", description: "Sesiones privadas de análisis científico aplicado al café." }
      ]
    },
    {
      title: "PEDAGOGÍA DEL CAFÉ",
      courses: [
        { level: "Programa Integral", description: "Formación completa para instructores: estructura de clases, manejo de grupos, comunicación técnica, oratoria y psicología aplicada." }
      ]
    }
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <motion.div
          className="courses-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="courses-title">NUESTROS CURSOS</h2>
          <p className="courses-subtitle">Programas diseñados para formar profesionales del café de especialidad</p>
        </motion.div>

        <div className="courses-grid">
          {courseCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="category-block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="category-block-header">
                <h3 className="category-block-title">{category.title}</h3>
              </div>

              <div className="category-block-courses">
                {category.courses.map((course, courseIndex) => (
                  <motion.div
                    key={courseIndex}
                    className="course-block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (courseIndex * 0.1) }}
                  >
                    <h4 className="course-block-level">{course.level}</h4>
                    <p className="course-block-description">{course.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
