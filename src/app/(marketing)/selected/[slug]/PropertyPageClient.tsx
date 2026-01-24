'use client';
import React, { useState } from 'react';

export default function PropertyPageClient({ property }: { property: any }) {
  // אם מסיבה כלשהי ה-JSON לא נטען
  if (!property) return <div style={{padding: '50px', textAlign: 'center'}}>טוען נתונים...</div>;

  const [mainImg, setMainImg] = useState(property.heroImage);
  const images = [property.heroImage, ...(property.gallery || [])].filter(Boolean);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }} dir="rtl">
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>{property.name}</h1>
      <p style={{ color: '#666' }}>📍 {property.location}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {/* תמונה ראשית */}
        <div style={{ width: '100%', height: '500px', borderRadius: '15px', overflow: 'hidden', backgroundColor: '#eee' }}>
          <img 
            src={mainImg} 
            alt={property.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Image+Error'; }}
          />
        </div>

        {/* גלריה קטנה */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
          {images.map((img: string, i: number) => (
            <img 
              key={i}
              src={img} 
              onClick={() => setMainImg(img)}
              style={{ 
                width: '100px', 
                height: '70px', 
                borderRadius: '8px', 
                cursor: 'pointer', 
                objectFit: 'cover',
                border: mainImg === img ? '3px solid black' : '1px solid #ccc'
              }} 
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f9f9f9', borderRadius: '15px' }}>
        <h3>פרטים נוספים</h3>
        <p>{property.description}</p>
        <p><strong>מחיר:</strong> {property.priceRange}</p>
        <a href={property.affiliateLink} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block', padding: '15px 30px', background: 'black', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', marginTop: '10px'
        }}>בדוק זמינות בצימר 360</a>
      </div>
    </div>
  );
}
