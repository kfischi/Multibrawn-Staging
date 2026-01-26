import Link from 'next/link';
import { Home as HomeIcon, Plane, PartyPopper, Building2 } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* --- 1. Cinematic Hero Section (החלק העליון עם הוידאו) --- */}
      <section className="hero-section">
        <video
          className="video-bg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dptyfvwyo/video/upload/v1763834667/Video-Multi_b11ehy.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* שכבת ההצללה והתוכן */}
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title text-glow">הלוקיישן הבא שלכם</h1>
            <p className="hero-subtitle">
              וילות יוקרה, צימרים ומתחמי אירועים בסטנדרט שטרם הכרתם
            </p>
            
            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">
                בואו נמצא מקום
              </Link>
              <Link href="/gallery" className="btn-glass">
                לגלריה המלאה
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Categories Grid (אזור הקטגוריות עם האייקונים) --- */}
      <section className="py-24 px-6 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-cyber text-center mb-16 text-white text-glow">
            בחרו את החוויה שלכם
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* כרטיסייה 1: וילות */}
            <Link href="/gallery?category=villa" className="group">
              <div className="glass-panel p-8 rounded-3xl h-full flex flex-col items-center text-center transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 border border-white/10">
                <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/20 transition-all duration-500">
                  <HomeIcon size={40} className="text-white group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">וילות יוקרה</h3>
                <p className="text-gray-400">מתחמים פרטיים עם בריכה וכל הפינוקים</p>
              </div>
            </Link>

            {/* כרטיסייה 2: צימרים */}
            <Link href="/gallery?category=zimmer" className="group">
              <div className="glass-panel p-8 rounded-3xl h-full flex flex-col items-center text-center transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 border border-white/10">
                <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/20 transition-all duration-500">
                  <Building2 size={40} className="text-white group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">צימרים ומלונות</h3>
                <p className="text-gray-400">חופשה זוגית רומנטית או משפחתית</p>
              </div>
            </Link>

            {/* כרטיסייה 3: דירות נופש/חו"ל */}
            <Link href="/gallery?category=apartment" className="group">
              <div className="glass-panel p-8 rounded-3xl h-full flex flex-col items-center text-center transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 border border-white/10">
                <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/20 transition-all duration-500">
                  <Plane size={40} className="text-white group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">נופש בסטייל</h3>
                <p className="text-gray-400">דירות נופש ופתרונות אירוח מיוחדים</p>
              </div>
            </Link>

            {/* כרטיסייה 4: אירועים */}
            <Link href="/gallery?category=event" className="group">
              <div className="glass-panel p-8 rounded-3xl h-full flex flex-col items-center text-center transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 border border-white/10">
                <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/20 transition-all duration-500">
                  <PartyPopper size={40} className="text-white group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">אירועים ומסיבות</h3>
                <p className="text-gray-400">מקומות מושלמים לחגוג את הרגעים החשובים</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
