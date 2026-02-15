import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "BI Performance Dashboard",
      description: "A modern e-commerce solution with real-time inventory management and secure payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://bespoke-duckanoo-e60497.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Student Performance Prediction System",
      description: "Collaborative project management tool with real-time updates and team communication features.",
      tags: ["TypeScript", "Next.js", "Tailwind", "PostgreSQL"],
      liveUrl: "https://gilded-yeot-c7a690.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Data visualization dashboard with interactive charts and comprehensive reporting tools.",
      tags: ["React", "D3.js", "Express", "Redis"],
      liveUrl: "https://glistening-bavarois-d2089a.netlify.app/",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute -top-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-center mb-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="text-center text-slate-400 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Here are some of my recent works that showcase my skills and passion for development.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 relative group p-6"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(59, 130, 246, 0.25)',
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ willChange: 'transform' }}
            >
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-lg"
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
              
              <div className="relative">
                <motion.h3 
                  className="mb-3 text-white text-xl"
                  animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-slate-400 mb-4"
                  animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.15 + tagIndex * 0.1 
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(59, 130, 246, 0.3)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 relative"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-slate-400 hover:text-slate-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}