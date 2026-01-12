'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PropertyPage.module.css';
import selectedProperties from '@/data/selected-pilot.json';

// Types
interface PropertyPageProps {
  params: {
    slug: string;
  };
}

const PropertyPage: React.FC<PropertyPageProps> = ({ params }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  // Find property
  const property = selectedProperties.find((p: any) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  const allImages = [property.heroImage, ...property.gallery];

  // Type labels
  const typeLabels: Record<string, string> = {
    villa: 'וילה',
    zimmer: 'צימר',
    apartment: 'דירת נופש',
    hotel: 'מלון בוטיק',
    event: 'מתחם אירועים',
  };

  // Visible amenities
  const visibleAmenities = showAllAmenities 
    ? property.amenities 
    : property.amenities.slice(0, 8);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src={allImages[activeImageIndex]}
            alt={property.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBreadcrumb}>
            <Link href="/selected">המובחרים</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span>{property.name}</span>
          </div>

          <div className={styles.heroMain}>
            <div className={styles.heroTags}>
              <span className={styles.typeTag}>
                {typeLabels[property.type]}
              </span>
              {property.featured && (
                <span className={styles.featuredTag}>
                  ⭐ מומלץ
                </span>
              )}
            </div>

            <h1 className={styles.heroTitle}>{property.name}</h1>
            
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>📍</span>
                <span>{property.location}</span>
              </div>
              <div className={styles.metaDivider}>•</div>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>⭐</span>
                <span>{property.rating} ({property.reviewsCount} ביקורות)</span>
              </div>
            </div>

            <div className={styles.heroQuickInfo}>
              <div className={styles.quickInfoItem}>
                <span className={styles.quickInfoIcon}>👥</span>
                <span>עד {property.capacity} אורחים</span>
              </div>
              {property.bedrooms > 0 && (
                <>
                  <div className={styles.quickInfoDivider}/>
                  <div className={styles.quickInfoItem}>
                    <span className={styles.quickInfoIcon}>🛏️</span>
                    <span>{property.bedrooms} חדרים</span>
                  </div>
                </>
              )}
              {property.bathrooms && (
                <>
                  <div className={styles.quickInfoDivider}/>
                  <div className={styles.quickInfoItem}>
                    <span className={styles.quickInfoIcon}>🚿</span>
                    <span>{property.bathrooms} חדרי רחצה</span>
                  </div>
                </>
              )}
            </div>

            <div className={styles.heroPrice}>
              <div className={styles.priceAmount}>{property.priceRange}</div>
              <div className={styles.priceLabel}>/ לילה</div>
              {property.priceNote && (
                <div className={styles.priceNote}>{property.priceNote}</div>
              )}
            </div>

            {/* Primary CTA */}
            <a 
              href={property.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              <span>🔥 בדוק זמינות והזמן עכשיו</span>
            </a>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        <div className={styles.galleryThumbs}>
          {allImages.slice(0, 6).map((img, index) => (
            <button
              key={index}
              className={`${styles.thumb} ${activeImageIndex === index ? styles.activeThumb : ''}`}
              onClick={() => setActiveImageIndex(index)}
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
          {allImages.length > 6 && (
            <div className={styles.morePhotos}>
              +{allImages.length - 6}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <div className={styles.content}>
        {/* Highlights */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>✨</span>
            מה מיוחד כאן
          </h2>
          <div className={styles.highlightsGrid}>
            {property.highlights.map((highlight: string, index: number) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>💎</div>
                <p className={styles.highlightText}>{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>📝</span>
            תיאור המקום
          </h2>
          <div className={styles.description}>
            <p>{property.description}</p>
          </div>
        </section>

        {/* Amenities */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>🎯</span>
            מתקנים ושירותים
          </h2>
          <div className={styles.amenitiesGrid}>
            {visibleAmenities.map((amenity: string, index: number) => (
              <div key={index} className={styles.amenityItem}>
                <span className={styles.amenityIcon}>✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
          {property.amenities.length > 8 && (
            <button
              className={styles.showMoreButton}
              onClick={() => setShowAllAmenities(!showAllAmenities)}
            >
              {showAllAmenities ? 'הצג פחות' : `הצג עוד ${property.amenities.length - 8} מתקנים`}
            </button>
          )}
        </section>

        {/* Nearby Attractions */}
        {property.nearbyAttractions && property.nearbyAttractions.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>🗺️</span>
              אטרקציות בסביבה
            </h2>
            <div className={styles.attractionsList}>
              {property.nearbyAttractions.map((attraction: string, index: number) => (
                <div key={index} className={styles.attractionItem}>
                  <span className={styles.attractionIcon}>📍</span>
                  <span>{attraction}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* House Rules */}
        {property.houseRules && property.houseRules.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>📋</span>
              כללי הבית
            </h2>
            <div className={styles.rulesList}>
              {property.houseRules.map((rule: string, index: number) => (
                <div key={index} className={styles.ruleItem}>
                  <span className={styles.ruleIcon}>•</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Booking CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>מוכנים להזמין?</h3>
              <p className={styles.ctaText}>
                בדקו זמינות והזמינו את {property.name} עכשיו
              </p>
              <div className={styles.ctaPrice}>
                <span className={styles.ctaPriceAmount}>{property.priceRange}</span>
                <span className={styles.ctaPriceLabel}>/ לילה</span>
              </div>
            </div>
            <a 
              href={property.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <span>בדוק זמינות והזמן</span>
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </section>

        {/* Back to Gallery */}
        <div className={styles.backLink}>
          <Link href="/selected">
            <span className={styles.backArrow}>←</span>
            <span>חזרה למובחרים</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
