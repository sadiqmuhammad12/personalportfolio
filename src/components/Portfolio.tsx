import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'IRCM, HMS-PMS & HMS-CCM Systems',
      category: 'Healthcare Practice Management System',
      description: 'HMS Practice Management System – A healthcare management web solution designed to simplify clinical and administrative tasks. As a QA Engineer at PMTAC Private Limited, I contributed to quality assurance through manual and automated testing (Cypress, Selenium), created technical documentation, managed client communications, and performed performance testing to ensure system reliability and scalability.',
      longDescription: 'HMS PMS is a robust, cloud-based Practice Management System developed to assist healthcare organizations and billing teams in managing their operations efficiently. The platform integrates multiple functionalities including patient management, billing, claims, payments, and report generation—delivering a unified solution for day-to-day medical practice management.',
      technologies: ['Selenium', 'Cypress', 'JMeter', 'Azure DevOps', 'Testiny', 'Postman', 'Chrome', 'Edge', 'Firefox'],
      image: '/images/hms-ircm.jpg',
      github: null,
      live: null,
      responsibilities: [
        'Acted as a bridge between clients and the development team, participating in requirement analysis, issue reporting, and change validation.',
        'Authored and maintained detailed product and testing documentation, including user manuals and feature descriptions.',
        'Executed comprehensive manual testing covering functionality, regression, usability, and user interface validation.',
        'Designed and implemented automated test scripts using Cypress and Selenium WebDriver, improving test efficiency and accuracy.',
        'Conducted API testing and database validation to ensure end-to-end data integrity across modules.',
        'Performed performance and load testing using JMeter, identifying system bottlenecks and optimizing performance under varying loads.',
        'Collaborated with cross-functional teams to maintain software quality and align releases with client expectations.'
      ],
      features: [
        'Patient Management – Register, update, and maintain patient profiles.',
        'Billing & Invoice Management – Create, track, and validate billing transactions.',
        'Claims Processing – Manage electronic claim submissions and track insurance responses.',
        'ERA (Electronic Remittance Advice) – Review and reconcile insurance payment details.',
        'Payment Management – Validate payment entries and ensure correct posting.',
        'Credentialing – Manage provider enrollment and credentialing processes.',
        'Patient Account Statement – Generate detailed statements for patient balances.',
        'Reporting Module – Verify accuracy of operational and financial reports.'
      ]
    },
    {
      id: 2,
      title: 'Digital Signage',
      category: 'Cloud Display Management',
      description: 'Cloud-based digital signage management platform for remote content distribution and display control.',
      longDescription: 'Developed and tested a comprehensive digital signage solution enabling remote content management, scheduling, and real-time display updates across multiple locations. Implemented robust automation testing using Playwright and Cypress for cross-browser compatibility and performance testing using JMeter for load testing scenarios.',
      technologies: ['ClickUp', 'Cypress', 'JMeter', 'Cloud APIs', 'Postman', 'Playwright', 'Slack', 'Chrome', 'Edge', 'Firefox'],
      image: '/images/digitalsignage.jpg',
      github: null,
      live: null,
      responsibilities: [
  'Collaborated with the Project Manager and development team to understand project requirements, workflows, and user scenarios.',
  'Conducted manual testing to verify content upload, scheduling, playback, and user management functionalities.',
  'Performed API testing using Postman to validate backend integrations and ensure accurate communication between the portal and media devices.',
  'Executed performance and load testing using JMeter to analyze system responsiveness under multiple concurrent users and media uploads.',
  'Managed QA activities and task tracking through ClickUp, ensuring clear reporting and comprehensive test coverage.',
  'Maintained daily communication and test updates with the team using Slack for efficient coordination.',
  'Conducted demo sessions with the Project Manager to showcase test progress, validate new releases, and provide actionable feedback to the development team.',
  'Created and maintained documentation, including test cases, test results, and issue reports.'
],

      features: [
  'User Management – Add, edit, and assign user roles for content administration.',
  'Content Upload & Scheduling – Upload multimedia files and schedule content by date, time, or location.',
  'Display Management – Connect and manage multiple digital screens remotely.',
  'Playlist Configuration – Create, organize, and assign playlists to targeted displays.',
  'Real-Time Monitoring – Track active displays and analyze content performance in real time.',
  'Reporting & Logs – Validate user activity logs and system-generated reports for accuracy.'
],

    },
    {
      id: 3,
      title: 'Credit Butterfly',
      category: 'Credit Assessment System',
      description: 'Credit Butterfly Platform – A next-gen AI-powered credit-repair SaaS solution. As SQA Engineer at Codistan Ventures - Digital Marketing Agency in Pakistan, I drove comprehensive QA processes including manual and automated testing (Cypress), API testing (Postman), performance testing (JMeter), documentation (user stories/epics, acceptance criteria), task-tracking (ClickUp), communications via Slack, and delivered demos and reports to project manager and clients.',
      longDescription: 'Credit Butterfly is a sophisticated SaaS platform that leverages AI/ML to deliver personalized Credit Action Plans, identify hidden Fair Credit Reporting Act (FCRA) violations, automate credit-report imports, dispute letter generation, and provide a scalable portal for credit-repair businesses. The system supports: 1-click credit report import, AI-driven analysis, state-specific compliance workflows, user/affiliate portals and detailed analytics dashboards.',
      technologies: ['Cypress (UI)', 'JMeter', 'ClickUp', 'Slack', 'Excel/TestRail', 'Traceability' , 'Matrix', 'role-based user permissions', 'Chrome', 'Edge', 'Firefox'],
      image: '/images/creditbutterfly.jpg',
      github: null,
      live: null,
      responsibilities: [
  'Collaborated with the Project Manager and clients to define functional requirements, business rules, and compliance criteria; conducted regular meetings and demo sessions to present test results and release readiness.',
  'Created detailed documentation including epics, user stories, and acceptance criteria for key features (e.g., “As a credit-repair user, I can upload a credit report and receive a personalized action plan within 60 seconds”).',
  'Maintained comprehensive QA documentation, including test plans, traceability matrix, test cases (manual and automation), test execution reports, defect logs, and metrics dashboards.',
  'Performed manual testing covering functional, regression, UAT, and UI testing across modules such as report import, action-plan generation, FCRA violation tracker, affiliate portal, client dashboard, and user management.',
  'Developed and maintained automation scripts using Cypress for UI and end-to-end testing, and Postman for back-end API validation (credit-report import endpoints, AI-analysis endpoints, dispute letter generation).',
  'Executed performance and load testing using JMeter to simulate concurrent users importing reports, generating plans, and accessing the portal; analyzed response times, resource utilization, and identified bottlenecks.',
  'Utilized ClickUp to manage QA tasks, sprints, and backlog items, and coordinated through Slack for real-time communication, triage, and progress updates with stakeholders.',
  'Delivered periodic reports to management and clients, including coverage statistics, defect trend analysis, release readiness, and performance outcomes, along with recommendations for process improvements.',
  'Ensured compliance with security and regulatory standards, including data encryption, FCRA tracking, and audit log validation.'
],

      features: [
  'Credit Report Import – One-click upload of credit bureau data with validation of data accuracy and completeness.',
  'AI Credit Action Plan Generation – Generate personalized credit-repair strategies within seconds; verify correctness, customization, and affiliate link mapping.',
  'FCRA Violation Tracker – Identify and flag potential compliance violations with integrated referral and monetization workflows.',
  'User & Affiliate Portal – Provide role-based access for users and affiliates, including onboarding, document uploads, contract generation, and e-signatures.',
  'Dashboard & Analytics – Display real-time metrics on clients, generated plans, flagged violations, and revenue tracking.',
  'Compliance & Security Modules – Enforce state-specific agreements, encryption, audit logs, and granular access controls.',
  'Performance Scenarios – Simulate concurrent client imports, bulk AI-analysis jobs, and high-volume user operations to validate performance and scalability.'
],

    },
    {
      id: 4,
      title: 'Safety Connect',
      category: 'Emergency Response Platform',
      description: 'Emergency response and safety management platform with real-time communication and location tracking.',
      longDescription: 'Developed and tested a comprehensive emergency response platform featuring real-time communication, location tracking, and emergency protocol management. Implemented extensive automation testing using Cypress and Playwright, along with API testing using Postman for emergency service integrations.',
      technologies: ['Cypress', 'Playwright', 'Postman', 'Real-time APIs', 'Location Services', 'Emergency Protocols'],
      image: '/api/placeholder/600/400',
      github: null,
      live: null,
      responsibilities: [
        'Acted as a bridge between clients and the development team, participating in requirement analysis, issue reporting, and change validation.',
        'Authored and maintained detailed product and testing documentation, including user manuals and feature descriptions.',
        'Executed comprehensive manual testing covering functionality, regression, usability, and user interface validation.',
        'Designed and implemented automated test scripts using Cypress and Selenium WebDriver, improving test efficiency and accuracy.',
        'Conducted API testing and database validation to ensure end-to-end data integrity across modules.',
        'Performed performance and load testing using JMeter, identifying system bottlenecks and optimizing performance under varying loads.',
        'Collaborated with cross-functional teams to maintain software quality and align releases with client expectations.'
      ],
      features: [
        'Real-time Emergency Alerts',
        'Location-based Services',
        'Emergency Protocol Management',
        'Multi-channel Communication',
        'Real-time Testing Scenarios',
        'Emergency Service Integration'
      ]
    },
    {
      id: 5,
      title: 'Dhartee.pk',
      category: 'Real Estate Web Application',
      description: 'Comprehensive real estate platform with property listings, search functionality, and user management.',
      longDescription: 'Led QA operations for a full-featured real estate web application including property listings, advanced search functionality, user authentication, and property management features. Implemented comprehensive testing strategy covering manual testing, automation testing with Selenium, and API testing with Postman.',
      technologies: ['Selenium', 'Postman', 'Jira', 'Testiny', 'Real Estate APIs', 'Property Management'],
      image: '/api/placeholder/600/400',
      github: null,
      live: null,
      responsibilities: [
        'Acted as a bridge between clients and the development team, participating in requirement analysis, issue reporting, and change validation.',
        'Authored and maintained detailed product and testing documentation, including user manuals and feature descriptions.',
        'Executed comprehensive manual testing covering functionality, regression, usability, and user interface validation.',
        'Designed and implemented automated test scripts using Cypress and Selenium WebDriver, improving test efficiency and accuracy.',
        'Conducted API testing and database validation to ensure end-to-end data integrity across modules.',
        'Performed performance and load testing using JMeter, identifying system bottlenecks and optimizing performance under varying loads.',
        'Collaborated with cross-functional teams to maintain software quality and align releases with client expectations.'
      ],
      features: [
        'Property Listing Management',
        'Advanced Search & Filtering',
        'User Authentication & Authorization',
        'Property Image Management',
        'Real Estate API Integration',
        'User Experience Testing'
      ]
    },
    {
      id: 6,
      title: 'DesignFiles',
      category: 'Home Design & Visualization Platform',
      description: 'Interactive home design and visualization platform with 3D modeling and design collaboration features.',
      longDescription: 'Developed and tested a comprehensive home design platform featuring 3D visualization, design collaboration tools, and interactive design elements. Implemented extensive testing including UI/UX testing, performance testing for 3D rendering, and integration testing for design tools and collaboration features.',
      technologies: ['Cypress', 'Playwright', '3D APIs', 'Design Tools', 'Collaboration Features', 'Visualization'],
      image: '/images/designfiles.jpg',
      github: null,
      live: null,
      responsibilities: [
        'Acted as a bridge between clients and the development team, participating in requirement analysis, issue reporting, and change validation.',
        'Authored and maintained detailed product and testing documentation, including user manuals and feature descriptions.',
        'Executed comprehensive manual testing covering functionality, regression, usability, and user interface validation.',
        'Designed and implemented automated test scripts using Cypress and Selenium WebDriver, improving test efficiency and accuracy.',
        'Conducted API testing and database validation to ensure end-to-end data integrity across modules.',
        'Performed performance and load testing using JMeter, identifying system bottlenecks and optimizing performance under varying loads.',
        'Collaborated with cross-functional teams to maintain software quality and align releases with client expectations.'
      ],
      features: [
        '3D Design Visualization',
        'Collaborative Design Tools',
        'Interactive Design Elements',
        'Design Template Management',
        'Real-time Collaboration',
        'Performance Optimization for 3D'
      ]
    },
     {
      id: 7,
      title: 'IRCM-PMS',
      category: 'Healthcare Practice Management System',
      description: 'IRCM Practice Management System – A healthcare web-based platform developed to manage patient records, billing, claims, payments, and reporting. As a Quality Assurance Engineer at PMTAC Private Limited, I performed manual, automation, and performance testing, handled client communication, created documentation, and ensured end-to-end product quality.',
      longDescription: 'IRCM is a comprehensive Practice Management System (PMS) designed for healthcare providers and billing companies to automate and optimize their day-to-day operations. The platform enables seamless management of patient data, claims, invoicing, payments, and reporting, providing accuracy, transparency, and efficiency in healthcare workflows.',
      technologies: ['Selenium WebDriver', 'Cypress', 'Postman','Swagger', 'JMeter', 'Azure DevOps', 'TestRail/Excell', 'MySQL/SQL Server', 'Testiny', 'Chrome', 'Edge', 'Firefox'],
      
      image: '/images/ircm.jpg',
      github: null,
      live: null,
      responsibilities: [
        'Handled client communication for requirement understanding, issue reporting, and validation of new releases.',
        'Created and maintained comprehensive product documentation, including feature descriptions, workflows, and client-specific manuals.',
        'Designed and executed detailed manual test cases covering functional, regression, smoke, and UI testing.',
        'Developed and maintained automation test scripts using Cypress and Selenium WebDriver to enhance regression coverage and reduce testing time.',
        'Conducted API and database testing to validate data flow, integrity, and accuracy between modules.',
        'Performed performance testing using JMeter to measure response time, load handling, and system scalability.',
        'Collaborated with development and business teams to ensure high-quality, timely product releases.'
      ],

      features: [
        'Patient Management – Manage patient records and demographics.',
        'Invoice Management – Generate, track, and validate medical invoices.',
        'Claim Submission – Submit and monitor insurance claims electronically.',
        'ERA (Electronic Remittance Advice) – Process and reconcile payment and denial information.',
        'Payment Posting – Record and verify payments and adjustments.',
        'Credentialing – Manage provider credentialing and enrollment workflows.',
        'Patient Account Statement – Generate statements and balance summaries.',
        'Reports – Validate operational and financial reports for accuracy.'
      ]
    },
     {
      id: 8,
      title: 'HMS-CCM',
      category: 'Chronic Care Management System',
      description: 'HMS CCM Dashboard – A healthcare management web platform focused on Chronic Care Management (CCM) workflows. As a Quality Assurance Engineer at PMTAC Private Limited, I was responsible for validating patient dashboards, care plan tracking, billing, and reporting modules through manual, automation (Cypress, Selenium), and performance testing while maintaining client documentation and communication.',
      longDescription: 'HMS CCM Dashboard is a specialized healthcare management system designed to support Chronic Care Management (CCM) operations for healthcare providers and medical practices. The system helps clinicians and administrators efficiently manage patient monitoring, care plans, billing, and performance tracking within a centralized web-based application. The application enables providers to view patient progress, care plan completion rates, and service status through an intuitive and data-driven dashboard',
      technologies: ['Selenium WebDriver', 'Cypress', 'Postman','Swagger', 'JMeter', 'Azure DevOps', 'TestRail/Excell', 'MySQL/SQL Server', 'Testiny', 'Chrome', 'Edge', 'Firefox'],
      image: '/images/hmsccm.jpg',
      github: null,
      live: null,
      responsibilities: [
          'Participated in client discussions to understand CCM workflows and requirements.',
          'Prepared detailed test documentation, including user stories, test plans, and validation reports.',
          'Performed manual testing of modules such as patient status, care plan completion, billing, and provider dashboard analytics.',
          'Designed and executed automated test cases using Cypress and Selenium WebDriver to verify UI and workflow consistency.',
          'Conducted API and database testing to validate real-time data synchronization between patient and provider dashboards.',
          'Executed performance testing using JMeter to ensure smooth operation under multiple concurrent user sessions.',
          'Collaborated with cross-functional teams for issue resolution and release verification.'
        ],

      features: [
        'Provider Dashboard – Overview of patient activity, care plan progress, and service time logs.',
        'Patient Management – Manage patient information, activation, and assignment to providers.',
        'Care Plan Tracking – Monitor approved, unapproved, complete, and incomplete care plans.',
        'Monthly CCM Services – Track completed and pending CCM services by provider.',
        'Billing & Payment – Validate billing transactions and ensure financial reconciliation.',
        'Reporting & Analytics – Verify accuracy of operational and performance metrics.'
      ]
    },

  ];

  const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-lg text-primary-600 font-semibold">{project.category}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Description</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.longDescription}</p>

                 <h4 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities & Contribution</h4>
                <ul className="space-y-2 mb-6">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>


                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my recent projects and the technologies I've worked with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-primary-600 font-semibold">{project.category}</span>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
