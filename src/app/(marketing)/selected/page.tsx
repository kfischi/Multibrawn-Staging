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
  description?: string;
}

const properties = propertiesData as Property[];

export default function SelectedGalleryPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* --- אלמנט עיצובי רקע --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 blur-[150px] rounded-full opacity-40"></div>
      </div>

      {/* --- כותרת הקטלוג --- */}
      <header className="relative pt-40 pb-20 px-6 z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none mb-6">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">SELECTED</span>
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-400 italic max-w-2xl mx-auto">
          "הבחירה של Multibrawn: אוסף מתחמי האירוח היוקרתיים ביותר בישראל"
        </p>
      </header>

      {/* --- גלריית המתחמים --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {properties.map((property, index) => (
            <Link 
              href={`/selected/${property.slug}`} 
              key={property.id}
              className={`group relative flex flex-col ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              {/* תמונת המתחם */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={property.heroImage} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  alt={property.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* מידע על המתחם */}
              <div className="mt-8 space-y-4 pr-4 border-r-2 border-amber-500/30">
                <span className="text-amber-500 text-xs font-black tracking-widest uppercase block">
                  {property.location}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold group-hover:text-amber-400 transition-colors">
                  {property.name}
                </h2>
                <p className="text-gray-400 font-light line-clamp-2 italic">
                  {property.description || "חווית נופש אקסקלוסיבית המשלבת עיצוב, פרטיות ורמת אירוח בלתי מתפשרת."}
                </p>
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-tighter text-white/60">
                    {property.priceRange}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                    <span>לפרטים והזמנה</span>
                    <span className="text-amber-500">←</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* --- FOOTER BRANDING --- */}
      <footer className="py-20 border-t border-white/5 text-center opacity-30">
        <p className="tracking-[1em] uppercase text-xs">Multibrawn Lifestyle</p>
      </footer>
    </div>
  );
}
