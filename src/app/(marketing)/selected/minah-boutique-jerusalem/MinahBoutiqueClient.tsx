'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MinahBoutique.module.css';

interface Property {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  heroImage: string;
  gallery: string[];
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  affiliateLink: string;
  host: string;
}

interface MinahBoutiqueClientProps {
  property: Property;
}

export default function MinahBoutiqueClient({ property }: MinahBoutiqueClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const allImages = [property.heroImage, ...property.gallery];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image
            src={allImages[activeImageIndex]}
            alt={property.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>מומלץ במיוחד</div>
            <h1 className={styles.heroTitle}>{property.name}</h1>
            <p className={styles.heroLocation}>{property.location}</p>
            <div className={styles.heroMeta}>
              <span>עד {property.capacity} אורחים</span>
              <span className={styles.metaDot}>•</span>
              <span>{property.bedrooms} סוויטות</span>
              <span className={styles.metaDot}>•</span>
              <span>{property.bathrooms} חדרי רחצה</span>
            </div>
          </div>

          {/* Gallery Navigation */}
          {allImages.length > 1 && (
            <div className={styles.galleryNav}>
              {allImages.map((img, index) => (
                <button
                  key={index}
                  className={`${styles.galleryThumb} ${activeImageIndex === index ? styles.galleryThumbActive : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`תמונה ${index + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${property.name} - תמונה ${index + 1}`}
                    fill
                    sizes="120px"
                    style={{ objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <div className={styles.content}>
        {/* Introduction */}
        <section className={styles.intro}>
          <h2 className={styles.sectionTitle}>אירוח בוטיק בלב ירושלים</h2>
          <p className={styles.introText}>
            מתחם בוטיק ייחודי במרכז ירושלים המציע 7 סוויטות אדריכליות מעוצבות בקפידה. כל יחידה מספקת פרטיות מוחלטת, אווירה אינטימית ושקטה, ומיקום מושלם קרוב לכל האטרקציות המרכזיות של העיר העתיקה.
          </p>
          <p className={styles.introText}>
            המתחם משלב יוקרה עם נוחות, עיצוב מודרני עם חום, ומתאים במיוחד לזוגות, משפחות וקבוצות המחפשות חוויית אירוח מעולה בלב ירושלים. עם התאמה מלאה לשומרי מסורת, נוחות עכשווית ושירות אישי מעולה, מינה בוטיק הוא הבחירה המושלמת לחופשה בירושלים.
          </p>
        </section>

        {/* Highlights */}
        <section className={styles.highlights}>
          <h2 className={styles.sectionTitle}>מה מייחד את המקום</h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>7</div>
              <h3 className={styles.highlightTitle}>סוויטות מעוצבות</h3>
              <p className={styles.highlightText}>כל יחידה עם אופי ייחודי ופרטיות מלאה</p>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>★</div>
              <h3 className={styles.highlightTitle}>שומר שבת</h3>
              <p className={styles.highlightText}>התאמה מלאה לציבור שומר מסורת</p>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>📍</div>
              <h3 className={styles.highlightTitle}>מיקום מושלם</h3>
              <p className={styles.highlightText}>דקות מהעיר העתיקה והכותל</p>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>✨</div>
              <h3 className={styles.highlightTitle}>ג'קוזי פרטי</h3>
              <p className={styles.highlightText}>שני חדרים עם ג'קוזי יוקרתי</p>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className={styles.amenities}>
          <h2 className={styles.sectionTitle}>שירותים ומתקנים</h2>
          <div className={styles.amenitiesGrid}>
            <div className={styles.amenityGroup}>
              <h3 className={styles.amenityTitle}>בחדרים</h3>
              <ul className={styles.amenityList}>
                <li>WiFi מהיר ויציב</li>
                <li>נטפליקס וטלוויזיה חכמה</li>
                <li>מזגן בכל החדרים</li>
                <li>מטבח מאובזר</li>
                <li>מצעים ומגבות איכותיים</li>
              </ul>
            </div>

            <div className={styles.amenityGroup}>
              <h3 className={styles.amenityTitle}>למשפחות</h3>
              <ul className={styles.amenityList}>
                <li>מטבח עם כלים מלאים</li>
                <li>פלטת שבת ומיחם</li>
                <li>ממד בכל יחידה</li>
                <li>חניה באישור מראש</li>
              </ul>
            </div>

            <div className={styles.amenityGroup}>
              <h3 className={styles.amenityTitle}>לציבור דתי</h3>
              <ul className={styles.amenityList}>
                <li>התאמה מלאה לשבת</li>
                <li>בית כנסת בהליכה</li>
                <li>מקווה גברים ונשים</li>
                <li>מסעדות כשרות בקרבת מקום</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className={styles.location}>
          <h2 className={styles.sectionTitle}>מיקום מרכזי</h2>
          <p className={styles.locationIntro}>
            במרכז ירושלים, דקות הליכה מהאטרקציות המרכזיות
          </p>
          <div className={styles.attractionsGrid}>
            <div className={styles.attractionItem}>
              <span className={styles.attractionName}>העיר העתיקה</span>
              <span className={styles.attractionDistance}>1 ק"מ</span>
            </div>
            <div className={styles.attractionItem}>
              <span className={styles.attractionName}>הכותל המערבי</span>
              <span className={styles.attractionDistance}>1.5 ק"מ</span>
            </div>
            <div className={styles.attractionItem}>
              <span className={styles.attractionName}>שוק מחנה יהודה</span>
              <span className={styles.attractionDistance}>1.8 ק"מ</span>
            </div>
            <div className={styles.attractionItem}>
              <span className={styles.attractionName}>מוזיאון ישראל</span>
              <span className={styles.attractionDistance}>2 ק"מ</span>
            </div>
            <div className={styles.attractionItem}>
              <span className={styles.attractionName}>גשר המיתרים</span>
              <span className={styles.attractionDistance}>1.5 ק"מ</span>
            </div>
            <div className={styles.attractionItem}>
              <span className={styles.attractionName}>יד ושם</span>
              <span className={styles.attractionDistance}>3.5 ק"מ</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>מוכנים להזמין?</h2>
            <p className={styles.ctaText}>
              בדקו זמינות והזמינו את מינה בוטיק ירושלים
            </p>
            <a
              href={property.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              בדיקת זמינות והזמנה
            </a>
          </div>
        </section>

        {/* Partnership Footer */}
        <section className={styles.partnership}>
          <div className={styles.partnershipContent}>
            <p className={styles.partnershipText}>
              בלחיצה על "בדיקת זמינות והזמנה" תועברו לאתר השותף שלנו
            </p>
            <div className={styles.partnershipLogo}>
              <Image
                src="https://res.cloudinary.com/decirk3zb/image/upload/w_140,h_50,c_fit,q_auto,f_auto/v1768424910/%D7%A6%D7%99%D7%9E%D7%A8360_pipstq.png"
                alt="צימר360"
                width={140}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className={styles.partnershipNote}>
              לביצוע ההזמנה הסופית והתשלום
            </p>
          </div>
        </section>

        {/* Back Link */}
        <div className={styles.backLink}>
          <Link href="/selected">חזרה למובחרים</Link>
        </div>
      </div>
    </div>
  );
}
