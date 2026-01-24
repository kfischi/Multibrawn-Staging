'use client';
import React from 'react';
import Link from 'next/link';
import propertiesData from '@/data/selected-pilot.json';

interface Property {
  id: string;
  slug: string;
  name: string;
  location: string;
  heroImage: string;
  priceRange?: string;
  capacity?: number;
  bedrooms?: number;
}

const properties = propertiesData as Property[];

export default function HighEndSelectedPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f4] font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* --- HERO HEADER --- */}
      <header className="relative pt-40 pb-24 px-6 text-center z-10">
        <span className="block text-amber-500 font-bold tracking-[0.4em] uppercase text-sm mb-6 animate-fade-in">
          Curated Excellence
        </span>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
          THE <span className="not-italic text-white">SELECTED</span>
        </h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed italic">
          "היוקרה אינה צעקנית, היא נוכחת." <br/>
          אוסף הנכסים האקסקלוסיבי של Multibrawn למי שמחפש את הבלתי רגיל.
        </p>
      </header>

      {/* --- LUXURY GRID --- */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          {properties.map((item, index) => (
            <Link 
              href={`/selected/${item.slug}`} 
              key={item.id}
              className={`group relative block ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-2xl transition-all duration-700">
                {/* Image with Parallax-like Effect */}
                <img 
                  src={item.heroImage} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" 
                  alt={item.name} 
                />
                
                {/* Sophisticated Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-white/10 m-4 rounded-xl pointer-events-none group-hover:m-2 transition-all duration-500" />

                {/* Floating Tags */}
                <div className="absolute top-8 left-8 flex flex-col gap-2">
                  <span className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    Verified Asset
                  </span>
                </div>
              </div>

              {/* Text Content - Off-grid Positioning */}
              <div className="mt-8 md:-mt-12 md:mr-12 relative z-20">
                <div className="inline-block px-4 py-1 bg-amber-500 text-black text-xs font-black uppercase mb-4 shadow-xl">
                  {item.location}
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 group-hover:text-amber-500 transition-colors duration-300 tracking-tight">
                  {item.name}
                </h2>
                
                {/* Quick Details */}
                <div className="flex gap-6 text-gray-400 text-sm font-light italic">
                   <span>{item.bedrooms || 8} חדרי שינה</span>
                   <span>•</span>
                   <span>{item.priceRange?.split('-')[0] || 'מ-₪1,650'}</span>
                </div>

                <div className="mt-6 flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                  <span className="text-xs font-bold tracking-[0.3em] uppercase">גלה עוד</span>
                  <div className="h-[1px] w-20 bg-amber-500/50 group-hover:w-32 transition-all duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* --- ELEGANT FOOTER --- */}
      <footer className="relative z-10 py-32 bg-white/5 backdrop-blur-sm border-t border-white/10 text-center">
        <h2 className="text-4xl font-black mb-8 opacity-20 tracking-[1em] uppercase">Multibrawn</h2>
        <p className="text-gray-500 text-sm font-light italic max-w-md mx-auto">
          התוכן והנכסים המופיעים באתר זה הם בבעלות בלעדית של מולטיבראון. כל הזכויות שמורות 2026.
        </p>
      </footer>
    </div>
  );
}
