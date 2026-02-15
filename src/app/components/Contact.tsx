import { Mail, Github, Linkedin, Twitter, X, MessageCircle, Send } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socials = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "netcamcafe928@gmail.com",
      link: "mailto:netcamcafe928@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/aniket-parida",
      link: "https://www.linkedin.com/in/aniket-parida-4350b9352/"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="mb-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together or just want to say hi!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-lg hover:border-blue-500 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)',
                transition: { duration: 0.3 }
              }}
              style={{ willChange: 'transform' }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />

              <motion.div 
                className="text-blue-400 relative z-10"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.2,
                  transition: { duration: 0.5 }
                }}
              >
                {social.icon}
              </motion.div>
              <div className="text-left relative z-10">
                <div className="text-slate-500 text-sm">{social.label}</div>
                <motion.div 
                  className="text-slate-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.value}
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 opacity-50 rounded-lg"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(168, 85, 247), rgb(59, 130, 246))',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <p className="text-lg mb-4 text-slate-300 relative z-10">
            Looking for a dedicated developer to bring your ideas to life?
          </p>
          <motion.button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all shadow-lg shadow-blue-500/30 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Let's Talk</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[calc(100vw-2rem)] bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 z-50 overflow-hidden"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none">
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(168, 85, 247), rgb(59, 130, 246))',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50 relative z-10">
                <h3 className="text-2xl text-white">Get In Touch</h3>
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center mb-6"
                >
                  <p className="text-slate-300 mb-4">
                    Ready to start a conversation? Reach out to me via:
                  </p>
                  
                  {/* Email Display */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-slate-400 text-sm">Email Address</span>
                    </div>
                    <a 
                      href="mailto:netcamcafe928@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                    >
                      netcamcafe928@gmail.com
                    </a>
                  </motion.div>
                </motion.div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.a
                    href="mailto:netcamcafe928@gmail.com"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Email</span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/aniket-parida-4350b9352/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Message on LinkedIn</span>
                  </motion.a>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-500 text-sm text-center mt-6"
                >
                  I typically respond within 24 hours 📧
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}