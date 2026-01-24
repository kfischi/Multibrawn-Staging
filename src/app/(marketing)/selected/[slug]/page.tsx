import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import selectedProperties from '@/data/selected-pilot.json';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return selectedProperties.map((property: any) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = selectedProperties.find((p: any) => p.slug === slug);
  
  if (!property) {
    return { title: 'נכס לא נמצא | MULTIBRAWN' };
  }

  return {
    title: `${property.name} | MULTIBRAWN`,
    description: property.description || `${property.name} - ${property.location}`,
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const property = selectedProperties.find((p: any) => p.slug === resolvedParams.slug);

  if (!property) {
    notFound();
  }

  const allImages = property.images || [property.heroImage];

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <div style={{ position: 'relative', height: '70vh', minHeight: '500px', overflow: 'hidden' }}>
        <Image src={property.heroImage} alt={property.name} fill priority style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem', color: 'white' }}>
          <Link href="/selected" style={{ color: 'white', marginBottom: '1.5rem', textDecoration: 'none' }}>← חזרה</Link>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1rem' }}>{property.name}</h1>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <span>📍 {property.location}</span><span>•</span><span>⭐ {property.rating}</span><span>•</span><span>👥 {property.capacity}</span>
          </div>
          <a href={property.affiliateUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'white', color: '#667eea', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', width: 'fit-content' }}>🔥 הזמן עכשיו</a>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        {allImages.length > 1 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '2rem' }}>📸 גלריה</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
              {allImages.slice(0, 9).map((img: string, idx: number) => (
                <div key={idx} style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image src={img} alt={`${idx + 1}`} fill sizes="33vw" style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </section>
        )}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '2rem' }}>📝 תיאור</h2>
          <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '16px', fontSize: '1.1rem', lineHeight: 1.8, color: '#333' }}>{property.description}</div>
        </section>
        {property.highlights && property.highlights.length > 0 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '2rem' }}>✨ מה מיוחד</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {property.highlights.map((h: string, i: number) => (
                <div key={i} style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #667eea', color: '#2d3748' }}>✓ {h}</div>
              ))}
            </div>
          </section>
        )}
        {property.amenities && property.amenities.length > 0 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '2rem' }}>🎯 מתקנים</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {property.amenities.map((a: string, i: number) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: '#f8f9fa', borderRadius: '10px', color: '#2d3748' }}>
                  <span style={{ width: '24px', height: '24px', background: '#667eea', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700 }}>✓</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </section>
        )}
        <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '3rem 2rem', borderRadius: '20px', textAlign: 'center', color: 'white' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>מוכנים להזמין?</h3>
          <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>{property.priceRange}</div>
          <a href={property.affiliateUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '1.25rem 3rem', background: 'white', color: '#667eea', borderRadius: '50px', fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none' }}>בדוק זמינות →</a>
        </section>
      </div>
    </div>
  );
}
