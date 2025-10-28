import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';

const radar = [
  { subject: 'Testing Automation', A: 92 },
  { subject: 'DevOps', A: 86 },
  { subject: 'Project Management', A: 82 },
  { subject: 'API Testing', A: 88 },
  { subject: 'CI/CD', A: 84 },
  { subject: 'Frontend', A: 70 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A snapshot of my core proficiencies across QA, automation, performance, and delivery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radar} outerRadius={110}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar dataKey="A" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {radar.map((item, idx) => (
              <div key={item.name} className="card p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-800 dark:text-gray-100 font-semibold">{item.subject}</span>
                  <span className="text-primary-600 font-bold">{item.A}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-primary-600 rounded-full"
                    style={{ width: `${item.A}%` }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


