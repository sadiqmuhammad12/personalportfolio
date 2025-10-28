import React from 'react';
import { motion } from 'framer-motion';
import { TestTube, Code, Briefcase, Users } from 'lucide-react';

const items = [
  {
    title: 'Testing & QA',
    icon: <TestTube className="w-7 h-7" />,
    desc: 'Automation-first QA across UI, API, and performance with robust strategies and tooling.',
  },
  {
    title: 'Development & Automation',
    icon: <Code className="w-7 h-7" />,
    desc: 'Testable services and tooling to enable CI/CD, observability, and reliability.',
  },
  {
    title: 'Project Management',
    icon: <Briefcase className="w-7 h-7" />,
    desc: 'Delivery leadership with Agile practices, risk management, and stakeholder alignment.',
  },
  {
    title: 'Quality Engineering Leadership',
    icon: <Users className="w-7 h-7" />,
    desc: 'Scaling QA culture, mentoring teams, and driving continuous improvement across products.',
  },
];

const WhatIDo: React.FC = () => {
  return (
    <section id="what-i-do" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
            What <span className="text-gradient">I Do</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card glass p-6 border border-white/50 dark:border-white/10 hover:shadow-glass hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div className="p-3 rounded-xl bg-primary-100 text-primary-700" whileHover={{ rotate: 5, scale: 1.05 }}>
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;


