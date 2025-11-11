import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CalendarDays } from 'lucide-react';

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: 'PMTACT Pvt. Ltd',
    role: 'Software Quality Assurance Engineer',
    location: 'Rawalpindi',
    period: 'Dec 2023 – Present',
    bullets: [
      'Collaborated with clients and internal teams to define QA goals, timelines, and acceptance criteria aligned with project objectives.',
      'Designed and executed detailed test plans, scripts, and test cases to improve testing coverage and product reliability.',
      'Managed Azure DevOps pipelines for CI/CD integration and sprint tracking, ensuring smooth and traceable releases.',
      'Developed and implemented automation testing using Cypress and Selenium, optimizing testing efficiency.',
      'Authored comprehensive QA documentation, including test reports, release notes, and defect logs for stakeholder review.',
      'Facilitated sprint reviews and retrospectives to reinforce an Agile testing culture and continuous improvement.',
    ],
  },
  {
    company: 'Codistan Ventures',
    role: 'Software Quality Assurance Engineer',
    location: 'Islamabad',
    period: 'Jan 2023 – Dec 2023',
    bullets: [
      'Led QA operations for projects including Dhartee.pk, Safety Connect, Digital Signage, and Credit Butterfly.',
      'Conducted manual and automation smoke, regression, integration, exploratory, and API testing to ensure product quality.',
      'Created and maintained QA documentation, including test cases, bug reports, and UAT records to ensure traceability.',
      'Coordinated with developers to reproduce and resolve defects, improving communication and testing turnaround time.',
      'Utilized Jira, Testiny, and Asana for task management, bug tracking, and testing documentation.',
      'Supported Agile ceremonies and showcased process improvements through enhanced communication and documentation.',
    ],
  },
  {
    company: 'Workbox-SMC Pvt. Ltd',
    role: 'SQA Engineer (Intern)',
    location: 'Peshawar',
    period: 'Aug 2022 – Dec 2022',
    bullets: [
      'Performed manual and functional testing for web and mobile applications.',
      'Executed regression, smoke, sanity, and exploratory testing across different environments.',
      'Assisted in creating and maintaining test documentation and bug tracking records.',
      'Collaborated with developers to reproduce and verify issues to ensure accurate defect resolution.',
    ],
  },
  {
    company: 'Home Tutor Club',
    role: 'Backend Developer (Remote)',
    location: 'Islamabad',
    period: 'Jan 2022 – May 2022',
    bullets: [
      'Developed and maintained backend APIs using Node.js, Express.js, and MongoDB.',
      'Designed database schemas and implemented API integrations to ensure stability and performance.',
      'Documented backend logic and integration workflows for QA and development reference.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="career-timeline" className="section-padding bg-gradient-to-b from-white via-blue-50/40 to-white dark:from-gray-950 dark:via-slate-900 dark:to-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 font-semibold mb-4">
            <Briefcase className="w-4 h-4" />
            Career Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A progression of roles that blend quality engineering, automation, and backend development across high-impact teams.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 via-primary-200 to-transparent dark:from-primary-800 dark:via-primary-700/60 pointer-events-none" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-3 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-lg ring-4 ring-primary-100/60 dark:ring-primary-900/40">
                  <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-300" />
                </div>

                <div className="rounded-2xl bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm shadow-xl p-6 border border-gray-200/70 dark:border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-primary-600 dark:text-primary-300 font-medium">{exp.company}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="hidden md:inline">•</span>
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <div className="md:hidden flex items-center gap-2 text-xs font-medium text-primary-600 dark:text-primary-300 bg-primary-100/70 dark:bg-primary-900/40 px-3 py-1 rounded-full whitespace-nowrap">
                      <CalendarDays className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;