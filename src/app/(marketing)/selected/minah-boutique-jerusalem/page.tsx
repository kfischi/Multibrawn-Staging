import React from 'react';
import { notFound } from 'next/navigation';
import MinahBoutiqueClient from './MinahBoutiqueClient';

// Hardcoded data for Minah Boutique
const property = {
  "id": "minah-boutique-jerusalem",
  "slug": "minah-boutique-jerusalem",
  "name": "מינה בוטיק",
  "subtitle": "ירושלים",
  "type": "hotel",
  "location": "ירושלים",
  "region": "jerusalem",
  "heroImage": "https://tours.tzimer360.co.il/Images/מינה בוטיק/מינה בוטיק 1/R0020604_HDR-Edit_still_1229_793.webp",
  "gallery": [
    "https://tours.tzimer360.co.il/Images/מינה בוטיק/מינה בוטיק 1/R0020605_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images/מינה בוטיק/מינה בוטיק 2/R0020602_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images/מינה בוטיק/מינה בוטיק 3/R0020597_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images/מינה בוטיק/מינה בוטיק 5/R0020611_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images/מינה בוטיק/מינה בוטיק 6/R0020618_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images/מינה בוטיק/מינה בוטיק 7/R0020625_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images/מינה בוטיק 4/R0020684_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images/מינה בוטיק/מינה בוטיק 1/R0020608_HDR-Edit_still_1229_793.webp"
  ],
  "priceRange": "₪500-750",
  "priceNote": "מחירים משתנים לפי חדר ועונה",
  "capacity": 24,
  "bedrooms": 7,
  "bathrooms": 6,
  "featured": true,
  "rating": 5.0,
  "reviewsCount": 0,
  "affiliateLink": "https://www.tzimer360.co.il/Location/C4653/?affiliate=yc",
  "host": "מיכאל"
};

// Server Component
export default async function MinahBoutiquePage() {
  if (!property) {
    notFound();
  }

  return <MinahBoutiqueClient property={property} />;
}
