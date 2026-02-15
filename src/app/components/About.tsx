import { Code2, Palette, Rocket } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design, Prototyping"
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      title: "Backend & Tools",
      description: "Node.js, Express, MongoDB, Git, CI/CD"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-center mb-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="text-center text-slate-300 max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="leading-relaxed"
          >
            I am <span className="text-blue-400 font-semibold">Aniket Parida</span>, a passionate Computer Science engineering student from Jajpur, Odisha with a specialization in Data Science, dedicated to transforming data into actionable insights. With a solid foundation in algorithms, programming, and computer architecture, combined with expertise in statistical analysis, machine learning, and data visualization, I thrive on solving complex problems and driving data-driven decision-making.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="leading-relaxed text-slate-400"
          >
            My journey has been fueled by continuous learning and hands-on experience with tools like Python, R, SQL, and popular machine learning frameworks. I enjoy collaborating in diverse teams to build scalable solutions that make a tangible impact.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="leading-relaxed text-slate-400"
          >
            Eager to leverage my technical skills and analytical mindset to contribute to innovative projects and grow in the ever-evolving field of data science.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-blue-400 pt-4"
          >
            Let's connect and explore opportunities to create meaningful data-driven outcomes! 🚀
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500 transition-all relative overflow-hidden group"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                transition: { duration: 0.3 }
              }}
              style={{ willChange: 'transform' }}
            >
              {/* Hover gradient effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg"
                initial={false}
                animate={{
                  backgroundImage: [
                    'linear-gradient(0deg, rgba(59,130,246,0.5) 0%, transparent 50%, transparent 100%)',
                    'linear-gradient(90deg, rgba(59,130,246,0.5) 0%, transparent 50%, transparent 100%)',
                    'linear-gradient(180deg, rgba(59,130,246,0.5) 0%, transparent 50%, transparent 100%)',
                    'linear-gradient(270deg, rgba(59,130,246,0.5) 0%, transparent 50%, transparent 100%)',
                    'linear-gradient(360deg, rgba(59,130,246,0.5) 0%, transparent 50%, transparent 100%)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div 
                className="mb-4 relative z-10"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="mb-2 text-white relative z-10">{skill.title}</h3>
              <p className="text-slate-400 relative z-10">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}