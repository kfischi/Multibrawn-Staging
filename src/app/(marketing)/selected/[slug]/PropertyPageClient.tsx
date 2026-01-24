'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PropertyPage.module.css';

export default function PropertyPageClient({ property }: { property: any }) {
  // הגנה: אם אין תמונה ראשית, נשים פלייסהולדר
  const hero = property?.heroImage || '';
  const [activeImg, setActiveImg] = useState(hero);
  
  // הגנה: יצירת מערך תמונות בטוח
  const gallery = Array.isArray(property?.gallery) ? property.gallery : [];
  const allImages = hero ? [hero, ...gallery] : gallery;

  // הגנה: יצירת מערכי טקסט בטוחים
  const highlights = Array.isArray(property?.highlights) ? property.highlights : [];
  const amenities = Array.isArray(property?.amenities) ? property.amenities : [];

  if (!property) return <div className="p-20 text-center">נכס לא נמצא</div>;

  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.contentWrapper}>
        <div className={styles.galleryContainer}>
          <div className={styles.mainImageFrame}>
            {activeImg && (
              <Image 
                src={activeImg.replace('/upload/', '/upload/f_auto,q_auto/')} 
                alt={property.name || 'Property'} 
                fill 
                className={styles.mainImage}
                priority
              />
            )}
          </div>
          <div className={styles.thumbGrid}>
            {allImages.map((img, i) => (
              <div 
                key={i} 
                className={`${styles.thumbItem} ${activeImg === img ? styles.activeThumb : ''}`}
                onClick={() => setActiveImg(img)}
              >
                <Image src={img.replace('/upload/', '/upload/w_200,f_auto,q_auto/')} alt="" fill />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.detailsSide}>
          <h1 className={styles.title}>{property.name || 'נכס יוקרתי'}</h1>
          <p className={styles.location}>{property.location}</p>
          <div className={styles.price}>{property.priceRange} <span>/ לילה</span></div>
          
          <div className={styles.description}>
            <h3>על המקום</h3>
            <p>{property.description}</p>
          </div>

          {highlights.length > 0 && (
            <div className={styles.features}>
              <h3>נקודות בולטות</h3>
              <ul>{highlights.map((h: string, i: number) => <li key={i}>✨ {h}</li>)}</ul>
            </div>
          )}

          <div className={styles.ctaBox}>
            <a href={property.affiliateLink} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              בדוק זמינות והזמן עכשיו
            </a>
            <p className={styles.disclaimer}>* לחיצה תעביר אתכם לאתר חיצוני</p>
          </div>
        </div>
      </div>
    </div>
  );
}
