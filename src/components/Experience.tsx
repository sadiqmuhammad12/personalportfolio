import React from 'react';
import { motion } from 'framer-motion';

type Exp = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

const experiences: Exp[] = [
  {
    company: 'PMTAC',
    role: 'Senior QA Engineer',
    period: '2023 — Present',
    bullets: [
      'Led automation strategy with Cypress and Selenium to reduce regression time',
      'Built CI quality gates and reporting in Azure DevOps',
      'Drove cross-team quality initiatives and performance testing',
    ],
  },
  {
    company: 'Codistan',
    role: 'SQA Engineer',
    period: '2022 — 2023',
    bullets: [
      'Designed end-to-end test plans and automation suites',
      'Partnered with product to align coverage with business outcomes',
      'Introduced API and load testing to release workflows',
    ],
  },
];

const Experience: React.FC = () => {
  // const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
            Experience
          </h2>
        </div>

        <div className="relative overflow-x-auto">
          <div className="flex items-stretch gap-6 min-w-[700px]">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card p-6 min-w-[320px]"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-primary-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300">• {b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


