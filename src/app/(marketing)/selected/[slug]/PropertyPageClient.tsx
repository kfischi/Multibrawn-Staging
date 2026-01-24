'use client';
import React, { useState } from 'react';

export default function PropertyPageClient({ property }: { property: any }) {
  const [activeImg, setActiveImg] = useState(property?.heroImage || '');
  
  if (!property) return <div className="p-20 text-center">טוען חוויה יוקרתית...</div>;

  const allImages = property.images || [property.heroImage];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-gold-100" dir="rtl">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img 
          src={activeImg} 
          alt={property.name} 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-8 md:p-16 text-white max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">נכס מאומת</span>
            <span className="text-amber-400 text-sm">★ {property.rating} ({property.reviewsCount} חוות דעת)</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-4 leading-tight">{property.name}</h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light max-w-3xl">{property.tagline}</p>
        </div>
      </section>

      {/* --- QUICK INFO BAR --- */}
      <div className="bg-slate-50 border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <div className="flex flex-col"><span>אורחים</span><span className="text-black text-lg font-bold">{property.capacity}</span></div>
            <div className="flex flex-col"><span>חדרי שינה</span><span className="text-black text-lg font-bold">{property.bedrooms}</span></div>
            <div className="flex flex-col"><span>חדרי רחצה</span><span className="text-black text-lg font-bold">{property.bathrooms}</span></div>
            <div className="flex flex-col"><span>גודל</span><span className="text-black text-lg font-bold">{property.size}</span></div>
          </div>
          <a href={property.affiliateUrl} target="_blank" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl">
            הזמן עכשיו מ- {property.pricePerNight}₪
          </a>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Description */}
          <section>
            <h2 className="text-3xl font-bold mb-6 italic underline decoration-amber-400 underline-offset-8">החוויה</h2>
            <p className="text-xl leading-relaxed text-slate-700 font-light">{property.description}</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.highlights?.map((h: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-amber-600 text-xl">✓</span> {h}
                </div>
              ))}
            </div>
          </section>

          {/* Units / Suites */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">יחידות האירוח במתחם</h2>
            <div className="space-y-6">
              {property.units?.map((unit: any) => (
                <div key={unit.id} className="group border border-slate-200 rounded-3xl overflow-hidden flex flex-col md:flex-row bg-white hover:shadow-2xl transition-all">
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <img src={unit.images[0]} alt={unit.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{unit.name}</h3>
                      <span className="bg-slate-100 px-3 py-1 rounded-lg text-sm font-bold">{unit.size}</span>
                    </div>
                    <p className="text-slate-600 mb-6">{unit.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {unit.features.slice(0, 4).map((f: string, i: number) => (
                        <span key={i} className="text-xs bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-100">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Amenities Grid */}
          <section>
            <h2 className="text-3xl font-bold mb-8">מה מחכה לכם במתחם</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {property.amenities?.map((amenity: string, i: number) => (
                <div key={i} className="flex items-center gap-4 text-slate-700 text-sm border-b border-slate-100 pb-3">
                  <span className="bg-slate-100 p-2 rounded-lg">✨</span> {amenity}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- RIGHT COLUMN: STICKY INFO & NEARBY --- */}
        <div className="space-y-8">
          
          {/* Nearby Tips */}
          <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-amber-400">📍</span> מידע חשוב מסביב
            </h3>
            <div className="space-y-6">
              {property.nearby?.tips?.map((tip: any, i: number) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <h4 className="font-bold text-amber-400">{tip.title}</h4>
                    <p className="text-sm text-slate-400">{tip.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* House Rules */}
          <div className="border border-slate-200 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold mb-6">חוקי הבית</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b pb-2"><span>צ'ק אין</span><span className="font-bold">{property.houseRules.checkIn}</span></div>
              <div className="flex justify-between border-b pb-2"><span>צ'ק אאוט</span><span className="font-bold">{property.houseRules.checkOut}</span></div>
              <div className="flex justify-between border-b pb-2"><span>עישון</span><span className="font-bold">{property.houseRules.smoking}</span></div>
              <div className="flex justify-between border-b pb-2"><span>חיות מחמד</span><span className="font-bold">{property.houseRules.pets}</span></div>
            </div>
          </div>

        </div>
      </main>

      {/* --- FULL WIDTH GALLERY --- */}
      <section className="bg-slate-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-4xl font-black italic">הגלריה</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar pb-10">
          {allImages.map((img: string, i: number) => (
            <img 
              key={i} 
              src={img} 
              className="h-[400px] w-auto rounded-2xl object-cover hover:scale-[1.02] transition-transform shadow-lg"
              alt="Gallery item"
            />
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">מוכנים לחופשת החלומות שלכם?</h2>
        <a 
          href={property.affiliateUrl} 
          target="_blank" 
          className="inline-block bg-amber-500 text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-amber-400 transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
        >
          בדיקת זמינות ושריין מקום עכשיו
        </a>
      </footer>

    </div>
  );
}
