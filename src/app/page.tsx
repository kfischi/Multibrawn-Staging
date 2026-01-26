'use client';

import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark text-white">
      
      {/* --- שכבת הווידאו (רקע) --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
      >
        {/* וודא שהקובץ קיים בתיקיית public בשם זה, או שנה את השם כאן */}
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* --- שכבת כיסוי כהה (כדי שהטקסט יהיה קריא) --- */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      {/* אלמנטים מרחפים ברקע (רשת סייבר) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid z-0" />

      <main className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        {/* תגית עליונה */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 border border-brand-neon/30 bg-black/40 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
        >
          <Star size={12} className="text-brand-neon fill-brand-neon animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-brand-neon">NEXT GEN HOSPITALITY</span>
        </motion.div>

        {/* כותרת ראשית ענקית */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-cyber font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400 text-glow drop-shadow-2xl"
        >
          MULTI<br className="md:hidden" />BRAWN
        </motion.h1>

        {/* תת כותרת */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-neutral-200 font-sans max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md"
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
            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-black transition-all duration-200 bg-white rounded-full focus:outline-none hover:bg-brand-neon hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="mr-2">ENTER COLLECTION</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </main>

      {/* Footer minimal */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 text-xs text-neutral-400 font-mono z-10"
      >
        EST. 2026 • TEL AVIV • FUTURE READY
      </motion.footer>
    </div>
  );
}
