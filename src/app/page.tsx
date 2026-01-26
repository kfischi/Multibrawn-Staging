import Link from 'next/link';
import { Home as HomeIcon, Plane, PartyPopper, Building2 } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="bg-deep-bg min-h-screen selection:bg-cyan-500 selection:text-black">
      
      {/* 1. Cinematic Hero Section */}
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
        
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title text-glow animate-fade-in-up">
              MULTIBRAWN
              <span className="block text-2xl md:text-4xl mt-4 font-light tracking-[0.5em] opacity-80 font-sans">
                ULTRA INSTINCT
              </span>
            </h1>
            
            <div className="hero-btns mt-12">
              <Link href="/contact" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">התחל חוויה</span>
                <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0"></div>
              </Link>
              <Link href="/gallery" className="btn-glass group">
                לגלריה
                <span className="inline-block transition-transform group-hover:translate-x-1 mr-2">←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Holographic Categories Grid */}
      <section className="py-32 px-6 relative z-10 bg-black/90">
        {/* אלמנט רקע דקורטיבי */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-cyber text-center mb-24 text-white text-glow">
            SELECT YOUR <span className="text-cyan-400">REALITY</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
            
            {/* כרטיסייה 1 */}
            <Link href="/gallery?category=villa" className="group">
              <div className="holo-card p-10 h-[400px] flex flex-col items-center justify-center text-center cursor-none">
                <div className="icon-glow-container mb-8">
                  <HomeIcon size={48} className="text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-wider">VILLAS</h3>
                <p className="text-gray-400 font-light">יוקרה פרטית ללא פשרות</p>
              </div>
            </Link>

            {/* כרטיסייה 2 */}
            <Link href="/gallery?category=zimmer" className="group">
              <div className="holo-card p-10 h-[400px] flex flex-col items-center justify-center text-center cursor-none">
                <div className="icon-glow-container mb-8">
                  <Building2 size={48} className="text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-wider">HOTELS</h3>
                <p className="text-gray-400 font-light">בוטיק אורבני ומתחמי ספא</p>
              </div>
            </Link>

            {/* כרטיסייה 3 */}
            <Link href="/gallery?category=apartment" className="group">
              <div className="holo-card p-10 h-[400px] flex flex-col items-center justify-center text-center cursor-none">
                <div className="icon-glow-container mb-8">
                  <Plane size={48} className="text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-wider">ABROAD</h3>
                <p className="text-gray-400 font-light">נכסים אקסקלוסיביים בחו"ל</p>
              </div>
            </Link>

            {/* כרטיסייה 4 */}
            <Link href="/gallery?category=event" className="group">
              <div className="holo-card p-10 h-[400px] flex flex-col items-center justify-center text-center cursor-none">
                <div className="icon-glow-container mb-8">
                  <PartyPopper size={48} className="text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-wider">EVENTS</h3>
                <p className="text-gray-400 font-light">הפקות ואירועי יוקרה</p>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
