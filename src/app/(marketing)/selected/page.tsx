'use client';
import React from 'react';
import Link from 'next/link';
import propertiesData from '@/data/selected-pilot.json';

// הגדרת המבנה של הנכס כדי ש-TypeScript לא יצעק
interface Property {
  id: string;
  slug: string;
  name: string;
  location: string;
  heroImage: string;
  description?: string; // סימן השאלה אומר שזה אופציונלי
  priceRange?: string;
}

const properties = propertiesData as Property[];

export default function NetflixGalleryPage() {
  const featured = properties[0];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans pt-24 pb-12" dir="rtl">
      
      {/* Hero Featured Section */}
      {featured && (
        <section className="relative h-[70vh] w-full mb-12 px-6 md:px-12">
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <img 
              src={featured.heroImage} 
              className="w-full h-full object-cover opacity-60" 
              alt={featured.name} 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center max-w-2xl">
            <span className="text-amber-500 font-bold tracking-widest mb-4 uppercase text-sm">נבחר עבורך</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
              {featured.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 line-clamp-3 font-light leading-relaxed">
              {featured.description || "חוויית נופש יוקרתית במיקום המושלם. נכס נבחר מרשימת ה-Selected של Multibrawn."}
            </p>
            <div className="flex gap-4">
              <Link href={`/selected/${featured.slug}`} className="bg-white text-black px-10 py-4 rounded-md font-bold hover:bg-gray-200 transition-all text-lg shadow-xl">
                פרטים נוספים
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Netflix-Style Slider Section */}
      <section className="space-y-8">
        <div className="px-6 md:px-12">
          <h2 className="text-2xl font-bold mb-6 hover:text-amber-500 transition-colors cursor-pointer inline-block border-r-4 border-amber-500 pr-4">
            הקולקציה הנבחרת - SELECTED
          </h2>
          
          <div className="flex gap-5 overflow-x-auto no-scrollbar pb-12 pt-4 scroll-smooth">
            {properties.map((item) => (
              <Link 
                href={`/selected/${item.slug}`} 
                key={item.id}
                className="min-w-[300px] md:min-w-[440px] relative aspect-video rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
              >
                <img 
                  src={item.heroImage} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={item.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="font-bold text-xl mb-1">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-amber-400 font-medium">{item.location}</p>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded backdrop-blur-md">פרטים נוספים</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
