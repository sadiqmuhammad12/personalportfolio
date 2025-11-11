import React from 'react';
import { motion } from 'framer-motion';
import { TestTube, Code, Briefcase, Users, Target } from 'lucide-react';

type ServiceItem = {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  highlights: string[];
};

const items: ServiceItem[] = [
  {
    title: 'Testing & QA',
    icon: <TestTube className="w-6 h-6" />,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    description: 'Leading the testing process with a focus on automation across UI, API, and performance. Creating robust strategies for delivering high-quality software with scalable and maintainable test cases.',
    highlights: [
      'Selenium & Cypress for UI automation',
      'Postman & JMeter for API & performance testing',
      'Manual testing for validation & usability',
      'Testiny for test case management'
    ],
  },
  {
    title: 'Quality Engineering Leadership',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    description: 'Mentoring QA teams to develop a solid testing mindset, guiding them in both manual and automated testing. Leading continuous improvement initiatives to integrate QA practices throughout the product lifecycle.',
    highlights: [
      'Team mentoring & skill development',
      'TDD & BDD advocacy',
      'QA culture integration',
      'Continuous improvement initiatives'
    ],
  },
  {
    title: 'Development & Automation',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    description: 'Implementing CI/CD automation pipelines using Azure DevOps, and GitHub Actions. Building reliable testing infrastructure with Docker to ensure environment consistency and enable continuous testing.',
    highlights: [
      'CI/CD pipeline implementation',
      'Docker-based testing infrastructure',
      'Performance & load testing',
      'Environment consistency management'
    ],
  },
  {
    title: 'Project Management',
    icon: <Briefcase className="w-6 h-6" />,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
    description: 'Providing Agile delivery leadership using Jira and ClickUp for sprint planning, retrospectives, and issue tracking. Managing risks proactively to ensure timely delivery of projects with high-quality results.',
    highlights: [
      'Agile & Scrum methodologies',
      'Sprint planning & retrospectives',
      'Risk management & mitigation',
      'Stakeholder alignment & communication'
    ],
  },
  {
    title: 'Specialties',
    icon: <Target className="w-6 h-6" />,
    color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400',
    description: 'Architecting scalable automation frameworks, specializing in API testing with Postman and Swagger, and performance testing with JMeter. Integrating testing seamlessly with deployment pipelines.',
    highlights: [
      'Automation framework architecture',
      'API testing & validation',
      'Performance & load testing',
      'DevOps integration & pipelines'
    ],
  },
];

const WhatIDo: React.FC = () => {
  return (
    <section id="what-i-do" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What <span className="text-gradient">I Do</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in quality assurance, automation, and project management to deliver exceptional software solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card p-6 glass border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className={`p-3 rounded-xl ${item.color} flex-shrink-0 flex items-center justify-center`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed flex-grow">
                {item.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                {item.highlights.map((highlight, highlightIndex) => (
                  <motion.div
                    key={highlightIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + highlightIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {highlight}
                    </span>
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

export default WhatIDo;


