import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Code, TestTube, GitBranch, Users } from 'lucide-react';
import { SkillCategory } from '../types';

const About: React.FC = () => {
  const skills: SkillCategory[] = [
    {
      category: 'Testing & QA',
      icon: <TestTube className="w-6 h-6" />,
      items: [
        'Automation Testing (Cypress, Selenium, Playwright)',
        'API Testing (Postman)',
        'Performance Testing (JMeter)',
        'Manual Testing & Test Planning',
        'Test Strategy Development',
        'Defect Management & Root Cause Analysis'
      ]
    },
    {
      category: 'Development',
      icon: <Code className="w-6 h-6" />,
      items: [
        'Node.js & Express.js',
        'MongoDB & SQL',
        'RESTful API Development',
        'Backend Architecture',
        'Database Schema Design',
        'API Integrations'
      ]
    },
    {
      category: 'DevOps & CI/CD',
      icon: <GitBranch className="w-6 h-6" />,
      items: [
        'Azure DevOps',
        'CI/CD Pipeline Management',
        'Release Management',
        'Quality Gates Implementation',
        'Version Control (Git)',
        'Build Validation'
      ]
    },
    {
      category: 'Project Management',
      icon: <Users className="w-6 h-6" />,
      items: [
        'Agile (Scrum & Kanban)',
        'Project Planning & Strategy',
        'Sprint Management',
        'Cross-functional Collaboration',
        'Risk Management',
        'Process Improvement'
      ]
    }
  ];

  const certifications = [
    'ISTQB Certified Tester - Foundation Level - Agile Extension',
    'Foundations of Project Management',
    'Agile Project Management',
    'Project Initiation: Starting a Successful Project',
    'Project Planning: Putting it All Together',
    'Project Execution: Running the Project',
    'Capstone: Applying Project Management in the Real World'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my background, skills, and passion for quality assurance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">SM</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sadiq Muhammad</h3>
            <p className="text-lg text-primary-600 font-semibold mb-6">
              Senior QA Engineer | Automation Specialist | Project Manager
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dynamic and results-driven Senior QA Engineer with over 3 years of experience in software quality assurance, 
              automation testing, DevOps integration, and agile project management. Currently pursuing an MS in Project 
              Management, combining technical QA expertise with leadership and process optimization to drive quality 
              delivery and organizational success in global environments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Proficient in developing and executing robust automation frameworks using Cypress, Selenium, Playwright, 
              Postman, and JMeter, with hands-on experience in Azure DevOps for CI/CD and release management. Skilled in 
              creating and maintaining comprehensive QA documentation, ensuring traceability and transparency throughout 
              the software development lifecycle.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 rounded-lg mr-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{skill.category}</h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Certifications</h4>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Education</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h5 className="font-semibold text-gray-900">Master of Science (MS) in Project Management</h5>
                  <p className="text-gray-600">Air University, Islamabad, Pakistan (2025-2026)</p>
                  <p className="text-sm text-gray-500">In Progress</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h5 className="font-semibold text-gray-900">Bachelor of Science (BSc) in Computer Software Engineering</h5>
                  <p className="text-gray-600">University of Engineering & Technology (UET) Mardan (2018-2022)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
