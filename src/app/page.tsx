'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Home as HomeIcon, Plane, PartyPopper, Building2, ArrowLeft, Sparkles, Award, Shield, Clock } from 'lucide-react';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = cardsRef.current?.querySelectorAll('.category-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-black min-h-screen overflow-hidden relative">
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[180px] animate-pulse-slow"></div>
      </div>

      {/* Premium Grain Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <div className="w-full h-full" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Hero Section - World Class */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Video Background with Advanced Masking */}
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
          
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/20 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 text-sm font-medium tracking-wide animate-fade-in-delayed">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>MULTIBRAWN LUXURY COLLECTION</span>
          </div>

          {/* Main Title - Kinetic Typography */}
          <h1 className="mb-6">
            <div className="overflow-hidden">
              <div className="text-8xl md:text-[10rem] font-black leading-none tracking-tighter mb-4 animate-slide-up">
                <span className="inline-block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  MULTI
                </span>
                <span className="inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  BRAWN
                </span>
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-light tracking-[0.3em] text-white/70 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              ULTRA INSTINCT
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            חוויית נופש יוקרתית שמעבר לכל דמיון.
            <br className="hidden md:block" />
            כל נכס נבחר בקפידה ליצירת רגעים בלתי נשכחים.
          </p>

          {/* CTA Buttons - Premium Design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Link 
              href="/contact" 
              className="group relative px-10 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                התחל את המסע
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

          {/* Trust Indicators - Premium */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Categories Section - World Class Grid */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wider">
              בחר את החוויה שלך
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
              SELECT YOUR{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                REALITY
              </span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
              כל קטגוריה מייצגת עולם שלם של חוויות יוקרה
            </p>
          </div>

          {/* Cards Grid */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 - Villas */}
            <Link href="/gallery?category=villa" className="category-card group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/5 transition-all duration-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-4">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-between p-8">
                  
                  {/* Top Section */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    {/* Icon */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <HomeIcon className="w-12 h-12 text-cyan-400" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-5xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                      VILLAS
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/50 text-lg font-light group-hover:text-white/70 transition-colors duration-300">
                      יוקרה פרטית
                      <br />
                      ללא פשרות
                    </p>
                  </div>

                  {/* Bottom CTA */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <span>חקור עכשיו</span>
                      <ArrowLeft className="w-4 h-4 animate-bounce-x" />
                    </div>
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
              </div>
            </Link>

            {/* Card 2 - Hotels */}
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
                      HOTELS
                    </h3>
                    
                    <p className="text-white/50 text-lg font-light group-hover:text-white/70 transition-colors duration-300">
                      בוטיק אורבני
                      <br />
                      ומתחמי ספא
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      <span>חקור עכשיו</span>
                      <ArrowLeft className="w-4 h-4 animate-bounce-x" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
              </div>
            </Link>

            {/* Card 3 - Abroad */}
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
                      ABROAD
                    </h3>
                    
                    <p className="text-white/50 text-lg font-light group-hover:text-white/70 transition-colors duration-300">
                      נכסים אקסקלוסיביים
                      <br />
                      בחו״ל
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-pink-400 font-semibold">
                      <span>חקור עכשיו</span>
                      <ArrowLeft className="w-4 h-4 animate-bounce-x" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
              </div>
            </Link>

            {/* Card 4 - Events */}
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
                      EVENTS
                    </h3>
                    
                    <p className="text-white/50 text-lg font-light group-hover:text-white/70 transition-colors duration-300">
                      הפקות
                      <br />
                      ואירועי יוקרה
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                      <span>חקור עכשיו</span>
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

    </main>
  );
}
