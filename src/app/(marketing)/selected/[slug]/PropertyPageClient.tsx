'use client';

import React, { useState } from 'react';
import styles from './PropertyPage.module.css';

export default function PropertyPageClient({ property }: { property: any }) {
  const [activeImg, setActiveImg] = useState<string>(property?.heroImage || '');
  const allImages: string[] = [property?.heroImage, ...(property?.gallery || [])].filter(Boolean);

  if (!property) return <div style={{ padding: '100px', textAlign: 'center' }}>נכס לא נמצא</div>;

  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.mainGrid}>
        {/* גלריה - שימוש ב-img רגיל לעקיפת חסימות */}
        <div className={styles.gallerySide}>
          <div className={styles.heroWrapper} style={{ position: 'relative', height: '450px' }}>
            <img 
              src={activeImg} 
              alt={property.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
            />
          </div>
          <div className={styles.thumbsRow} style={{ display: 'flex', gap: '10px', marginTop: '15px', overflowX: 'auto' }}>
            {allImages.map((img: string, i: number) => (
              <div 
                key={i} 
                className={`${styles.thumbBtn} ${activeImg === img ? styles.active : ''}`}
                onClick={() => setActiveImg(img)}
                style={{ width: '100px', height: '70px', flexShrink: 0, cursor: 'pointer' }}
              >
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', border: activeImg === img ? '2px solid black' : 'none' }} />
              </div>
            ))}
          </div>
        </div>

        {/* מידע */}
        <div className={styles.infoSide}>
          <h1 className={styles.title}>{property.name}</h1>
          <p className={styles.location}>📍 {property.location}</p>
          
          <div className={styles.stats} style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
            <span>👥 עד {property.capacity} אורחים</span>
            <span>🛏️ {property.bedrooms} חדרים</span>
          </div>

          <div className={styles.description}>
            <h3>על המקום</h3>
            <p>{property.description}</p>
          </div>

          <div className={styles.ctaCard} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{property.priceRange} <small>/ לילה</small></div>
            <a href={property.affiliateLink} target="_blank" rel="noopener noreferrer" 
               style={{ display: 'block', background: '#000', color: '#fff', padding: '15px', borderRadius: '12px', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold', marginTop: '15px' }}>
              בדוק זמינות והזמן עכשיו
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
