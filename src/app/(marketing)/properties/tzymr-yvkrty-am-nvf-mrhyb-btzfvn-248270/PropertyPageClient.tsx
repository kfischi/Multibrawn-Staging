'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const property = {
  "id": "aff-1769248271",
  "slug": "tzymr-yvkrty-am-nvf-mrhyb-btzfvn-248270",
  "name": "צימר יוקרתי עם נוף מרהיב בצפון",
  "location": "נכס נופש מדהים",
  "region": "צפון",
  "description": "נכס נופש מדהים",
  "type": "zimmer",
  "category": "selected",
  "guests": "עד 4 אורחים",
  "bedrooms": 2,
  "bathrooms": 1,
  "rating": 4.8,
  "pricePerNight": 1200,
  "features": [
    "נוף מרהיב",
    "שקט ופרטיות"
  ],
  "amenities": [
    "Wi-Fi",
    "מטבח מאובזר",
    "חניה"
  ],
  "images": [
    "https://tours.tzimer360.co.il/Images\\ביאנקיני - מתחם קבוצתי\\קיסר\\R0020439_HDR-Edit - Copy_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images\\ביאנקיני - מתחם קבוצתי\\קיסר\\R0020433_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images\\ביאנקיני - מתחם קבוצתי\\קיסר\\R0020434_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images\\ביאנקיני - מתחם קבוצתי\\קיסר\\R0020435_HDR-Edit_still_1229_793.webp",
    "https://tours.tzimer360.co.il/Images\\ביאנקיני - מתחם קבוצתי\\קיסר\\R0020436_HDR-Edit_still_1229_793.webp"
  ],
  "contactPhone": "052-398-3394",
  "checkIn": "15:00",
  "checkOut": "11:00",
  "minNights": 2,
  "whatsapp": "972523983394",
  "affiliateUrl": "https://www.tzimer360.co.il/Location/C4642?t=affiliate26",
  "isFeatured": true,
  "isAvailable": true,
  "createdAt": "2026-01-24T09:51:11.047292",
  "source": "github-actions-complete",
  "cloudinaryFolder": "affiliate-properties"
};

export default function PropertyPageClient() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black">
        <Image
          src={property.images[selectedImage]}
          alt={property.name}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {property.name}
            </h1>
            <p className="text-xl text-white/90">
              {property.location} • {property.region}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-2">
          {property.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative h-24 rounded-lg overflow-hidden ${
                idx === selectedImage ? 'ring-4 ring-purple-500' : ''
              }`}
            >
              <Image
                src={img}
                alt={`תמונה ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">תיאור הנכס</h2>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">מתקנים ושירותים</h2>
              <div className="grid grid-cols-2 gap-4">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-4">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  ₪{property.pricePerNight}
                </div>
                <div className="text-gray-600">ללילה</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">אורחים</span>
                  <span className="font-semibold">{property.guests}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">חדרי שינה</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">שירותים</span>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
              </div>

              <a
                href={property.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:opacity-90 transition"
              >
                🔗 הזמן עכשיו באתר השותף
              </a>

              <p className="text-xs text-gray-500 text-center mt-3">
                * המחיר והזמינות כפופים לתנאי האתר השותף
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="container mx-auto px-4 py-8">
        <Link
          href="/selected"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
        >
          ← חזרה לגלריה
        </Link>
      </section>
    </div>
  );
}
