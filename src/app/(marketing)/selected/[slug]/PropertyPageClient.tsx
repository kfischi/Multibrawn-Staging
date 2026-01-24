'use client';
import React from 'react';

export default function PropertyPageClient({ property }: { property: any }) {
  if (!property) return <div className="p-20 text-center">טוען...</div>;

  return (
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      {/* Hero */}
      <div className="relative h-[60vh]">
        <img src={property.heroImage} className="w-full h-full object-cover" alt={property.name} />
        <div className="absolute inset-0 bg-black/40 flex items-end p-12">
          <h1 className="text-white text-5xl font-black">{property.name}</h1>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">על המתחם</h2>
            <p className="text-xl text-slate-700 leading-relaxed">{property.description}</p>
          </section>
          
          <section className="grid grid-cols-2 gap-4">
            {property.features.map((f: string, i: number) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">✓ {f}</div>
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl h-fit sticky top-8">
          <div className="text-2xl font-bold mb-6">{property.priceRange}</div>
          <div className="space-y-4 mb-8 opacity-80">
            <div className="flex justify-between"><span>אורחים:</span><span>{property.capacity}</span></div>
            <div className="flex justify-between"><span>חדרים:</span><span>{property.bedrooms}</span></div>
          </div>
          <a href={property.affiliateUrl} target="_blank" className="block w-full bg-amber-500 text-black text-center py-4 rounded-xl font-bold hover:bg-amber-400 transition-all">
            בדיקת זמינות והזמנה
          </a>
        </div>
      </main>
    </div>
  );
}
