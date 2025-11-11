import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, ArrowUpRight, CalendarDays } from 'lucide-react';

type SvgProps = { className?: string };

const CapIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    {/* Mortarboard */}
    <path
      d="M4 22l28-10 28 10-28 10L4 22z"
      fill="#0f172a"
    />
    {/* Rim shadow */}
    <path
      d="M32 32L4 22l6-2 22 8 22-8 6 2-28 10z"
      fill="#1f2937"
    />
    {/* Headband */}
    <path
      d="M16 30v8c0 6 10 10 16 10s16-4 16-10v-8l-16 6-16-6z"
      fill="#111827"
    />
    {/* Tassel string */}
    <path
      d="M38 16v14"
      stroke="#f59e0b"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Tassel knot and drop */}
    <circle cx="38" cy="30" r="3" fill="#f59e0b" />
    <path
      d="M38 33c4 6 4 10 0 14-4-4-4-8 0-14z"
      fill="#f59e0b"
    />
  </svg>
);

type Certification = {
  title: string;
  url?: string;
};

const certifications: Certification[] = [
  {
    title: 'ISTQB Certified Tester – Foundation Level – Agile Extension'
  },
  {
    title: 'Foundations of Project Management',
    url: 'https://www.coursera.org/account/accomplishments/verify/XSYBR7VYULUZ'
  },
  {
    title: 'Agile Project Management',
    url: 'https://www.coursera.org/account/accomplishments/verify/6AZS5MLXLXR8'
  },
  {
    title: 'Project Initiation: Starting a Successful Project',
    url: 'https://www.coursera.org/account/accomplishments/verify/2BEAZKXAWJ5H'
  },
  {
    title: 'Project Planning: Putting it All Together',
    url: 'https://www.coursera.org/account/accomplishments/verify/HMF842KT6KFV'
  },
  {
    title: 'Project Execution: Running the Project',
    url: 'https://www.coursera.org/account/accomplishments/verify/BUF3JYZXWYDQ'
  },
  {
    title: 'Capstone: Applying Project Management in the Real World'
  }
];

type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  status?: string | null;
  cgpa?: string | null;
};

const education: EducationEntry[] = [
  {
    degree: 'Master of Science (MS) in Project Management',
    institution: 'Air University, Islamabad, Pakistan',
    period: '2025 – Present',
    status: 'In Progress'
  },
  {
    degree: 'Bachelor of Science (BSc) in Computer Software Engineering',
    institution: 'University of Engineering & Technology (UET) Mardan',
    period: '2018 – 2022',
    status: null,
    cgpa: '3.20 / 4.00'
  }
];

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 opacity-80" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-indigo-500/30 text-primary-700 dark:text-primary-200 font-medium mb-4">
            <Award className="w-5 h-5 text-primary-600 dark:text-primary-200" />
            Recognitions & Academics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications <span className="text-gradient">& Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous professional development backed by internationally recognized certifications and formal education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-white/80 p-[1px] shadow-2xl"
          >
            <div className="rounded-3xl bg-white/95 dark:bg-slate-950/75 backdrop-blur-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg">
                  <div className="absolute inset-0 rounded-2xl bg-white/70 blur-md opacity-90" />
                  <div className="relative flex items-center justify-center w-full h-full rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur">
                    <Award className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Professional Certifications
                </h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((certification, index) => (
                  <motion.li
                    key={certification.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-indigo-500 text-white mt-0.5 shadow-sm">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                    {certification.url ? (
                      <a
                        href={certification.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                      >
                        {certification.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {certification.title}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-200/80 via-white to-fuchsia-200/80 p-[1px] shadow-2xl"
          >
            <div className="rounded-3xl bg-white/95 dark:bg-slate-950/75 backdrop-blur-sm p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/45 via-violet-500/35 to-sky-500/50 blur-md opacity-90" />
                  <div className="relative flex items-center justify-center w-full h-full rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur">
                    <CapIcon className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Academic Journey
                </h3>
              </div>

              <div className="space-y-5">
                {education.map((entry, index) => (
                  <motion.div
                    key={entry.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white/85 dark:bg-gray-900/60 p-6 shadow-inner backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {entry.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">{entry.institution}</p>
                        {entry.cgpa && (
                          <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                            <CheckCircle className="w-4 h-4" />
                            CGPA: {entry.cgpa}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-primary-600 dark:text-primary-300 bg-primary-100/60 dark:bg-primary-900/40 px-2.5 md:px-3 py-0.5 md:py-1 rounded-full whitespace-nowrap">
                        <CalendarDays className="w-4 h-4" />
                        <span>{entry.period}</span>
                      </div>
                    </div>
                    {entry.status && (
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                        {entry.status}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;


