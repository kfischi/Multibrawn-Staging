'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Import existing properties
import propertiesData from '@/data/properties.json';
import selectedProperties from '@/data/selected-pilot.json';

export default function UnifiedGalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentImageIndexes, setCurrentImageIndexes] = useState<Record<string, number>>({});

  // Combine all properties
  const allProperties = [
    // Affiliate properties first (with special badge)
    ...selectedProperties.map((prop: any) => ({
      ...prop,
      isAffiliate: true,
      link: `/selected/${prop.slug}`,
    })),
    // Your existing properties
    ...propertiesData.properties.map((prop: any) => ({
      ...prop,
      isAffiliate: false,
      slug: prop.id,
      thumbnailImage: prop.image,
      images: [prop.image], // Single image for existing properties
      link: `/gallery/${prop.id}`,
    })),
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'הכל', icon: '🏠' },
    { id: 'ours', name: 'המתחמים שלנו', icon: '⭐' },
    { id: 'partners', name: 'שותפים מומלצים', icon: '🤝' },
    { id: 'villa', name: 'וילות', icon: '🏛️' },
    { id: 'zimmer', name: 'צימרים', icon: '🏡' },
    { id: 'apartment', name: 'דירות נופש', icon: '🏢' },
    { id: 'hotel', name: 'מלונות בוטיק', icon: '🏨' },
    { id: 'event', name: 'אירועים', icon: '💍' },
  ];

  // Filter logic
  const filteredProperties = allProperties.filter((prop) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ours') return !prop.isAffiliate;
    if (activeFilter === 'partners') return prop.isAffiliate;
    return prop.type === activeFilter;
  });

  // Image navigation for carousel
  const handleNextImage = (propertyId: string, totalImages: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) + 1) % totalImages,
    }));
  };

  const handlePrevImage = (propertyId: string, totalImages: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const getCurrentImage = (propertyId: string) => {
    return currentImageIndexes[propertyId] || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            הגלריה המלאה שלנו
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            גלה את כל המתחמים המדהימים שלנו והשותפים המומלצים - במקום אחד
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => {
            const currentImageIndex = getCurrentImage(property.id);
            const propertyImages = property.images || [property.thumbnailImage];
            const hasMultipleImages = propertyImages.length > 1;

            return (
              <Link
                key={property.id}
                href={property.link}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Section with Carousel */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={propertyImages[currentImageIndex]}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Affiliate Badge */}
                  {property.isAffiliate && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                      <Star size={16} className="fill-current" />
                      <span>שותף מומלץ</span>
                    </div>
                  )}

                  {/* Image Counter */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                      {currentImageIndex + 1} / {propertyImages.length}
                    </div>
                  )}

                  {/* Navigation Arrows */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handlePrevImage(property.id, propertyImages.length);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight size={20} className="text-gray-800" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleNextImage(property.id, propertyImages.length);
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft size={20} className="text-gray-800" />
                      </button>
                    </>
                  )}

                  {/* Property Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {property.name || property.shortName}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin size={16} />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Description */}
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {property.description}
                  </p>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between text-sm">
                    {/* Guests */}
                    {property.guests && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users size={16} className="text-blue-600" />
                        <span>{property.guests}</span>
                      </div>
                    )}

                    {/* Rating */}
                    {property.rating && (
                      <div className="flex items-center gap-1 text-yellow-600">
                        <Star size={16} className="fill-current" />
                        <span className="font-bold">{property.rating}</span>
                      </div>
                    )}

                    {/* Price */}
                    {property.pricePerNight && (
                      <div className="text-blue-600 font-bold">
                        ₪{property.pricePerNight}
                      </div>
                    )}
                    {property.price && !property.pricePerNight && (
                      <div className="text-blue-600 font-bold">
                        {property.price}
                      </div>
                    )}
                  </div>

                  {/* Features Tags */}
                  {property.features && property.features.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {property.features.slice(0, 3).map((feature: string, idx: number) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                      {property.features.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                          +{property.features.length - 3} עוד
                        </span>
                      )}
                    </div>
                  )}

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl transition-all transform group-hover:scale-105">
                    {property.isAffiliate ? 'צפה בפרטים ←' : 'לפרטים מלאים ←'}
                  </button>
                </div>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              לא נמצאו תוצאות
            </h3>
            <p className="text-gray-600">
              נסה לשנות את הסינון או לחפש משהו אחר
            </p>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            מצאת משהו שאהבת? 🌟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            צור איתנו קשר עכשיו ונעזור לך למצוא את המקום המושלם לאירוע או לחופשה שלך
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-full text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            צור קשר עכשיו →
          </Link>
        </div>
      </section>

    </div>
  );
}
