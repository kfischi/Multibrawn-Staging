'use client';
import React, { useState } from 'react';

export default function PropertyPageClient({ property }: { property: any }) {
  const [activeImg, setActiveImg] = useState(property?.heroImage || '');
  
  if (!property) return <div className="p-20 text-center font-sans">טוען חוויה יוקרתית...</div>;

  const allImages = property.images || [property.heroImage];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-100" dir="rtl">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={activeImg} 
          alt={property.name} 
          className="w-full h-full object-cover transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-8 md:p-16 text-white max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">נכס מאומת</span>
            <span className="text-amber-400 text-sm">★ {property.rating || '4.9'} ({property.reviewsCount || '12'} חוות דעת)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">{property.name}</h1>
          <p className="text-lg md:text-xl text-slate-200 font-light max-w-3xl">{property.location} • {property.type === 'villa' ? 'וילה יוקרתית' : 'סוויטת בוטיק'}</p>
        </div>
      </section>

      {/* --- QUICK INFO BAR --- */}
      <div className="bg-slate-50 border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <div className="flex flex-col"><span>אורחים</span><span className="text-black text-lg font-bold">{property.capacity}</span></div>
            <div className="flex flex-col"><span>חדרי שינה</span><span className="text-black text-lg font-bold">{property.bedrooms}</span></div>
            <div className="flex flex-col"><span>חדרי רחצה</span><span className="text-black text-lg font-bold">{property.bathrooms || 'סטנדרט'}</span></div>
          </div>
          <a href={property.affiliateUrl} target="_blank" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl">
            הזמן עכשיו {property.priceRange ? `מ-${property.priceRange.split('-')[0]}` : ''}
          </a>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="lg:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-3xl font-bold mb-6 italic underline decoration-amber-400 underline-offset-8">על המתחם</h2>
            <p className="text-xl leading-relaxed text-slate-700 font-light">{property.description}</p>
          </section>

          {/* Features Grid */}
          <section>
            <h2 className="text-2xl font-bold mb-6">יתרונות בולטים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.features?.map((f: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-amber-600 font-bold">✓</span> {f}
                </div>
              ))}
            </div>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="text-2xl font-bold mb-6">מה מחכה לכם בפנים</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
              {property.amenities?.map((amenity: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> {amenity}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- RIGHT COLUMN: INFO CARD --- */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl sticky top-28">
            <h3 className="text-xl font-bold mb-6">פרטי אירוח</h3>
            <div className="space-y-4 text-sm opacity-90">
              <div className="flex justify-between border-b border-white/10 pb-2"><span>צ'ק אין</span><span>{property.checkIn || '15:00'}</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>צ'ק אאוט</span><span>{property.checkOut || '11:00'}</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>מינימום לילות</span><span>{property.minNights || '2'}</span></div>
            </div>
            <div className="mt-8 space-y-3">
               <a href={`https://wa.me/${property.whatsapp}`} target="_blank" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold transition-all">
                דברו איתנו בוואטסאפ
              </a>
              <p className="text-[10px] text-center text-slate-400">ההזמנה מתבצעת באתר חיצוני מאובטח</p>
            </div>
          </div>
        </div>
      </main>

      {/* --- GALLERY SECTION --- */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <h2 className="text-3xl font-black italic">גלריית תמונות</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar pb-6">
          {allImages.map((img: string, i: number) => (
            <div key={i} className="min-w-[300px] md:min-w-[450px] h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-md">
               <img 
                src={img} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                alt={`Gallery ${i}`}
                onClick={() => setActiveImg(img)}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
