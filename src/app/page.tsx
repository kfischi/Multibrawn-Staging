'use client';

import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark text-white">
      
      {/* רקע עם אפקט זרקור עדין */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-brand-dark to-brand-dark z-0" />
      
      {/* אלמנטים מרחפים ברקע */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid z-0" />

      <main className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        {/* תגית עליונה */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 border border-brand-neon/30 bg-brand-neon/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
        >
          <Star size={12} className="text-brand-neon fill-brand-neon animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-brand-neon">NEXT GEN HOSPITALITY</span>
        </motion.div>

        {/* כותרת ראשית ענקית */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-cyber font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600 text-glow"
        >
          MULTI<br className="md:hidden" />BRAWN
        </motion.h1>

        {/* תת כותרת */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-neutral-400 font-sans max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Curated luxury assets for the digital age. 
          <br className="hidden md:block" />
          Experience the future of exclusive event hosting.
        </motion.p>

        {/* כפתור הפעולה הראשי */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link 
            href="/gallery" 
            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-black transition-all duration-200 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-neon hover:bg-brand-neon hover:scale-105"
          >
            <span className="mr-2">ENTER COLLECTION</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            
            {/* אפקט זוהר לכפתור */}
            <div className="absolute inset-0 rounded-full ring-4 ring-white/20 group-hover:ring-brand-neon/50 transition-all" />
          </Link>
        </motion.div>

      </main>

      {/* Footer minimal */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 text-xs text-neutral-600 font-mono"
      >
        EST. 2026 • TEL AVIV • FUTURE READY
      </motion.footer>
    </div>
  );
}
