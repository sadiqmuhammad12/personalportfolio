import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Cpu, Rocket, Terminal, Atom } from 'lucide-react';

const Hero: React.FC = () => {
  // Typewriter for headline
  const fullText = "Sadiq Muhammad — Senior QA Engineer | Automation Specialist | Project Manager";
  const [typed, setTyped] = React.useState<string>("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i += 1;
      if (i >= fullText.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, []);
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const translateSlowX = useTransform(mouseX, [0, 1], [-8, 8]);
  const translateSlowY = useTransform(mouseY, [0, 1], [-8, 8]);
  const translateMedX = useTransform(mouseX, [0, 1], [-14, 14]);
  const translateMedY = useTransform(mouseY, [0, 1], [-14, 14]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-primary-900/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Gradient blobs */}
      <motion.div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-primary-300 to-primary-500 opacity-30 dark:opacity-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-gradient-to-tr from-blue-200 to-purple-400 opacity-30 dark:opacity-10"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Floating icons layer */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div className="absolute top-24 left-10" style={{ x: translateSlowX, y: translateSlowY }}>
          <div className="p-3 rounded-xl glass">
            <Cpu className="w-6 h-6 text-primary-600" />
          </div>
        </motion.div>
        <motion.div className="absolute top-40 right-20" style={{ x: translateMedX, y: translateMedY }}>
          <div className="p-3 rounded-full glass">
            <Rocket className="w-6 h-6 text-primary-700" />
          </div>
        </motion.div>
        <motion.div className="absolute bottom-32 left-24" style={{ x: translateMedX, y: translateSlowY }}>
          <div className="p-3 rounded-xl glass">
            <Terminal className="w-6 h-6 text-primary-600" />
          </div>
        </motion.div>
        <motion.div className="absolute bottom-24 right-16" style={{ x: translateSlowX, y: translateMedY }}>
          <div className="p-3 rounded-full glass">
            <Atom className="w-6 h-6 text-primary-700" />
          </div>
        </motion.div>
      </motion.div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            <span className="text-gradient">{typed}</span>
          </motion.h1>

          {/* Subline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          >
            Crafting quality through intelligent automation and precise execution
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Dynamic and results-driven Senior QA Engineer with over 3 years of experience in software quality assurance, 
            automation testing, DevOps integration, and agile project management. Passionate about delivering 
            scalable, reliable, and high-performing products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="btn-primary text-lg px-8 py-4 ring-0 hover:ring-8 hover:ring-primary-500/20"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-lg px-8 py-4 hover:shadow-soft"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <a
              href="https://linkedin.com/in/sadiq22muhammad/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-primary-600" />
            </a>
            <a
              href="https://github.com/sadiqmuhammad12/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-primary-600" />
            </a>
            <a
              href="mailto:sadiqmuhammad795@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-primary-600" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border-2 border-gray-300 hover:border-primary-600 transition-colors"
            >
              <ChevronDown className="w-6 h-6 text-gray-600" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
