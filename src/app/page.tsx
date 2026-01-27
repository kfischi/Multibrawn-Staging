'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Home as HomeIcon, Plane, PartyPopper, Building2, ArrowLeft, Sparkles, Award, Shield, Clock } from 'lucide-react';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover scale-105"
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
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/20 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 text-sm font-medium tracking-wide">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>מולטיבראון - מומחים למציאת חופשה מושלמת</span>
          </div>

          {/* Title */}
          <h1 className="mb-6">
            <div className="overflow-hidden">
              <div className="text-8xl md:text-[10rem] font-black leading-none tracking-tighter mb-4">
                <span className="inline-block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  MULTI
                </span>
                <span className="inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  BRAWN
                </span>
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-light tracking-[0.3em] text-white/70">
              מולטיבראון
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            9+ שנות ניסיון במציאת מקומות נופש יוקרתיים.
            <br className="hidden md:block" />
            צימרים, וילות, מלונות בוטיק ואירועים מושלמים.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link 
              href="/contact" 
              className="group relative px-10 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                בואו נמצא לכם מקום מושלם
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            
            <Link 
              href="/gallery" 
              className="group px-10 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                גלריית נכסים
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <Award className="w-4 h-4" />
              </div>
              <span className="group-hover:text-white/80 transition-colors">9+ שנות מצוינות</span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="flex items-center gap-2 group cursor-default">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <Shield className="w-4 h-4" />
              </div>
              <span className="group-hover:text-white/80 transition-colors">500+ חוויות מושלמות</span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="flex items-center gap-2 group cursor-default">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <Clock className="w-4 h-4" />
              </div>
              <span className="group-hover:text-white/80 transition-colors">זמינות 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative z-10 py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wider">
              בחרו את סוג הנכס המושלם עבורכם
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
              הקטגוריות{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                שלנו
              </span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
              כל קטגוריה מייצגת עולם שלם של חוויות נופש יוקרתיות
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Villa */}
            <Link href="/gallery?category=villa" className="category-card group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/5 transition-all duration-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-4">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-transparent"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-between p-8">
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <HomeIcon className="w-12 h-12 text-cyan-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-5xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                      וילות
                    </h3>
                    
                    <p className="text-white/50 text-lg font-light group-hover:text-white/70 transition-colors duration-300">
                      וילות פרטיות
                      <br />
                      עם בריכה ונוף
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <span>צפה בנכסים</span>
                      <ArrowLeft className="w-4 h-4 animate-bounce-x" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
              </div>
            </Link>

            {/* Hotels */}
            <Link href="/gallery?category=zimmer" className="category-card group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/5 transition-all duration-700 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-4">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-transparent"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-between p-8">
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 group-hover:border-purple-400/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Building2 className="w-12 h-12 text-purple-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-5xl font-black text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                      צימרים
                    </h3>
                    
                    <p className="text-white/50 text-lg font-light group-hover:text-white/70 transition-colors duration-300">
                      צימרים רומנטיים
                      <br />
                      ומתחמי ספא
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      <span>צפה בנכסים</span>
                      <ArrowLeft className="w-4 h-4 animate-bounce-x" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
              </div>
            </Link>

            {/* Abroad */}
            <Link href="/gallery?category=apartment" className="category-card group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/5 transition-all duration-700 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-4">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-transparent"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-between p-8">
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 group-hover:border-pink-400/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Plane className="w-12 h-12 text-pink-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-5xl font-black text-white mb-4 tracking-tight group-hover:text-pink-400 transition-colors duration-300">
                      חו״ל
                    </h3>
                    
                    <p className="text-white/50 text-lg font-light group-hover:text-white/70 transition-colors duration-300">
                      נכסים מדהימים
                      <br />
                      ברחבי העולם
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-pink-400 font-semibold">
                      <span>צפה בנכסים</span>
                      <ArrowLeft className="w-4 h-4 animate-bounce-x" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
              </div>
            </Link>

            {/* Events */}
            <Link href="/gallery?category=event" className="category-card group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/5 transition-all duration-700 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-4">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-transparent"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-between p-8">
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 group-hover:border-yellow-400/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <PartyPopper className="w-12 h-12 text-yellow-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-5xl font-black text-white mb-4 tracking-tight group-hover:text-yellow-400 transition-colors duration-300">
                      אירועים
                    </h3>
                    
                    <p className="text-white/50 text-lg font-light group-hover:text-white/70 transition-colors duration-300">
                      מקומות מושלמים
                      <br />
                      לאירועים מיוחדים
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                      <span>צפה בנכסים</span>
                      <ArrowLeft className="w-4 h-4 animate-bounce-x" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}
