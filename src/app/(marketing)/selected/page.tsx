'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Selected.module.css';
import selectedProperties from '@/data/selected-pilot.json';

// Types
type PropertyType = 'villa' | 'zimmer' | 'apartment' | 'hotel' | 'event';
type Region = 'north' | 'center' | 'south' | 'jerusalem';

interface Property {
  id: string;
  slug: string;
  name: string;
  type: PropertyType;
  location: string;
  region: Region;
  heroImage: string;
  priceRange: string;
  capacity: number;
  bedrooms: number;
  featured: boolean;
  rating: number;
  reviewsCount: number;
}

const SelectedPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PropertyType | 'all'>('all');
  const [activeRegion, setActiveRegion] = useState<Region | 'all'>('all');

  // Type filters
  const typeFilters = [
    { value: 'all', label: 'הכל', icon: '🏠' },
    { value: 'villa', label: 'וילות', icon: '🏡' },
    { value: 'zimmer', label: 'צימרים', icon: '💕' },
    { value: 'apartment', label: 'דירות נופש', icon: '🏢' },
    { value: 'hotel', label: 'מלונות בוטיק', icon: '🏨' },
  ];

  // Region filters
  const regionFilters = [
    { value: 'all', label: 'כל האזורים' },
    { value: 'north', label: 'צפון' },
    { value: 'center', label: 'מרכז' },
    { value: 'south', label: 'דרום' },
    { value: 'jerusalem', label: 'ירושלים' },
  ];

  // Filter properties
  const filteredProperties = useMemo(() => {
    let filtered = selectedProperties as Property[];
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(p => p.type === activeFilter);
    }
    
    if (activeRegion !== 'all') {
      filtered = filtered.filter(p => p.region === activeRegion);
    }
    
    return filtered;
  }, [activeFilter, activeRegion]);

  // Featured properties
  const featuredProperties = useMemo(() => {
    return (selectedProperties as Property[]).filter(p => p.featured);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>⭐</span>
            <span>המובחרים שלנו</span>
          </div>
          <h1 className={styles.heroTitle}>
            המקומות הכי מומלצים
            <br />
            לחופשה מושלמת
          </h1>
          <p className={styles.heroSubtitle}>
            אצרנו עבורכם את מתחמי הנופש האיכוטיים ביותר בישראל
            <br />
            וילות יוקרה, צימרים רומנטיים ומלונות בוטיק ברמה הגבוהה ביותר
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>{selectedProperties.length}</div>
              <div className={styles.statLabel}>מתחמים נבחרים</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4.8+</div>
              <div className={styles.statLabel}>דירוג ממוצע</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>שביעות רצון</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filtersSection}>
        <div className={styles.filtersContainer}>
          {/* Type Filters */}
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>סוג המתחם</h3>
            <div className={styles.filterButtons}>
              {typeFilters.map(filter => (
                <button
                  key={filter.value}
                  className={`${styles.filterButton} ${
                    activeFilter === filter.value ? styles.active : ''
                  }`}
                  onClick={() => setActiveFilter(filter.value as PropertyType | 'all')}
                >
                  <span className={styles.filterIcon}>{filter.icon}</span>
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Region Filters */}
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>אזור</h3>
            <div className={styles.filterButtons}>
              {regionFilters.map(filter => (
                <button
                  key={filter.value}
                  className={`${styles.filterButton} ${
                    activeRegion === filter.value ? styles.active : ''
                  }`}
                  onClick={() => setActiveRegion(filter.value as Region | 'all')}
                >
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className={styles.resultsCount}>
            נמצאו <strong>{filteredProperties.length}</strong> מתחמים
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {activeFilter === 'all' && activeRegion === 'all' && featuredProperties.length > 0 && (
        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>🌟</span>
              המומלצים ביותר
            </h2>
            <p className={styles.sectionSubtitle}>
              המתחמים עם הדירוג והביקורות הכי גבוהים
            </p>
          </div>
          <div className={styles.featuredGrid}>
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} featured />
            ))}
          </div>
        </section>
      )}

      {/* All Properties Grid */}
      <section className={styles.propertiesSection}>
        {filteredProperties.length > 0 ? (
          <div className={styles.propertiesGrid}>
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>🔍</div>
            <h3>לא נמצאו מתחמים</h3>
            <p>נסו לשנות את הפילטרים או לחפש באזור אחר</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>לא מצאתם את מה שחיפשתם?</h2>
          <p className={styles.ctaText}>
            הצוות שלנו ישמח לעזור לכם למצוא את המתחם המושלם לחופשה שלכם
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            <span>צרו קשר</span>
            <span className={styles.ctaIcon}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Property Card Component
interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  const typeLabels: Record<PropertyType, string> = {
    villa: 'וילה',
    zimmer: 'צימר',
    apartment: 'דירת נופש',
    hotel: 'מלון בוטיק',
    event: 'מתחם אירועים',
  };

  return (
    <Link 
      href={`/selected/${property.slug}`} 
      className={`${styles.card} ${featured ? styles.featuredCard : ''}`}
    >
      {/* Image */}
      <div className={styles.cardImage}>
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        {featured && (
          <div className={styles.featuredBadge}>
            <span>⭐ מומלץ</span>
          </div>
        )}
        <div className={styles.typeBadge}>
          {typeLabels[property.type]}
        </div>
      </div>

      {/* Content */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{property.name}</h3>
        <p className={styles.cardLocation}>
          <span className={styles.locationIcon}>📍</span>
          {property.location}
        </p>

        {/* Info */}
        <div className={styles.cardInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>👥</span>
            <span>עד {property.capacity} אורחים</span>
          </div>
          {property.bedrooms > 0 && (
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🛏️</span>
              <span>{property.bedrooms} חדרים</span>
            </div>
          )}
        </div>

        {/* Rating */}
        <div className={styles.cardRating}>
          <div className={styles.ratingStars}>
            <span className={styles.star}>⭐</span>
            <span className={styles.ratingNumber}>{property.rating.toFixed(1)}</span>
          </div>
          <span className={styles.reviewsCount}>
            ({property.reviewsCount} ביקורות)
          </span>
        </div>

        {/* Price */}
        <div className={styles.cardFooter}>
          <div className={styles.price}>
            <span className={styles.priceAmount}>{property.priceRange}</span>
            <span className={styles.priceLabel}>/ לילה</span>
          </div>
          <div className={styles.cardCta}>
            <span>לפרטים</span>
            <span className={styles.ctaArrow}>←</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SelectedPage;
