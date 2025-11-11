import React from 'react';
import { motion } from 'framer-motion';
import { TestTube, GitBranch, Briefcase, Target, Database, Cloud } from 'lucide-react';

type StackGroup = {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
};

const groups: StackGroup[] = [
  {
    title: 'Testing & Automation',
    icon: <TestTube className="w-6 h-6" />,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    items: [
      'Selenium WebDriver (Python)',
      'Postman (API Testing)',
      'Rest Assured (API Automation)',
      'Swagger',
      'JMeter',
      'Cypress',
      'Testiny'
    ],
  },
  {
    title: 'Version Control & CI/CD',
    icon: <GitBranch className="w-6 h-6" />,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    items: [
      'Git (Version Control)',
      'GitLab & GitHub (Repositories)',
      'Azure DevOps (CI/CD)',
      'GitHub Actions (CI/CD)'
    ],
  },
  {
    title: 'Project Management & Agile',
    icon: <Briefcase className="w-6 h-6" />,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    items: [
      'Agile (Scrum & Kanban)',
      'Jira',
      'Confluence (Documentation)',
      'TestRail (Test Management)',
      'Microsoft Project',
      'Team Leadership & Collaboration',
      'ClickUp, Asana, Trello, Zoho',
      'Slack, MS Teams, Discord'
    ],
  },
  {
    title: 'Database & Data Testing',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
    items: [
      'MySQL',
      'MongoDB',
      'SQL',
      'Data Testing & Validation',
      'Data Cleaning & Transformation',
      'Data Analysis & Visualization'
    ],
  },
  {
    title: 'Cloud Technologies',
    icon: <Cloud className="w-6 h-6" />,
    color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400',
    items: [
      'Azure DevOps (Cloud Integration)',
      'CI/CD Pipeline Management',
      'Cloud-based Testing Infrastructure'
    ],
  },
  {
    title: 'Specialties',
    icon: <Target className="w-6 h-6" />,
    color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400',
    items: [
      'Automation Frameworks',
      'API Testing',
      'Performance Testing',
      'Agile Methodologies',
      'DevOps Integration'
    ],
  },
];

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive toolkit of technologies, tools, and methodologies I leverage to ensure high-quality software delivery, efficient testing processes, and successful project outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card p-6 glass border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <motion.div
                  className={`p-3 rounded-xl ${group.color} flex-shrink-0 flex items-center justify-center`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {group.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {group.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <motion.span
                    key={`${group.title}-${itemIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.03 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;


