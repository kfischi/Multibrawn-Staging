'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TestPropertyPage() {
  const property = {
    name: "וילת טסט מרהיבה בגליל",
    location: "גליל מערבי",
    price: 1200,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
    ],
    features: ["בריכה פרטית", "ג'קוזי", "נוף פנורמי"],
    affiliateUrl: "https://www.tzimer360.co.il/Location/C4652?t=affiliate26"
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{property.name}</h1>
        <p className="text-xl text-gray-600 mb-8">{property.location}</p>
        
        <div className="relative h-96 mb-8">
          <Image 
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">מאפיינים</h2>
          <ul className="space-y-2">
            {property.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
          <p className="text-3xl font-bold mb-4">₪{property.price} / לילה</p>
          <a 
            href={property.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-700"
          >
            הזמן עכשיו באתר השותף
          </a>
          <p className="text-sm text-gray-500 mt-2">
            * לאחר הלחיצה תועברו לאתר צימר 360
          </p>
        </div>
      </div>
    </div>
  );
}
