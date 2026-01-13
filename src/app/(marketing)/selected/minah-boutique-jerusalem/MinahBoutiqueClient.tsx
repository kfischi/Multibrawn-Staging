'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MinahBoutique.module.css';

interface MinahBoutiqueClientProps {
  property: any;
}

export default function MinahBoutiqueClient({ property }: MinahBoutiqueClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allImages = [property.heroImage, ...property.gallery];

  return (
    <div className={styles.container}>
      {/* Hero Section - Full Screen Editorial */}
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <Image
            src={allImages[activeImageIndex]}
            alt={property.name}
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.heroSubtitle}>{property.subtitle}</span>
            <h1 className={styles.heroTitle}>{property.name}</h1>
            <p className={styles.heroTagline}>
              שבע סוויטות בוטיק במרכז ירושלים
            </p>
          </div>

          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>מיקום</span>
              <span className={styles.metaValue}>{property.location}</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>קיבולת</span>
              <span className={styles.metaValue}>עד {property.capacity} אורחים</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>מחיר</span>
              <span className={styles.metaValue}>{property.priceRange}</span>
            </div>
          </div>
        </div>

        {/* Gallery Navigation */}
        <div className={styles.galleryNav}>
          {allImages.slice(0, 8).map((img, index) => (
            <button
              key={index}
              className={`${styles.galleryThumb} ${activeImageIndex === index ? styles.galleryThumbActive : ''}`}
              onClick={() => setActiveImageIndex(index)}
            >
              <Image
                src={img}
                alt={`תמונה ${index + 1}`}
                fill
                sizes="100px"
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <div className={styles.content}>
        {/* Introduction */}
        <section className={styles.intro}>
          <div className={styles.introText}>
            <h2 className={styles.sectionHeading}>אירוח בוטיק בלב ירושלים</h2>
            <p className={styles.introLead}>
              מתחם בוטיק ייחודי במרכז ירושלים המציע שבעה סוויטות אדריכליות מעוצבות בקפידה. כל יחידה מספקת פרטיות מוחלטת, אווירה אינטימית ושקטה, ומיקום מושלם קרוב לכל האטרקציות המרכזיות של העיר העתיקה.
            </p>
            <p className={styles.introBody}>
              המתחם משלב יוקרה עם נוחות, עיצוב מודרני עם חום, ומתאים במיוחד לזוגות, משפחות וקבוצות המחפשות חוויית אירוח מעולה בלב ירושלים. עם התאמה מלאה לשומרי מסורת, נוחות עכשווית ושירות אישי מעולה, מינה בוטיק הוא הבחירה המושלמת לחופשה בירושלים.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>7</div>
            <h3 className={styles.featureTitle}>סוויטות מעוצבות</h3>
            <p className={styles.featureText}>כל יחידה עם אופי ייחודי ופרטיות מלאה</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>★</div>
            <h3 className={styles.featureTitle}>שומר שבת</h3>
            <p className={styles.featureText}>התאמה מלאה לציבור שומר מסורת</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>◆</div>
            <h3 className={styles.featureTitle}>מיקום מושלם</h3>
            <p className={styles.featureText}>דקות מהעיר העתיקה והכותל</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>♦</div>
            <h3 className={styles.featureTitle}>ג'קוזי פרטי</h3>
            <p className={styles.featureText}>שני חדרים עם ג'קוזי יוקרתי</p>
          </div>
        </section>

        {/* Rooms Section */}
        <section className={styles.rooms}>
          <h2 className={styles.sectionHeading}>הסוויטות</h2>
          
          <div className={styles.roomsList}>
            <div className={styles.roomCard}>
              <div className={styles.roomHeader}>
                <h3 className={styles.roomName}>סוויטה משפחתית מרווחת</h3>
                <span className={styles.roomPrice}>₪750 / לילה</span>
              </div>
              <div className={styles.roomDetails}>
                <span>65 מ"ר</span>
                <span>•</span>
                <span>עד 7 אורחים</span>
                <span>•</span>
                <span>2 חדרי שינה</span>
              </div>
              <p className={styles.roomDesc}>מושלמת למשפחות, עם מטבח מלא ושני חדרי שינה נפרדים</p>
            </div>

            <div className={styles.roomCard}>
              <div className={styles.roomHeader}>
                <h3 className={styles.roomName}>סוויטת יוקרה עם ג'קוזי</h3>
                <span className={styles.roomPrice}>₪600 / לילה</span>
              </div>
              <div className={styles.roomDetails}>
                <span>20 מ"ר</span>
                <span>•</span>
                <span>עד 2 אורחים</span>
                <span>•</span>
                <span>ג'קוזי פרטי</span>
              </div>
              <p className={styles.roomDesc}>אידיאלית לזוגות, עם ג'קוזי פרטי ואווירה רומנטית</p>
            </div>

            <div className={styles.roomCard}>
              <div className={styles.roomHeader}>
                <h3 className={styles.roomName}>סוויטה זוגית קלאסית</h3>
                <span className={styles.roomPrice}>₪500 / לילה</span>
              </div>
              <div className={styles.roomDetails}>
                <span>18-35 מ"ר</span>
                <span>•</span>
                <span>עד 2-5 אורחים</span>
                <span>•</span>
                <span>מטבח מאובזר</span>
              </div>
              <p className={styles.roomDesc}>5 סוויטות נוספות במגוון גדלים ועיצובים</p>
            </div>
          </div>

          <div className={styles.wholeProp}>
            <h3 className={styles.wholePropTitle}>השכרת כל המתחם</h3>
            <p className={styles.wholePropPrice}>₪3,950 / לילה</p>
            <p className={styles.wholePropDesc}>אידיאלי לקבוצות, שמחות משפחתיות או אירועים</p>
          </div>
        </section>

        {/* Amenities */}
        <section className={styles.amenities}>
          <h2 className={styles.sectionHeading}>מתקנים ושירותים</h2>
          
          <div className={styles.amenitiesGrid}>
            <div className={styles.amenityGroup}>
              <h4 className={styles.amenityGroupTitle}>בחדרים</h4>
              <ul className={styles.amenityList}>
                <li>מזגן</li>
                <li>טלוויזיה</li>
                <li>נטפליקס</li>
                <li>WiFi מהיר</li>
                <li>מטבח מאובזר</li>
                <li>מצעים איכותיים</li>
              </ul>
            </div>

            <div className={styles.amenityGroup}>
              <h4 className={styles.amenityGroupTitle}>למשפחות</h4>
              <ul className={styles.amenityList}>
                <li>4 לולים לתינוקות</li>
                <li>כלי מטבח מלאים</li>
                <li>פלטת שבת</li>
                <li>מיחם</li>
                <li>ממ"ד בכל יחידה</li>
              </ul>
            </div>

            <div className={styles.amenityGroup}>
              <h4 className={styles.amenityGroupTitle}>לציבור דתי</h4>
              <ul className={styles.amenityList}>
                <li>שומר שבת</li>
                <li>בית כנסת בהליכה</li>
                <li>מקווה גברים</li>
                <li>מקווה נשים</li>
                <li>מסעדות כשרות</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className={styles.location}>
          <h2 className={styles.sectionHeading}>מיקום מושלם</h2>
          <p className={styles.locationIntro}>
            במרכז ירושלים, דקות הליכה מהאטרקציות המרכזיות
          </p>

          <div className={styles.attractionsList}>
            <div className={styles.attractionItem}>
              <span className={styles.attractionDistance}>1 ק"מ</span>
              <span className={styles.attractionName}>העיר העתיקה</span>
            </div>
            <div className={styles.attractionItem}>
              <span className={styles.attractionDistance}>1.5 ק"מ</span>
              <span className={styles.attractionName}>הכותל המערבי</span>
            </div>
            <div className={styles.attractionItem}>
              <span className={styles.attractionDistance}>1.8 ק"מ</span>
              <span className={styles.attractionName}>שוק מחנה יהודה</span>
            </div>
            <div className={styles.attractionItem}>
              <span className={styles.attractionDistance}>2 ק"מ</span>
              <span className={styles.attractionName}>מוזיאון ישראל</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>מוכנים להזמין?</h2>
            <p className={styles.ctaText}>
              בדקו זמינות והזמינו את מינה בוטיק ירושלים
            </p>
          </div>
          <a 
            href={property.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            בדיקת זמינות והזמנה
          </a>
        </section>

        {/* Footer */}
        <div className={styles.backLink}>
          <Link href="/selected">
            חזרה למובחרים
          </Link>
        </div>
      </div>
    </div>
  );
}
