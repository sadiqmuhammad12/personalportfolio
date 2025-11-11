import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { SocialLink } from '../types';

const Footer: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About Me', href: '#about' },
      { name: 'What I Do', href: '#what-i-do' },
      { name: 'Certifications & Education', href: '#certifications' },
      { name: 'Tech Stack', href: '#tech-stack' },
      { name: 'Career Timeline', href: '#career-timeline' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' }
    ],
    'Services': [
      { name: 'Testing & QA', href: '#what-i-do' },
      { name: 'Automation (Cypress, Selenium)', href: '#tech-stack' },
      { name: 'API Testing (Postman, Swagger)', href: '#tech-stack' },
      { name: 'Performance Testing (JMeter)', href: '#tech-stack' },
      { name: 'DevOps & CI/CD (Azure DevOps, Actions)', href: '#tech-stack' },
      { name: 'Project Management (Agile/Scrum)', href: '#what-i-do' }
    ]
  };

  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/sadiq22muhammad/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/sadiqmuhammad12/',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:sadiqmuhammad795@gmail.com',
      color: 'hover:text-primary-600'
    }
  ];

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute -top-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-primary-500 blur-[130px]" />
        <div className="absolute -bottom-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-500 blur-[130px]" />
      </div>
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600/90 rounded-lg flex items-center justify-center shadow-glass ring-1 ring-white/10">
                  <span className="text-white font-bold text-xl">SM</span>
                </div>
                <span className="text-xl font-bold">Sadiq Muhammad</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Senior QA Engineer specializing in automation testing, DevOps integration, 
                and agile project management. Passionate about delivering quality solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 text-gray-300 ring-1 ring-white/5 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white/90">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 px-2 py-1 rounded-md hover:bg-white/5 inline-flex"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section removed by user request */}

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400"
            >
              <span>© {currentYear} Sadiq Muhammad. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>and passion for quality.</span>
            </motion.div>

            {/* Removed policy links by user request */}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
