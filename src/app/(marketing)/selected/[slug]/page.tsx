import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import selectedProperties from '@/data/selected-pilot.json';

// Generate static params for all properties
export async function generateStaticParams() {
  return selectedProperties.map((property: any) => ({
    slug: property.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const property = selectedProperties.find((p: any) => p.slug === params.slug);
  
  if (!property) {
    return {
      title: 'נכס לא נמצא | MULTIBRAWN',
    };
  }

  return {
    title: `${property.name} | MULTIBRAWN`,
    description: property.description || `${property.name} - ${property.location}`,
  };
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = selectedProperties.find((p: any) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  const allImages = property.images || [property.heroImage];

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        height: '70vh', 
        minHeight: '500px',
        overflow: 'hidden'
      }}>
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 2rem',
          color: 'white'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <Link href="/selected" style={{ color: 'white', opacity: 0.9 }}>
              ← חזרה למובחרים
            </Link>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            {property.name}
          </h1>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            fontSize: '1.1rem',
            marginBottom: '1.5rem'
          }}>
            <span>📍 {property.location}</span>
            <span>•</span>
            <span>⭐ {property.rating}</span>
            <span>•</span>
            <span>👥 עד {property.capacity} אורחים</span>
          </div>

          <div style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            background: 'white',
            color: '#667eea',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '1.1rem',
            textDecoration: 'none',
            marginTop: '1rem',
            cursor: 'pointer'
          }}>
            <a 
              href={property.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              🔥 בדוק זמינות והזמן עכשיו
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem',
        background: '#ffffff'
      }}>
        
        {/* Gallery */}
        {allImages.length > 1 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '2rem'
            }}>
              📸 הגלריה
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1rem'
            }}>
              {allImages.map((img: string, idx: number) => (
                <div key={idx} style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src={img}
                    alt={`${property.name} - תמונה ${idx + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Description */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '2rem'
          }}>
            📝 תיאור
          </h2>
          <div style={{
            padding: '2rem',
            background: '#f8f9fa',
            borderRadius: '16px',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: '#333'
          }}>
            {property.description}
          </div>
        </section>

        {/* Highlights */}
        {property.highlights && property.highlights.length > 0 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '2rem'
            }}>
              ✨ נקודות מרכזיות
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {property.highlights.map((highlight: string, idx: number) => (
                <div key={idx} style={{
                  padding: '1.5rem',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  borderLeft: '4px solid #667eea',
                  color: '#2d3748',
                  fontSize: '1rem',
                  lineHeight: 1.6
                }}>
                  ✓ {highlight}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Units */}
        {property.units && property.units.length > 0 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '2rem'
            }}>
              🏠 יחידות האירוח
            </h2>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {property.units.map((unit: any, idx: number) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}>
                  {unit.images && unit.images[0] && (
                    <div style={{ position: 'relative', height: '300px' }}>
                      <Image
                        src={unit.images[0]}
                        alt={unit.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      marginBottom: '0.5rem'
                    }}>
                      {unit.name}
                    </h3>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#667eea',
                      marginBottom: '1rem'
                    }}>
                      ₪{unit.price} / לילה
                    </div>
                    <p style={{
                      color: '#4a5568',
                      lineHeight: 1.6,
                      marginBottom: '1rem'
                    }}>
                      {unit.description}
                    </p>
                    {unit.features && (
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '0.75rem',
                        marginTop: '1rem'
                      }}>
                        {unit.features.map((feature: string, i: number) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#2d3748',
                            fontSize: '0.9rem'
                          }}>
                            <span style={{ color: '#667eea' }}>✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Amenities */}
        {property.amenities && property.amenities.length > 0 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '2rem'
            }}>
              🎯 מתקנים ושירותים
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem'
            }}>
              {property.amenities.map((amenity: string, idx: number) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: '#f8f9fa',
                  borderRadius: '10px',
                  color: '#2d3748'
                }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    background: '#667eea',
                    color: 'white',
                    borderRadius: '50%',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>
                    ✓
                  </span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* House Rules */}
        {property.houseRules && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '2rem'
            }}>
              📋 חוקי הבית
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#718096',
                  marginBottom: '0.5rem',
                  fontWeight: 600
                }}>
                  צ'ק אין
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  color: '#1a1a1a',
                  fontWeight: 700
                }}>
                  {property.houseRules.checkIn || property.checkIn || '15:00'}
                </div>
              </div>
              
              <div style={{
                background: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#718096',
                  marginBottom: '0.5rem',
                  fontWeight: 600
                }}>
                  צ'ק אאוט
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  color: '#1a1a1a',
                  fontWeight: 700
                }}>
                  {property.houseRules.checkOut || property.checkOut || '11:00'}
                </div>
              </div>

              {property.houseRules.minNights && (
                <div style={{
                  background: '#f8f9fa',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#718096',
                    marginBottom: '0.5rem',
                    fontWeight: 600
                  }}>
                    מינימום לילות
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    color: '#1a1a1a',
                    fontWeight: 700
                  }}>
                    {property.houseRules.minNights}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '3rem 2rem',
          borderRadius: '20px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>
            מוכנים להזמין?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            בדקו זמינות והזמינו את {property.name} עכשיו
          </p>
          <div style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>
            {property.priceRange}
          </div>
          <a
            href={property.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '1.25rem 3rem',
              background: 'white',
              color: '#667eea',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '1.2rem',
              textDecoration: 'none',
              transition: 'transform 0.3s ease'
            }}
          >
            בדוק זמינות והזמן →
          </a>
          <p style={{
            marginTop: '1.5rem',
            fontSize: '0.9rem',
            opacity: 0.8
          }}>
            * תועברו לאתר השותף להשלמת ההזמנה
          </p>
        </section>

      </div>
    </div>
  );
}
