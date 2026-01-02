import { motion } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/Courses.css';
import fundamentosImg from '../assets/charla.png';
import espressoImg from '../assets/espresso.png';
import sensoryImg from '../assets/sca.png';
import filtradosImg from '../assets/filtradoCurso.png';
import latteArtImg from '../assets/latteart.png';
import procesamientoImg from '../assets/fruto.png';
import cienciaImg from '../assets/Lab.png';
import pedagogiaImg from '../assets/educacion.png';

interface CourseLevel {
  name: string;
  subtitle: string;
  intro: string;
  points: string[];
  result: string;
}

interface Course {
  title: string;
  description: string;
  image: string;
  levels?: CourseLevel[];
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses: Course[] = [
    {
      title: "FUNDAMENTOS DEL CAFÉ",
      description: "La base conceptual y técnica para entender el café como sistema. Este eje construye criterio sobre extracción, métodos, sensorialidad y trabajo en barra, permitiendo dejar la repetición mecánica y empezar a comprender qué se hace y por qué. Es el punto de partida que sostiene todo el recorrido dentro de Joup Coffee Lab.",
      image: fundamentosImg,
      levels: [
        {
          name: "Intermedio",
          subtitle: "Base sólida con criterio real",
          intro: "Este nivel es para quien ya trabaja con café (o ya hizo un curso básico) y quiere dejar de \"hacer por repetición\" para empezar a entender qué está pasando en taza. Construimos fundamentos que después sostienen todo: espresso, filtrados, leche, sensorialidad y servicio.",
          points: [
            "Marco de extracción: ratio, molienda, tiempo, temperatura, turbulencia y cómo se relacionan.",
            "Lenguaje Barista útil: varietales, procesos, tueste, frescura, molienda, agua: lo necesario para no hablar \\\"en general\\\".",
            "Criterio para corregir: detectar si el problema es receta, técnica, molino, agua, tueste o café.",
            "Rutina profesional: orden de trabajo, limpieza, consistencia y control diario."
          ],
          result: "Resultado Joup: salís con una base que se nota en barra: menos azar, más control, y una forma clara de explicar lo que hacés."
        },
        {
          name: "Avanzado",
          subtitle: "Consistencia profesional, lectura fina y estándares",
          intro: "Entrenamos consistencia real, lectura sensorial aplicada y corrección fina. No es \\\"más información\\\": es más precisión. Tu objetivo deja de ser \\\"que salga rico\\\" y pasa a ser \\\"que salga igual, bien, todos los días, con criterio\\\"",
          points: [
            "Diagnóstico técnico-sensorial: traducir sabor a variables (acidez vs subextracción, amargor vs sobre-degradacion de compuestos, astringencia vs canalización, etc.).",
            "Protocolos aplicados: control de calidad, triangulaciones simples, registro, ajustes documentados.",
            "Correcciones profundas: cómo sostener la taza cuando cambia el lote, el clima, el flujo, el molino o la demanda.",
            "Estándar de servicio: consistencia, comunicación con el cliente, y barra como sistema."
          ],
          result: "Resultado Joup: pasás de barista ejecutor a barista con criterio técnico propio."
        }
      ]
    },
    {
      title: "ESPRESSO & CALIBRACIÓN",
      description: "El control del espresso llevado a método. Se trabaja la relación entre molienda, dosis, rendimiento, flujo y lectura sensorial para lograr consistencia real en cafetería. Aca el espresso deja de ser intuición y se transforma en control técnico y criterio profesional.",
      image: espressoImg,
      levels: [
        {
          name: "Intermedio",
          subtitle: "Calibración sólida, sin magia",
          intro: "Este curso te enseña a calibrar espresso de forma repetible. El foco está en construir una rutina que funcione en cafetería real: tiempos, dosis, rendimiento, flujo y ajustes simples con lógica.",
          points: [
            "Dial-in con método: qué mover primero y por qué (molienda / ratio / tiempo).",
            "Lectura del shot: crema, flujo, color, tiempo, sensorialidad.",
            "Variables críticas: distribución, nivelado, puck prep, consistencia de dosis.",
            "Estabilidad diaria: cómo adaptar la receta cuando cambia humedad, temperatura, envejecimiento del café."
          ],
          result: "Resultado Joup: calibrás más rápido, con menos prueba-error, y defendés tu receta con fundamentos."
        },
        {
          name: "Avanzado",
          subtitle: "Control total: extracción, flujo y consistencia bajo presión",
          intro: "Acá entramos en extractología aplicada. Trabajamos como se trabaja en equipos serios: medimos, interpretamos, ajustamos y dejamos un sistema estable. Esto es para quien quiere estar por encima de la media.",
          points: [
            "Curvas de extracción y lectura de flujo: cómo impactan en dulzor, claridad y textura.",
            "TDS / rendimiento / balance (si hay refractómetro, se usa; si no, se entrena la lectura sensorial equivalente).",
            "Canalización avanzada: causas reales y cómo corregirlas (puck prep, molienda, distribución, presión, cesta).",
            "Calibración para volumen: mantener calidad cuando hay fila, estrés y cambio de manos.",
            "Optimización de receta por café: no todos los cafés \"piden lo mismo\"."
          ],
          result: "Resultado Joup: dominás el espresso como un sistema: repetible, defendible y escalable."
        }
      ]
    },
    {
      title: "SENSORY & CUPPING",
      description: "El núcleo formativo de Joup. Este eje desarrolla sensibilidad, lenguaje y criterio sensorial para evaluar cafés con claridad, detectar defectos y tomar decisiones profesionales. Formar el paladar es formar la base de todo lo demás.",
      image: sensoryImg,
      levels: [
        {
          name: "Intermedio",
          subtitle: "Sensibilidad entrenada + léxico",
          intro: "Este nivel es la puerta a lo que diferencia a un barista común de uno con futuro: saber probar. Entrenamos la sensibilidad para detectar defectos básicos, describir con claridad y construir un vocabulario real.",
          points: [
            "Atributos principales: fragancia/aroma, sabor, acidez, dulzor, cuerpo, postgusto, balance.",
            "Defectos básicos y causas probables: fermento sucio, fenoles, astringencia, moho, etc.",
            "Triangulaciones: aprender a distinguir cambios sutiles con método.",
            "Léxico funcional: describir sin exageración, con precisión y coherencia."
          ],
          result: "Resultado Joup: empezás a confiar en tu paladar y a comunicarlo como profesional."
        },
        {
          name: "Avanzado",
          subtitle: "Protocolo, criterio crítico y lectura profunda",
          intro: "Acá el entrenamiento cambia: ya no es \\\"descubrir sabores\\\", es construir criterio sensorial profesional. Aprendés a evaluar con estándar, a argumentar, y a tomar decisiones: selección de café, perfil, tueste, uso.",
          points: [
            "Protocolo de cata serio: consistencia, registro, comparación, calibración de panel.",
            "Análisis de estructura: acidez (tipo y calidad), dulzor (forma y persistencia), textura, final, limpieza.",
            "Detección de defectos complejos: fermentaciones problemáticas, fenólicos, verdes, envejecimiento, daño.",
            "Interpretación aplicada: qué café sirve para qué (espresso, filtro, leche) y por qué."
          ],
          result: "Resultado Joup: tu paladar deja de ser \\\"opinión\\\" y pasa a ser herramienta profesional."
        }
      ]
    },
    {
      title: "FILTRADOS",
      description: "El café expresado con claridad y precisión. Se abordan los métodos de filtrado como herramientas de control de extracción y exploración sensorial, integrando técnica, atención y lectura del café. Un espacio donde método y experiencia se encuentran.",
      image: filtradosImg,
      levels: [
        {
          name: "Intermedio",
          subtitle: "Técnica esencial: claridad, consistencia y recetas que funcionan",
          intro: "Para baristas que quieren dejar de depender de \\\"recetas de internet\\\" y aprender a construir la propia con fundamentos. V60, prensa, AeroPress (y lógica transferible a cualquier método).",
          points: [
            "Receta base inteligente: ratio, molienda, temperatura, tiempos objetivo.",
            "Vertido y turbulencia: cómo afectan extracción y claridad.",
            "Control de bloom y saturación: cuándo sirve y cuándo estorba.",
            "Errores típicos: astringencia, sequedad, vacío, amargor, acidez punzante."
          ],
          result: "Resultado Joup: filtrados limpios, consistentes, y un método para ajustar sin improvisación."
        },
        {
          name: "Avanzado",
          subtitle: "Control total de extracción: bypass, lixiviación y diseño de perfil",
          intro: "Este nivel es para quien quiere dominar filtrados de verdad. Aprendés a diseñar perfiles: más claridad, más textura, más dulzor o más acidez —a elección— y sostenerlo.",
          points: [
            "Bypass y concentración: cuándo usarlo, cómo afecta estructura y percepción.",
            "Lixiviación y extracción por etapas: cómo se \"vacía\" el lecho y qué significa en taza.",
            "Molienda avanzada: distribución de partículas, finos, canales en filtro.",
            "Recetas complejas: múltiples vertidos, control de temperatura, agitación intencional.",
            "Consistencia de servicio: replicabilidad en barra."
          ],
          result: "Resultado Joup: filtrados de autor con fundamento, no por casualidad."
        }
      ]
    },
    {
      title: "LATTE ART",
      description: "Técnica, control y estética en equilibrio. Latte Art trabaja la vaporización de leche y el vertido como extensión natural del espresso y del servicio. La figura es consecuencia del dominio técnico, no el objetivo final.",
      image: latteArtImg,
      levels: [
        {
          name: "Intermedio",
          subtitle: "Microespuma real + control de jarra (figuras base perfectas)",
          intro: "Este nivel ordena la técnica para que el latte art no sea \\\"a veces sí, a veces no\\\". Acá se construye el músculo fino: texturizar, integrar y verter con control.",
          points: [
            "Texturizado profesional: aireación justa, integración, brillo, densidad.",
            "Control de jarra: altura, velocidad, ángulo, punto de entrada.",
            "Figuras base: corazón, tulip, rosetta simple con limpieza y simetría.",
            "Corrección de errores: burbujas, espuma seca, leche \"pesada\", corte de flujo."
          ],
          result: "Resultado Joup: tus figuras se vuelven repetibles y tu taza se ve \\\"de cafetería seria\\\"."
        },
        {
          name: "Avanzado",
          subtitle: "Free pour complejo + control milimétrico",
          intro: "Acá la técnica se vuelve estética. Se trabaja precisión, timing, simetría y composición. No es \\\"hacer dibujitos\\\": es dominar fluido + textura + movimiento.",
          points: [
            "Textura por estilo: cappuccino, flat white, latte — y cómo cambia el vertido.",
            "Figuras complejas: rosettas avanzadas, tulips múltiples, swans / composiciones (según nivel del grupo).",
            "Consistencia bajo presión: replicar en servicio real.",
            "Diagnóstico fino: microfallas de leche, pitcher, temperatura, vaporización y vertido."
          ],
          result: "Resultado Joup: tu latte art empieza a hablar de vos sin que tengas que explicarlo."
        }
      ]
    },
    {
      title: "PROCESAMIENTO & CAFÉ VERDE",
      description: "El origen del sabor. Este eje conecta varietales, procesos y decisiones en finca con su impacto en taza, formando criterio para interpretar, evaluar y seleccionar cafés de origen con fundamento.",
      image: procesamientoImg,
      levels: [
        {
          name: "Intermedio",
          subtitle: "Procesos clásicos y su impacto real en sabor",
          intro: "Este nivel te enseña a leer el café desde el origen: no \\\"qué es un natural\\\", sino qué cambia sensorialmente, qué esperar y cómo identificarlo en taza.",
          points: [
            "Lavado / honey / natural: impacto en dulzor, acidez, limpieza, textura.",
            "Varietales principales: qué tienden a aportar y cómo reconocerlos.",
            "Frescura y almacenamiento: envejecimiento, pérdida aromática, defectos típicos.",
            "Lectura sensorial aplicada: relacionar proceso con perfil sin caer en clichés."
          ],
          result: "Resultado Joup: tu discurso de café se vuelve serio y tu selección de cafés mejora."
        },
        {
          name: "Avanzado",
          subtitle: "Fermentaciones modernas + evaluación crítica de café verde",
          intro: "Acá entramos a lo complejo: procesos modernos, fermentaciones dirigidas, y la parte más importante: criterio para distinguir innovación de defecto.",
          points: [
            "Fermentaciones complejas: qué buscan, qué riesgos traen, cómo se perciben.",
            "Defectos vs \\\"funk\\\": detectar fenólicos, moho, sobrefermentación, contaminación.",
            "Evaluación crítica: consistencia de lote, limpieza, estructura y propósito de uso.",
            "Selección para barra: qué proceso sirve para espresso, filtro, leche y por qué."
          ],
          result: "Resultado Joup: pasás de consumidor de tendencias a profesional que evalúa y decide."
        }
      ]
    },
    {
      title: "CIENCIA DEL CAFÉ",
      description: "La lógica detrás de la extracción. Se aplican principios de física y química para entender presión, temperatura, solubilidad y flujo, y así diagnosticar y optimizar resultados. Pensar el café como sistema.",
      image: cienciaImg,
      levels: [
        {
          name: "Intermedio",
          subtitle: "Física y química aplicadas a extracción (para entender de verdad)",
          intro: "Este curso baja a tierra la ciencia del café sin ponerse académico: lo que necesitás para entender por qué pasa lo que pasa.",
          points: [
            "Solubilidad y extracción: qué se extrae primero, qué después, y cómo se siente.",
            "Temperatura, tiempo, molienda: relación real (no frases hechas).",
            "Presión y resistencia: espresso vs filtro, qué cambia y por qué.",
            "Errores típicos explicados con lógica: astringencia, amargor, acidez agresiva, falta de dulzor."
          ],
          result: "Resultado Joup: dejás de calibrar por intuición y empezás a calibrar con comprensión."
        },
        {
          name: "Avanzado",
          subtitle: "Mecánica de fluidos + extractología profunda",
          intro: "Para quien quiere llevar su nivel al territorio \\\"top\\\". Trabajamos dinámica de fluidos aplicada al café: flujo, permeabilidad, turbulencia, canales y estabilidad.",
          points: [
            "Flujo y permeabilidad del puck/lecho: cómo se comporta y cómo controlarlo.",
            "Turbulencia intencional: cuándo mejora y cuándo arruina.",
            "Modelos de extracción: lectura de estructura en taza como \\\"resultado del sistema\\\".",
            "Optimización avanzada: consistencia, repetición, escalabilidad."
          ],
          result: "Resultado Joup: entendés el café como fenómeno físico y lo controlás como profesional."
        }
      ]
    },
    {
      title: "PEDAGOGÍA DEL CAFÉ",
      description: "El café llevado a la enseñanza. Orientado a quienes buscan formar, liderar o transmitir conocimiento, trabajando comunicación técnica, estructura de clases y criterios pedagógicos aplicados al café.",
      image: pedagogiaImg,
      levels: [
        {
          name: "Programa Integral",
          subtitle: "Formación para instructores y líderes",
          intro: "Programa completo para quienes buscan enseñar, formar equipos o dirigir proyectos educativos en café. No es solo \\\"saber hacer\\\": es saber transmitir, estructurar, comunicar y sostener criterio pedagógico.",
          points: [
            "Estructura de clases: diseño de contenidos, progresión didáctica, objetivos claros.",
            "Manejo de grupos: dinámicas, atención, corrección constructiva.",
            "Comunicación técnica: claridad, precisión y adaptación al nivel del alumno.",
            "Oratoria aplicada: presencia, seguridad y manejo del discurso.",
            "Psicología del aprendizaje: cómo se aprende, cómo se retiene, cómo se aplica."
          ],
          result: "Resultado Joup: pasás de \\\"saber café\\\" a \\\"formar profesionales del café\\\"."
        }
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

        <div className="courses-list">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="course-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="course-content">
                <div className="course-text">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <button
                    className="course-more-btn"
                    onClick={() => setSelectedCourse(index)}
                  >
                    <span>Ver más</span>
                    <FaArrowRight />
                  </button>
                </div>

                <div className="course-image-wrapper">
                  <img src={course.image} alt={course.title} className="course-image" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse !== null && (
        <div className="course-modal-overlay" onClick={() => setSelectedCourse(null)}>
          <motion.div
            className="course-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="course-modal-close"
              onClick={() => setSelectedCourse(null)}
              aria-label="Cerrar"
            >
              <FaTimes />
            </button>

            <div className="course-modal-content">
              <h2 className="course-modal-title">{courses[selectedCourse].title}</h2>

              {courses[selectedCourse].levels && courses[selectedCourse].levels!.map((level, idx) => (
                <div key={idx} className="course-level-section">
                  <div className="course-level-header">
                    <h3 className="course-level-name">{level.name}</h3>
                    <p className="course-level-subtitle">{level.subtitle}</p>
                  </div>

                  <p className="course-level-intro">{level.intro}</p>

                  <div className="course-level-points">
                    <h4>Qué construís en serio:</h4>
                    <ul>
                      {level.points.map((point, pidx) => (
                        <li key={pidx}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="course-level-result">{level.result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Courses;
