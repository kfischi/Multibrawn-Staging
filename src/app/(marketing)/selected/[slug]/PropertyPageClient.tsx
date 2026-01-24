'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PropertyPage.module.css';

export default function PropertyPageClient({ property }: { property: any }) {
  const [activeImg, setActiveImg] = useState(property?.heroImage);
  const allImages = [property?.heroImage, ...(property?.gallery || [])].filter(Boolean);

  if (!property) return <div style={{ padding: '100px', textAlign: 'center' }}>נכס לא נמצא</div>;

  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.mainGrid}>
        {/* צד ימין: גלריה */}
        <div className={styles.gallerySide}>
          <div className={styles.heroWrapper}>
            <Image 
              src={activeImg} 
              alt={property.name} 
              fill 
              priority
              style={{ objectFit: 'cover' }}
              className={styles.rounded}
            />
          </div>
          <div className={styles.thumbsRow}>
            {allImages.map((img, i) => (
              <div 
                key={i} 
                className={`${styles.thumbBtn} ${activeImg === img ? styles.active : ''}`}
                onClick={() => setActiveImg(img)}
              >
                <Image src={img} alt="" fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* צד שמאל: מידע */}
        <div className={styles.infoSide}>
          <h1 className={styles.title}>{property.name}</h1>
          <p className={styles.location}>📍 {property.location}</p>
          
          <div className={styles.stats}>
            <span>👥 עד {property.capacity} אורחים</span>
            <span>🛏️ {property.bedrooms} חדרים</span>
          </div>

          <div className={styles.description}>
            <h3>על המקום</h3>
            <p>{property.description}</p>
          </div>

          <div className={styles.ctaCard}>
            <div className={styles.price}>{property.priceRange} <small>/ לילה</small></div>
            <a href={property.affiliateLink} target="_blank" rel="noopener noreferrer" className={styles.btn}>
              בדוק זמינות והזמן עכשיו
            </a>
            <p className={styles.disclaimer}>* המעבר לאתר צימר 360 להשלמת ההזמנה</p>
          </div>
        </div>
      </div>
    </div>
  );
}
