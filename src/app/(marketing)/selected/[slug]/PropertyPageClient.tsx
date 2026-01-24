'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PropertyPage.module.css';

export default function PropertyPageClient({ property }: { property: any }) {
  const [mainImage, setMainImage] = useState(property.heroImage);
  const allImages = [property.heroImage, ...(property.gallery || [])];

  return (
    <div className={styles.container} dir="rtl">
      {/* גלריה ראשית */}
      <section className={styles.gallerySection}>
        <div className={styles.mainImageWrapper}>
          <Image 
            src={mainImage.replace('/upload/', '/upload/f_auto,q_auto/')} 
            alt={property.name} 
            fill 
            className={styles.mainImage}
            priority
          />
        </div>
        <div className={styles.thumbnails}>
          {allImages.map((img: string, idx: number) => (
            <div 
              key={idx} 
              className={`${styles.thumbWrapper} ${mainImage === img ? styles.activeThumb : ''}`}
              onClick={() => setMainImage(img)}
            >
              <Image src={img.replace('/upload/', '/upload/w_200,f_auto,q_auto/')} alt="" fill />
            </div>
          ))}
        </div>
      </section>

      {/* תוכן הנכס */}
      <div className={styles.contentGrid}>
        <header className={styles.header}>
          <span className={styles.locationTag}>{property.location}</span>
          <h1 className={styles.title}>{property.name}</h1>
          <div className={styles.priceTag}>{property.priceRange} <small>/ לילה</small></div>
        </header>

        <section className={styles.descriptionSection}>
          <h2>על המקום</h2>
          <p>{property.description}</p>
        </section>

        <section className={styles.featuresSection}>
          <h2>מה מחכה לכם כאן</h2>
          <ul className={styles.featuresGrid}>
            {property.highlights.map((item: string, i: number) => (
              <li key={i}>✨ {item}</li>
            ))}
          </ul>
        </section>

        {/* כפתור הנעה לפעולה */}
        <div className={styles.ctaBox}>
          <h3>מוכנים לחופשה?</h3>
          <p>בדקו זמינות במחיר הטוב ביותר</p>
          <a href={property.affiliateLink} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            בדוק זמינות והזמן עכשיו
          </a>
          <span className={styles.disclaimer}>* לחיצה תעביר אתכם לאתר צימר 360 להשלמת ההזמנה</span>
        </div>
      </div>
    </div>
  );
}
