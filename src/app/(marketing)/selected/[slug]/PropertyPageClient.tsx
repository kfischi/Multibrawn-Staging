'use client';
import React, { useState } from 'react';

export default function PropertyPageClient({ property }: { property: any }) {
  const [mainImg, setMainImg] = useState(property?.heroImage || '');
  if (!property) return <div style={{ padding: '50px', textAlign: 'center' }}>טוען נתונים...</div>;

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }} dir="rtl">
      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>{property.name}</h1>
      <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '30px' }}>📍 {property.location}</p>

      {/* גלריה */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ width: '100%', height: '500px', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#eee' }}>
          <img src={mainImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px', overflowX: 'auto' }}>
          {[property.heroImage, ...(property.gallery || [])].map((img, i) => (
            <img key={i} src={img} onClick={() => setMainImg(img)} style={{ width: '120px', height: '80px', borderRadius: '10px', cursor: 'pointer', objectFit: 'cover', border: mainImg === img ? '3px solid black' : 'none' }} />
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '50px' }}>
        <div>
          <section style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.6rem' }}>על המקום</h3>
            <p style={{ lineHeight: '1.8', color: '#333' }}>{property.description}</p>
            <p style={{ lineHeight: '1.8', color: '#333' }}>{property.longDescription}</p>
          </section>

          <section style={{ marginBottom: '30px', background: '#f9f9f9', padding: '25px', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.4rem' }}>🌟 מה עושים באזור?</h3>
            <ul style={{ lineHeight: '2' }}>
              {property.areaAttractions?.map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h3 style={{ fontSize: '1.4rem' }}>🍽️ איפה אוכלים?</h3>
            <ul style={{ lineHeight: '2' }}>
              {property.nearbyDining?.map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>
          </section>
        </div>

        {/* תיבת CTA */}
        <div style={{ height: 'fit-content', position: 'sticky', top: '20px', padding: '30px', border: '1px solid #eee', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{property.priceRange}</div>
          <p style={{ color: '#666' }}>מחיר ממוצע ללילה</p>
          <a href={property.affiliateLink} target="_blank" style={{ display: 'block', padding: '15px', background: '#000', color: '#fff', textAlign: 'center', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', marginTop: '20px' }}>
            בדוק זמינות והזמן עכשיו
          </a>
        </div>
      </div>
    </div>
  );
}
