'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PropertyPage.module.css';

export default function PropertyPageClient({ property }: { property: any }) {
  const [activeImg, setActiveImg] = useState<string>(property?.heroImage || '');
  const allImages: string[] = [property?.heroImage, ...(property?.gallery || [])].filter(Boolean);

  if (!property) return <div className="p-20 text-center">נכס לא נמצא</div>;

  return (
    <div className={styles.container} dir="rtl">
      {/* גלריה מרכזית */}
      <section className={styles.heroSection}>
        <div className={styles.mainImageContainer}>
          <Image 
            src={activeImg} 
            alt={property.name} 
            fill 
            className={styles.mainImage}
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.thumbnailsGrid}>
          {allImages.map((img, i) => (
            <div 
              key={i} 
              className={`${styles.thumbWrapper} ${activeImg === img ? styles.activeThumb : ''}`}
              onClick={() => setActiveImg(img)}
            >
              <Image src={img} alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* מידע על הנכס */}
      <div className={styles.detailsContent}>
        <div className={styles.mainDetails}>
          <h1 className={styles.propertyTitle}>{property.name}</h1>
          <p className={styles.locationLabel}>📍 {property.location}</p>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>👥 עד {property.capacity} אורחים</div>
            <div className={styles.infoItem}>🛏️ {property.bedrooms} חדרים</div>
            <div className={styles.infoItem}>💰 {property.priceRange}</div>
          </div>

          <div className={styles.descriptionText}>
            <h3>על המקום</h3>
            <p>{property.description}</p>
          </div>
        </div>

        {/* תיבת הזמנה - CTA */}
        <div className={styles.bookingCard}>
          <div className={styles.cardPrice}>{property.priceRange} <span>/ לילה</span></div>
          <a href={property.affiliateLink} target="_blank" rel="noopener noreferrer" className={styles.bookingButton}>
            בדוק זמינות והזמן עכשיו
          </a>
          <p className={styles.bookingNote}>* המעבר לאתר צימר 360 להשלמת ההזמנה</p>
        </div>
      </div>
    </div>
  );
}
