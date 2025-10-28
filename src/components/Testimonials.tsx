import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Sadiq brings a rare blend of QA depth and product mindset. His test strategies consistently improved release quality.',
    author: 'Aisha Khan',
    role: 'Project Manager, PMTAC',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    quote:
      'Thorough, collaborative, and automation-first. He elevated our testing maturity and reduced regression time significantly.',
    author: 'Omar Farooq',
    role: 'Engineering Lead, Codistan',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    quote:
      'A dependable QA leader who understands business outcomes and builds the right guardrails.',
    author: 'Sarah Ahmed',
    role: 'Founder, Startup Client',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Feedback from teams I have partnered with</p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {[0,1,2].map((offset) => {
              const t = testimonials[(index + offset) % testimonials.length];
              return (
                <AnimatePresence key={offset} mode="wait">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="card p-6 text-center"
                  >
                    <p className="text-gray-800 dark:text-gray-100 leading-relaxed mb-4">“{t.quote}”</p>
                    <div className="flex items-center justify-center gap-3">
                      <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full" loading="lazy" />
                      <div className="text-left">
                        <div className="text-sm font-semibold text-primary-600">{t.author}</div>
                        <div className="text-xs text-gray-500">{t.role}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-1 text-yellow-400">
                      {[0,1,2,3,4].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


