'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Selected.module.css';
import selectedProperties from '@/data/selected-pilot.json';

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

  const typeFilters = [
    { value: 'all', label: 'הכל' },
    { value: 'villa', label: 'וילות' },
    { value: 'zimmer', label: 'צימרים' },
    { value: 'apartment', label: 'דירות נופש' },
    { value: 'hotel', label: 'מלונות בוטיק' },
  ];

  const regionFilters = [
    { value: 'all', label: 'כל האזורים' },
    { value: 'north', label: 'צפון' },
    { value: 'center', label: 'מרכז' },
    { value: 'south', label: 'דרום' },
    { value: 'jerusalem', label: 'ירושלים' },
  ];

  const filteredProperties = useMemo(() => {
    let filtered = selectedProperties as unknown as Property[];
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(p => p.type === activeFilter);
    }
    
    if (activeRegion !== 'all') {
      filtered = filtered.filter(p => p.region === activeRegion);
    }
    
    return filtered;
  }, [activeFilter, activeRegion]);

  const featuredProperties = useMemo(() => {
    return (selectedProperties as unknown as Property[]).filter(p => p.featured);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>המובחרים שלנו</div>
          <h1 className={styles.heroTitle}>
            נכסים מעולים שבדקנו במיוחד עבורכם
          </h1>
          <p className={styles.heroSubtitle}>
            מבחר נכסים יוקרתיים שעברו בדיקה קפדנית ועונים על הסטנדרטים הגבוהים ביותר
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filters}>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>סוג נכס:</span>
          <div className={styles.filterButtons}>
            {typeFilters.map((filter) => (
              <button
                key={filter.value}
                className={`${styles.filterButton} ${activeFilter === filter.value ? styles.filterButtonActive : ''}`}
                onClick={() => setActiveFilter(filter.value as PropertyType | 'all')}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>אזור:</span>
          <div className={styles.filterButtons}>
            {regionFilters.map((filter) => (
              <button
                key={filter.value}
                className={`${styles.filterButton} ${activeRegion === filter.value ? styles.filterButtonActive : ''}`}
                onClick={() => setActiveRegion(filter.value as Region | 'all')}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {featuredProperties.length > 0 && activeFilter === 'all' && activeRegion === 'all' && (
        <section className={styles.featured}>
          <h2 className={styles.sectionTitle}>מומלצים במיוחד</h2>
          <div className={styles.featuredGrid}>
            {featuredProperties.slice(0, 3).map((property) => (
              <Link
                key={property.id}
                href={`/selected/${property.slug}`}
                className={styles.featuredCard}
              >
                <div className={styles.featuredImage}>
                  <Image
                    src={property.heroImage}
                    alt={property.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.featuredBadge}>מומלץ</div>
                </div>
                <div className={styles.featuredContent}>
                  <h3 className={styles.featuredTitle}>{property.name}</h3>
                  <p className={styles.featuredLocation}>{property.location}</p>
                  <div className={styles.featuredMeta}>
                    <span>עד {property.capacity} אורחים</span>
                    <span className={styles.metaDivider}>•</span>
                    <span>{property.bedrooms} חדרים</span>
                  </div>
                  <div className={styles.featuredFooter}>
                    <span className={styles.featuredPrice}>{property.priceRange}</span>
                    <span className={styles.featuredRating}>
                      {typeof property.rating === 'number' ? property.rating.toFixed(1) : '0.0'} ★
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Properties */}
      <section className={styles.properties}>
        <div className={styles.propertiesHeader}>
          <h2 className={styles.sectionTitle}>
            {filteredProperties.length} נכסים זמינים
          </h2>
        </div>

        <div className={styles.propertiesGrid}>
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              href={`/selected/${property.slug}`}
              className={styles.propertyCard}
            >
              <div className={styles.propertyImage}>
                <Image
                  src={property.heroImage}
                  alt={property.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                {property.featured && (
                  <div className={styles.propertyBadge}>מומלץ</div>
                )}
              </div>
              <div className={styles.propertyContent}>
                <h3 className={styles.propertyTitle}>{property.name}</h3>
                <p className={styles.propertyLocation}>{property.location}</p>
                <div className={styles.propertyMeta}>
                  <span>עד {property.capacity} אורחים</span>
                  <span className={styles.metaDivider}>•</span>
                  <span>{property.bedrooms} חדרים</span>
                </div>
                <div className={styles.propertyFooter}>
                  <span className={styles.propertyPrice}>{property.priceRange}</span>
                  <span className={styles.propertyRating}>
                    {typeof property.rating === 'number' ? property.rating.toFixed(1) : '0.0'} ★
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SelectedPage;
