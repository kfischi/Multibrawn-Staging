'use client';
import React from 'react';

export default function PropertyPageClient({ property }: { property: any }) {
  return (
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      <div className="relative h-[60vh]">
        <img src={property.heroImage} className="w-full h-full object-cover" alt={property.name} />
        <div className="absolute inset-0 bg-black/40 flex items-end p-12">
          <h1 className="text-white text-5xl font-black">{property.name}</h1>
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-3xl font-bold border-b-2 border-amber-400 w-fit pb-2">על המתחם</h2>
          <p className="text-xl text-slate-700 leading-relaxed font-light">{property.description}</p>
        </div>
        <div className="bg-slate-900 text-white p-8 rounded-3xl h-fit sticky top-10 text-center">
          <div className="text-3xl font-bold mb-6 italic">{property.priceRange}</div>
          <a href={property.affiliateUrl} target="_blank" className="block w-full bg-amber-500 text-black py-4 rounded-xl font-black text-lg hover:bg-amber-400 transition-all">
            בדוק זמינות עכשיו
          </a>
        </div>
      </main>
    </div>
  );
}
