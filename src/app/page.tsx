'use client';

import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';
import { 
  Home, 
  Plane, 
  PartyPopper, 
  Building2, 
  Wine, 
  Gem, 
  Music, 
  Globe 
} from 'lucide-react';

// רשימת הקטגוריות המלאה לפי הבקשה שלך
const categories = [
  { id: 'villas', label: 'וילות יוקרה', icon: Home, color: 'text-brand-neon' },
  { id: 'events', label: 'מתחמי אירועים', icon: PartyPopper, color: 'text-purple-400' },
  { id: 'hotels', label: 'מלונות בוטיק', icon: Building2, color: 'text-cyan-300' },
  { id: 'shabbat', label: 'שבת חתן', icon: Wine, color: 'text-yellow-400' },
  { id: 'production', label: 'הפקות אירועים', icon: Music, color: 'text-pink-500' },
  { id: 'abroad', label: 'נופש בחו״ל', icon: Plane, color: 'text-blue-400' },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark text-white font-sans">
      
      {/* --- שכבת הווידאו (רקע) --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* --- שכבת כיסוי כהה --- */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      {/* רשת עיצוב */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid z-0" />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* כותרת ראשית */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 mt-10 md:mt-0"
        >
          <h1 className="text-5xl md:text-8xl font-cyber font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 text-glow">
            MULTIBRAWN
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto">
            הבית שלכם לאירוח יוקרה, אירועים ונופש בארץ ובעולם
          </p>
        </motion.div>

        {/* --- גריד הקטגוריות (הלב של הדף) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-5xl mb-12">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              <Link 
                href={`/gallery?category=${cat.id}`}
                className="group relative flex flex-col items-center justify-center p-6 h-32 md:h-40 glass-panel rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-brand-neon/50"
              >
                {/* אייקון */}
                <div className={`mb-3 transition-transform group-hover:scale-110 duration-300 ${cat.color}`}>
                  <cat.icon size={32} strokeWidth={1.5} />
                </div>
                
                {/* טקסט */}
                <span className="text-sm md:text-base font-bold text-neutral-200 group-hover:text-white transition-colors text-center">
                  {cat.label}
                </span>

                {/* אפקט זוהר בעת ריחוף */}
                <div className="absolute inset-0 bg-brand-neon/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* כפתור יצירת קשר מהיר */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link 
            href="/contact" 
            className="flex items-center space-x-2 space-x-reverse bg-brand-neon text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,243,255,0.4)]"
          >
            <Gem size={18} />
            <span>לתכנון החופשה הבאה שלך</span>
          </Link>
        </motion.div>

      </main>

      {/* Footer minimal */}
      <footer className="absolute bottom-4 text-xs text-neutral-500 font-mono z-10 w-full text-center">
        PREMIUM HOSPITALITY GROUP • EST. 2026
      </footer>
    </div>
  );
}
