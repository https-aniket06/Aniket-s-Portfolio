import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          className="flex items-center justify-center gap-2 text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Made with <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </motion.span> by Aniket
        </motion.p>
        <p className="text-slate-500 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}