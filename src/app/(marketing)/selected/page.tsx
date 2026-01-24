'use client';
import React from 'react';
import Link from 'next/link';
import properties from '@/data/selected-pilot.json';

export default function NetflixGalleryPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans pt-24 pb-12" dir="rtl">
      
      {/* Hero Featured - סטייל נטפליקס קלאסי */}
      <section className="relative h-[70vh] w-full mb-12 px-6 md:px-12">
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <img 
            src={properties[0]?.heroImage} 
            className="w-full h-full object-cover opacity-60" 
            alt="Featured" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center max-w-2xl">
          <span className="text-amber-500 font-bold tracking-widest mb-4">נבחר עבורך</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">{properties[0]?.name}</h1>
          <p className="text-lg text-gray-300 mb-8 line-clamp-3">{properties[0]?.description || "חוויית נופש בלתי נשכחת שנבחרה בפינצטה"}</p>
          <div className="flex gap-4">
            <Link href={`/selected/${properties[0]?.slug}`} className="bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition-all">
              פרטים נוספים
            </Link>
          </div>
        </div>
      </section>

      {/* שורת הגלריה - Netflix Row */}
      <section className="space-y-8">
        <div className="px-6 md:px-12">
          <h2 className="text-2xl font-bold mb-4 hover:text-amber-500 transition-colors cursor-pointer inline-block">
            הקולקציה הנבחרת - SELECTED
          </h2>
          
          {/* הצינור של נטפליקס */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 scroll-smooth">
            {properties.map((item) => (
              <Link 
                href={`/selected/${item.slug}`} 
                key={item.id}
                className="min-w-[280px] md:min-w-[400px] relative aspect-video rounded-md overflow-hidden transition-all duration-300 hover:scale-110 hover:z-20 shadow-2xl"
              >
                <img 
                  src={item.heroImage} 
                  className="w-full h-full object-cover" 
                  alt={item.name} 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-amber-400">{item.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* סגנון CSS להסתרת הסקרולבר */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
