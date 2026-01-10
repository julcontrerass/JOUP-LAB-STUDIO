import { motion } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/courses.css';
import fundamentosImg from '../assets/images/fundamentals-course.png';
import espressoImg from '../assets/images/espresso-course.png';
import sensoryImg from '../assets/images/sensory-course.png';
import filtradosImg from '../assets/images/filtered-course.png';
import latteArtImg from '../assets/images/latte-art-course.png';
import procesamientoImg from '../assets/images/processing-course.png';
import cienciaImg from '../assets/images/science-course.png';
import pedagogiaImg from '../assets/images/pedagogy-course.png';

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
  const { t } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses: Course[] = [
    {
      title: t('coursesContent.fundamentals.title'),
      description: t('coursesContent.fundamentals.description'),
      image: fundamentosImg,
      levels: [
        {
          name: t('coursesContent.fundamentals.intermediate.name'),
          subtitle: t('coursesContent.fundamentals.intermediate.subtitle'),
          intro: t('coursesContent.fundamentals.intermediate.intro'),
          points: t('coursesContent.fundamentals.intermediate.points', { returnObjects: true }) as string[],
          result: t('coursesContent.fundamentals.intermediate.result')
        },
        {
          name: t('coursesContent.fundamentals.advanced.name'),
          subtitle: t('coursesContent.fundamentals.advanced.subtitle'),
          intro: t('coursesContent.fundamentals.advanced.intro'),
          points: t('coursesContent.fundamentals.advanced.points', { returnObjects: true }) as string[],
          result: t('coursesContent.fundamentals.advanced.result')
        }
      ]
    },
    {
      title: t('coursesContent.espresso.title'),
      description: t('coursesContent.espresso.description'),
      image: espressoImg,
      levels: [
        {
          name: t('coursesContent.espresso.intermediate.name'),
          subtitle: t('coursesContent.espresso.intermediate.subtitle'),
          intro: t('coursesContent.espresso.intermediate.intro'),
          points: t('coursesContent.espresso.intermediate.points', { returnObjects: true }) as string[],
          result: t('coursesContent.espresso.intermediate.result')
        },
        {
          name: t('coursesContent.espresso.advanced.name'),
          subtitle: t('coursesContent.espresso.advanced.subtitle'),
          intro: t('coursesContent.espresso.advanced.intro'),
          points: t('coursesContent.espresso.advanced.points', { returnObjects: true }) as string[],
          result: t('coursesContent.espresso.advanced.result')
        }
      ]
    },
    {
      title: t('coursesContent.sensory.title'),
      description: t('coursesContent.sensory.description'),
      image: sensoryImg,
      levels: [
        {
          name: t('coursesContent.sensory.intermediate.name'),
          subtitle: t('coursesContent.sensory.intermediate.subtitle'),
          intro: t('coursesContent.sensory.intermediate.intro'),
          points: t('coursesContent.sensory.intermediate.points', { returnObjects: true }) as string[],
          result: t('coursesContent.sensory.intermediate.result')
        },
        {
          name: t('coursesContent.sensory.advanced.name'),
          subtitle: t('coursesContent.sensory.advanced.subtitle'),
          intro: t('coursesContent.sensory.advanced.intro'),
          points: t('coursesContent.sensory.advanced.points', { returnObjects: true }) as string[],
          result: t('coursesContent.sensory.advanced.result')
        }
      ]
    },
    {
      title: t('coursesContent.filtered.title'),
      description: t('coursesContent.filtered.description'),
      image: filtradosImg,
      levels: [
        {
          name: t('coursesContent.filtered.intermediate.name'),
          subtitle: t('coursesContent.filtered.intermediate.subtitle'),
          intro: t('coursesContent.filtered.intermediate.intro'),
          points: t('coursesContent.filtered.intermediate.points', { returnObjects: true }) as string[],
          result: t('coursesContent.filtered.intermediate.result')
        },
        {
          name: t('coursesContent.filtered.advanced.name'),
          subtitle: t('coursesContent.filtered.advanced.subtitle'),
          intro: t('coursesContent.filtered.advanced.intro'),
          points: t('coursesContent.filtered.advanced.points', { returnObjects: true }) as string[],
          result: t('coursesContent.filtered.advanced.result')
        }
      ]
    },
    {
      title: t('coursesContent.latteArt.title'),
      description: t('coursesContent.latteArt.description'),
      image: latteArtImg,
      levels: [
        {
          name: t('coursesContent.latteArt.intermediate.name'),
          subtitle: t('coursesContent.latteArt.intermediate.subtitle'),
          intro: t('coursesContent.latteArt.intermediate.intro'),
          points: t('coursesContent.latteArt.intermediate.points', { returnObjects: true }) as string[],
          result: t('coursesContent.latteArt.intermediate.result')
        },
        {
          name: t('coursesContent.latteArt.advanced.name'),
          subtitle: t('coursesContent.latteArt.advanced.subtitle'),
          intro: t('coursesContent.latteArt.advanced.intro'),
          points: t('coursesContent.latteArt.advanced.points', { returnObjects: true }) as string[],
          result: t('coursesContent.latteArt.advanced.result')
        }
      ]
    },
    {
      title: t('coursesContent.processing.title'),
      description: t('coursesContent.processing.description'),
      image: procesamientoImg,
      levels: [
        {
          name: t('coursesContent.processing.intermediate.name'),
          subtitle: t('coursesContent.processing.intermediate.subtitle'),
          intro: t('coursesContent.processing.intermediate.intro'),
          points: t('coursesContent.processing.intermediate.points', { returnObjects: true }) as string[],
          result: t('coursesContent.processing.intermediate.result')
        },
        {
          name: t('coursesContent.processing.advanced.name'),
          subtitle: t('coursesContent.processing.advanced.subtitle'),
          intro: t('coursesContent.processing.advanced.intro'),
          points: t('coursesContent.processing.advanced.points', { returnObjects: true }) as string[],
          result: t('coursesContent.processing.advanced.result')
        }
      ]
    },
    {
      title: t('coursesContent.science.title'),
      description: t('coursesContent.science.description'),
      image: cienciaImg,
      levels: [
        {
          name: t('coursesContent.science.intermediate.name'),
          subtitle: t('coursesContent.science.intermediate.subtitle'),
          intro: t('coursesContent.science.intermediate.intro'),
          points: t('coursesContent.science.intermediate.points', { returnObjects: true }) as string[],
          result: t('coursesContent.science.intermediate.result')
        },
        {
          name: t('coursesContent.science.advanced.name'),
          subtitle: t('coursesContent.science.advanced.subtitle'),
          intro: t('coursesContent.science.advanced.intro'),
          points: t('coursesContent.science.advanced.points', { returnObjects: true }) as string[],
          result: t('coursesContent.science.advanced.result')
        }
      ]
    },
    {
      title: t('coursesContent.pedagogy.title'),
      description: t('coursesContent.pedagogy.description'),
      image: pedagogiaImg,
      levels: [
        {
          name: t('coursesContent.pedagogy.integralProgram.name'),
          subtitle: t('coursesContent.pedagogy.integralProgram.subtitle'),
          intro: t('coursesContent.pedagogy.integralProgram.intro'),
          points: t('coursesContent.pedagogy.integralProgram.points', { returnObjects: true }) as string[],
          result: t('coursesContent.pedagogy.integralProgram.result')
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
          <h2 className="courses-title">{t('courses.sectionTitle')}</h2>
          <p className="courses-subtitle">{t('courses.sectionSubtitle')}</p>
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
                    <span>{t('courses.viewMore')}</span>
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
              aria-label={t('courses.close')}
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
                    <h4>{t('courses.whatYouBuild')}</h4>
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
