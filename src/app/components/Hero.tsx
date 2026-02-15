import { ArrowDown, Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import resumeImage from 'figma:asset/7f4e481ee936b8044c8832454fbfab5a45668ad6.png';
import { ParticleBackground } from './ParticleBackground';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Welcome to my portfolio ✨
            </motion.div>
          </motion.div>

          <motion.h1 
            className="mb-4 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
              animate={{ 
                filter: [
                  'hue-rotate(0deg)',
                  'hue-rotate(360deg)',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              Aniket
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Full Stack Developer
            </motion.span>
            {' & '}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              UI/UX Designer
            </motion.span>
          </motion.p>
          
          <motion.p 
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I build beautiful, functional web experiences that make a difference. 
            Passionate about clean code, user experience, and innovative solutions.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.a 
            href="#projects" 
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all shadow-lg shadow-blue-500/30 relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View My Work</span>
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors relative overflow-hidden group"
            whileHover={{ scale: 1.05, borderColor: '#a78bfa' }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            <motion.span
              className="absolute inset-0 bg-blue-500/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Get In Touch</span>
          </motion.a>
          
          <motion.a 
            href={resumeImage}
            download="Aniket_Parida_Resume.png"
            className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-lg transition-colors flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05, borderColor: '#60a5fa' }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            <motion.span
              className="absolute inset-0 bg-purple-500/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Download className="w-4 h-4" />
            </motion.span>
            <span className="relative z-10">Resume</span>
          </motion.a>
        </motion.div>

        <motion.a 
          href="#about" 
          className="inline-block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
          >
            <ArrowDown className="w-6 h-6 text-slate-500" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}