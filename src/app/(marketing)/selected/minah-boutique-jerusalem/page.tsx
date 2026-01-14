import React from 'react';
import { notFound } from 'next/navigation';
import MinahBoutiqueClient from './MinahBoutiqueClient';
import type { Metadata } from 'next';

// Property data
const property = {
  id: "minah-boutique-jerusalem",
  slug: "minah-boutique-jerusalem",
  name: "מינה בוטיק",
  subtitle: "ירושלים",
  type: "hotel",
  location: "ירושלים",
  region: "jerusalem",
  heroImage: "https://res.cloudinary.com/decirk3zb/image/upload/w_1920,h_1080,c_fill,q_auto,f_auto/v1768342965/R0011001_still_1229_793_iofh7c.webp",
  gallery: [
    "https://res.cloudinary.com/decirk3zb/image/upload/w_800,h_600,c_fill,q_auto,f_auto/v1768342964/R0011612_still_1229_793_vlfqkp.webp",
    "https://res.cloudinary.com/decirk3zb/image/upload/w_800,h_600,c_fill,q_auto,f_auto/v1768342965/R0011630_still_1229_793_cucngc.webp",
    "https://res.cloudinary.com/decirk3zb/image/upload/w_800,h_600,c_fill,q_auto,f_auto/v1768342964/R0011627_still_1229_793_jn6mw0.webp"
  ],
  capacity: 24,
  bedrooms: 7,
  bathrooms: 6,
  featured: true,
  rating: 5.0,
  reviewsCount: 0,
  affiliateLink: "https://www.tzimer360.co.il/Location/C4653/?affiliate=yc",
  host: "מיכאל"
};

// Metadata for SEO
export const metadata: Metadata = {
  title: 'מינה בוטיק ירושלים - 7 סוויטות בוטיק במרכז העיר | MULTIBRAWN',
  description: 'מתחם בוטיק ייחודי במרכז ירושלים עם 7 סוויטות מעוצבות, מיקום מושלם, התאמה לשומרי שבת, ו-2 חדרים עם ג\'קוזי פרטי. קרוב לעיר העתיקה והכותל.',
  keywords: 'מינה בוטיק, מלון בוטיק ירושלים, צימר ירושלים, לינה ירושלים, סוויטות ירושלים, שומר שבת, ג\'קוזי ירושלים',
  openGraph: {
    title: 'מינה בוטיק ירושלים - 7 סוויטות בוטיק',
    description: 'מתחם בוטיק ייחודי במרכז ירושלים עם 7 סוויטות מעוצבות',
    images: [property.heroImage],
  }
};

export default function MinahBoutiquePage() {
  if (!property) {
    notFound();
  }

  return <MinahBoutiqueClient property={property} />;
}
