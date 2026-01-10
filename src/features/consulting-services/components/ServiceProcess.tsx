import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaComments, FaChartBar, FaLightbulb, FaCog, FaCoffee, FaUsers, FaWrench,
  FaRocket, FaRuler, FaPalette, FaCheck, FaClipboardList, FaGraduationCap,
  FaEye, FaHandshake, FaCheckCircle, FaSearch, FaChartLine, FaAward,
  FaCheckDouble, FaCalculator, FaExclamationTriangle, FaSlidersH, FaClipboardCheck,
  FaSyncAlt, FaFileAlt, FaClock, FaBook, FaList, FaBullseye, FaFilter, FaCogs,
  FaRoute, FaHourglass, FaCommentDots, FaStar, FaSync, FaUserCheck
} from 'react-icons/fa';
import '../styles/service-process.css';

type TabType = 'accompaniment' | 'architecture' | 'training' | 'curingprocesshopperselection' | 'coffeeWasteCostOptimization' | 'espressoBrewStandardProcess' | 'menuDesignAndOptimization' | 'customerExperienceAndService' | 'monitoringAndContinuousImprovement';

const HowWeWork = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>('accompaniment');

  // Icon mapping function
  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      FaComments: <FaComments />,
      FaChartBar: <FaChartBar />,
      FaLightbulb: <FaLightbulb />,
      FaCog: <FaCog />,
      FaCoffee: <FaCoffee />,
      FaUsers: <FaUsers />,
      FaWrench: <FaWrench />,
      FaRocket: <FaRocket />,
      FaRuler: <FaRuler />,
      FaPalette: <FaPalette />,
      FaCheck: <FaCheck />,
      FaClipboardList: <FaClipboardList />,
      FaGraduationCap: <FaGraduationCap />,
      FaEye: <FaEye />,
      FaHandshake: <FaHandshake />,
      FaCheckCircle: <FaCheckCircle />,
      FaSearch: <FaSearch />,
      FaChartLine: <FaChartLine />,
      FaAward: <FaAward />,
      FaCheckDouble: <FaCheckDouble />,
      FaCalculator: <FaCalculator />,
      FaExclamationTriangle: <FaExclamationTriangle />,
      FaSlidersH: <FaSlidersH />,
      FaClipboardCheck: <FaClipboardCheck />,
      FaSyncAlt: <FaSyncAlt />,
      FaFileAlt: <FaFileAlt />,
      FaClock: <FaClock />,
      FaBook: <FaBook />,
      FaList: <FaList />,
      FaBullseye: <FaBullseye />,
      FaFilter: <FaFilter />,
      FaCogs: <FaCogs />,
      FaRoute: <FaRoute />,
      FaHourglass: <FaHourglass />,
      FaCommentDots: <FaCommentDots />,
      FaStar: <FaStar />,
      FaSync: <FaSync />,
      FaUserCheck: <FaUserCheck />
    };
    return iconMap[iconName] || <FaComments />;
  };

  // Helper function to create step arrays
  const createStepArray = (sectionKey: string, stepCount: number) => {
    return Array.from({ length: stepCount }, (_, i) => {
      const stepNum = i + 1;
      return {
        number: t(`serviceProcess.${sectionKey}.step${stepNum}.number`),
        title: t(`serviceProcess.${sectionKey}.step${stepNum}.title`),
        description: t(`serviceProcess.${sectionKey}.step${stepNum}.description`),
        details: t(`serviceProcess.${sectionKey}.step${stepNum}.details`),
        icon: getIconComponent(t(`serviceProcess.${sectionKey}.step${stepNum}.icon`))
      };
    });
  };

  const accompanimentSteps = createStepArray('steps', 8);
  const architectureSteps = createStepArray('architectureSteps', 5);
  const trainingSteps = createStepArray('trainingSteps', 5);
  const curingSteps = createStepArray('curingSteps', 5);
  const wasteOptimizationSteps = createStepArray('wasteOptimizationSteps', 5);
  const standardizationSteps = createStepArray('standardizationSteps', 5);
  const menuOptimizationSteps = createStepArray('menuOptimizationSteps', 5);
  const customerExperienceSteps = createStepArray('customerExperienceSteps', 5);
  const monitoringSteps = createStepArray('monitoringSteps', 2);

  // Get current steps based on active tab
  const getCurrentSteps = () => {
    switch (activeTab) {
      case 'accompaniment':
        return accompanimentSteps;
      case 'architecture':
        return architectureSteps;
      case 'training':
        return trainingSteps;
      case 'curingprocesshopperselection':
        return curingSteps;
      case 'coffeeWasteCostOptimization':
        return wasteOptimizationSteps;
      case 'espressoBrewStandardProcess':
        return standardizationSteps;
      case 'menuDesignAndOptimization':
        return menuOptimizationSteps;
      case 'customerExperienceAndService':
        return customerExperienceSteps;
      case 'monitoringAndContinuousImprovement':
        return monitoringSteps;
      default:
        return accompanimentSteps;
    }
  };

  const currentSteps = getCurrentSteps();
  const currentIntro = t(`serviceProcess.${activeTab}.intro`);
  const currentSubtitle = t(`serviceProcess.${activeTab}.subtitle`);

  const tabs: TabType[] = [
    'accompaniment',
    'architecture',
    'training',
    'curingprocesshopperselection',
    'coffeeWasteCostOptimization',
    'espressoBrewStandardProcess',
    'menuDesignAndOptimization',
    'customerExperienceAndService',
    'monitoringAndContinuousImprovement'
  ];

  return (
    <section id="how-we-work" className="how-we-work-section">
      <div className="how-we-work-container">
        {/* Header Section */}
        <motion.div
          className="how-we-work-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="how-we-work-title">{t('serviceProcess.title')}</h2>
          <p className="how-we-work-description">{t('serviceProcess.description')}</p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="service-layout">
          {/* Left Sidebar - Service Menu */}
          <motion.aside
            className="service-sidebar"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="sidebar-title">{t('serviceProcess.servicesTitle')}</h3>
            <nav className="service-menu">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`service-menu-item ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="menu-item-text">{t(`serviceProcess.tabs.${tab}`)}</span>
                  <span className="menu-item-indicator">→</span>
                </button>
              ))}
            </nav>
          </motion.aside>

          {/* Right Content - Process Details */}
          <motion.div
            className="service-content"
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Section Header */}
            <div className="content-header">
              <h3 className="content-title">{t(`serviceProcess.tabs.${activeTab}`)}</h3>
              <p className="content-intro">{currentIntro}</p>
              <p className="content-subtitle">{currentSubtitle}</p>
            </div>

            {/* Steps */}
            <div className="steps-circuit">
              {currentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="circuit-step"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="step-connector" />
                  <div className="step-card">
                    <div className="step-icon">{step.icon}</div>
                    <div className="step-number">{step.number}</div>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                    <p className="step-details">{step.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
