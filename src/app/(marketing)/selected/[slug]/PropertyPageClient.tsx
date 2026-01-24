'use client';
import React from 'react';

export default function PropertyPageClient({ property }: { property: any }) {
  if (!property) return <div className="p-20 text-center font-sans">טוען נכס...</div>;

  return (
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img src={property.heroImage} className="w-full h-full object-cover" alt={property.name} />
        <div className="absolute inset-0 bg-black/40 flex items-end p-8 md:p-16">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-white text-4xl md:text-6xl font-black mb-2">{property.name}</h1>
            <p className="text-white/90 text-xl font-light">{property.location}</p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Content Side */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-amber-400 w-fit pb-2">על המתחם</h2>
            <p className="text-xl text-slate-700 leading-relaxed font-light">{property.description}</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {property.features?.map((f: string, i: number) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-amber-500 font-bold">✓</span> {f}
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">מה מחכה לכם כאן</h2>
            <div className="flex flex-wrap gap-3">
              {property.amenities?.map((a: string, i: number) => (
                <span key={i} className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium">{a}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Action Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border-2 border-slate-100 p-8 rounded-[2.5rem] shadow-2xl sticky top-28 space-y-6">
            <div className="text-3xl font-black text-slate-900">{property.priceRange}</div>
            <div className="space-y-3 py-4 border-y border-slate-100">
              <div className="flex justify-between"><span>קיבולת:</span><span className="font-bold">{property.capacity} אורחים</span></div>
              <div className="flex justify-between"><span>חדרי שינה:</span><span className="font-bold">{property.bedrooms}</span></div>
            </div>
            <a 
              href={property.affiliateUrl} 
              target="_blank" 
              className="block w-full bg-amber-500 text-black text-center py-4 rounded-2xl font-black text-lg hover:bg-amber-400 transition-all shadow-lg shadow-amber-200"
            >
              בדיקת זמינות והזמנה
            </a>
            <a 
              href={`https://wa.me/${property.whatsapp}`} 
              target="_blank" 
              className="block w-full text-center text-green-600 font-bold hover:underline"
            >
              שאלות בוואטסאפ?
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
