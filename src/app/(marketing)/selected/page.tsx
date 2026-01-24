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
}

const properties = propertiesData as Property[];

export default function LuxurySelectedPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans" dir="rtl">
      
      {/* Header - נקי ומינימליסטי כמו בגלריה */}
      <header className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-widest uppercase mb-4">
          The <span className="font-black text-amber-500">Selected</span>
        </h1>
        <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light italic">
          אוצרות של חוויות אירוח ועיצוב. כל נכס נבחר בקפידה כדי להבטיח את הסטנדרט של Multibrawn.
        </p>
      </header>

      {/* Grid - גריד יוקרתי עם מרווחים נכונים */}
      <main className="max-w-[1400px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {properties.map((item) => (
            <Link 
              href={`/selected/${item.slug}`} 
              key={item.id}
              className="group relative block overflow-hidden rounded-sm"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={item.heroImage} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                  alt={item.name} 
                />
                {/* Overlay - גרדיאנט עמוק יותר */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 right-0 left-0 p-8 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-amber-500 text-sm font-bold tracking-[0.2em] mb-2 uppercase">
                  {item.location}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  {item.name}
                </h2>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <span className="h-[1px] w-12 bg-white"></span>
                  <span className="text-xs uppercase tracking-widest">צפייה בנכס</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="py-20 border-t border-white/10 text-center">
        <p className="text-white/20 text-sm tracking-[0.5em] uppercase">Multibrawn Premium Collection</p>
      </footer>
    </div>
  );
}
