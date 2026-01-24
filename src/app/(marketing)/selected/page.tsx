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
}

const properties = propertiesData as Property[];

export default function LuxurySelectedPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-900/10 blur-[150px] rounded-full opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[0%] w-[500px] h-[500px] bg-slate-800/20 blur-[130px] rounded-full opacity-30"></div>
      </div>

      {/* --- ELITE HEADER --- */}
      <header className="relative pt-48 pb-32 px-6 z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4 mb-8 animate-pulse">
            <span className="h-[1px] w-12 bg-amber-500"></span>
            <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs">Premium Collection</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12">
            THE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-white to-white/20">SELECTED</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-400 max-w-2xl leading-relaxed italic">
            "השלמות נמצאת בפרטים הקטנים. האוסף שלנו הוא לא רק מקום לישון בו, הוא יצירת אמנות של אירוח."
          </p>
        </div>
      </header>

      {/* --- ASYMMETRIC LUXURY GRID --- */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-6 pb-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
          {properties.map((item, index) => (
            <Link 
              href={`/selected/${item.slug}`} 
              key={item.id}
              className={`group relative flex flex-col ${index % 2 !== 0 ? 'md:translate-y-48' : ''}`}
            >
              {/* Image Canvas */}
              <div className="relative aspect-[16/12] overflow-hidden rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
                <img 
                  src={item.heroImage} 
                  className="w-full h-full object-cover transition-transform duration-[2.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110" 
                  alt={item.name} 
                />
                
                {/* Visual Depth Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Glass Card Info - Floating */}
                <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
                   <div className="bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-2 text-[10px] font-bold tracking-widest uppercase text-white shadow-2xl">
                     {item.id}
                   </div>
                </div>
              </div>

              {/* Content Box - Floating/Offset */}
              <div className="mt-[-60px] mr-12 relative z-20 max-w-[80%]">
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 shadow-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-amber-500/30">
                  <p className="text-amber-500 text-xs font-black tracking-[0.3em] uppercase mb-4">
                    {item.location}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h2>
                  <div className="h-[1px] w-full bg-white/10 mb-6"></div>
                  <div className="flex justify-between items-center text-sm font-light text-gray-400 italic">
                    <span>חווית אירוח אקסקלוסיבית</span>
                    <span className="text-white font-bold not-italic">{item.priceRange?.split('-')[0] || 'מ-₪1,650'}</span>
                  </div>
                  
                  {/* Luxury CTA Link */}
                  <div className="mt-8 flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                    <span>EXPLORE ASSET</span>
                    <div className="h-[1px] w-12 bg-amber-500 group-hover:w-24 transition-all duration-700"></div>
                  </div>
                </div>
              </div>

              {/* Background Large Number */}
              <span className="absolute -top-20 -left-10 text-[15rem] font-black text-white/[0.02] pointer-events-none select-none">
                0{index + 1}
              </span>
            </Link>
          ))}
        </div>
      </main>

      {/* --- CINEMATIC FOOTER --- */}
      <footer className="relative z-10 py-40 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-light italic mb-12 text-gray-400 leading-relaxed">
            "We don't just find properties. We curate emotions."
          </h3>
          <div className="flex justify-center gap-20 opacity-20 hover:opacity-100 transition-opacity duration-1000">
            <span className="text-xs font-bold tracking-[1em] uppercase">Elegance</span>
            <span className="text-xs font-bold tracking-[1em] uppercase">Privacy</span>
            <span className="text-xs font-bold tracking-[1em] uppercase">Service</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
