'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  MapPin, Users, BedDouble, Bath, Star, Check, 
  Wifi, Car, Utensils, Wind, Tv, Waves, 
  Coffee, ShoppingBag, Trees, UtensilsCrossed,
  Phone, MessageCircle, ExternalLink, ChevronLeft, ChevronRight
} from 'lucide-react';

// Property data
const property = {
  id: "netanya-sea-view-012626",
  slug: "elite-sea-view-netanya-012626",
  name: "דירות העילית - נוף ים פנורמי ורוגע עירוני בנתניה",
  location: "נתניה",
  region: "השרון - מרכז",
  description: "שלוש דירות נופש מעוצבות במלון כרמל בנתניה, כולן עם נוף פתוח ומרהיב לים התיכון. מיקום מרכזי ליד החוף, במרחק הליכה ממרכזי הבילוי והקניות. אווירת חופשה מושלמת, שקט ורוגע עירוני במיקום אידיאלי.",
  type: "apartment",
  category: "selected",
  guests: "עד 6 אורחים",
  bedrooms: 3,
  bathrooms: 3,
  rating: 4.9,
  pricePerNight: 400,
  features: [
    "נוף פנורמי לים התיכון",
    "מיקום מרכזי ליד החוף",
    "סאונה רטובה",
    "מתקני כושר",
    "עמדת טעינה לרכב חשמלי",
    "מטבחון מאובזר",
    "מזגן בכל חדר",
    "טלוויזיה",
    "חניה חינם"
  ],
  amenities: [
    "Wi-Fi מהיר",
    "מטבח מאובזר",
    "מקרר ומיקרוגל",
    "כלי אוכל וכלי בישול",
    "מגבות ומצעים",
    "שמפו ומרכך",
    "מייבש שיער",
    "פינוקים: שוקולדים ופירות"
  ],
  images: [
    "https://MultibrawnWEB.b-cdn.net/%D7%A6%D7%99%D7%9E%D7%A8%20360/%D7%9E%D7%9C%D7%95%D7%9F%20%D7%9B%D7%A8%D7%9E%D7%9C/R0011393_still_1229_793.webp",
    "https://MultibrawnWEB.b-cdn.net/%D7%A6%D7%99%D7%9E%D7%A8%20360/%D7%9E%D7%9C%D7%95%D7%9F%20%D7%9B%D7%A8%D7%9E%D7%9C/R0011392_still_1229_793.webp",
    "https://MultibrawnWEB.b-cdn.net/%D7%A6%D7%99%D7%9E%D7%A8%20360/%D7%9E%D7%9C%D7%95%D7%9F%20%D7%9B%D7%A8%D7%9E%D7%9C/R0011393%20-%20Copy_still_1229_793.webp",
    "https://MultibrawnWEB.b-cdn.net/%D7%A6%D7%99%D7%9E%D7%A8%20360/%D7%9E%D7%9C%D7%95%D7%9F%20%D7%9B%D7%A8%D7%9E%D7%9C/R0011395_still_1229_793.webp"
  ],
  contactPhone: "052-398-3394",
  whatsapp: "972523983394",
  checkIn: "15:00",
  checkOut: "11:00",
  affiliateUrl: "https://www.tzimer360.co.il/Location/C4617?t=affiliate26",
  isFeatured: true,
  isAvailable: true,
  specialFeatures: [
    "מתאים לציבור הדתי",
    "פלטת שבת ומיחם",
    "בית כנסת ומקווה בסביבה",
    "אפשרות לאוכל כשר"
  ]
};

export default function PropertyPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      
      {/* Hero Section with Image Gallery */}
      <section className="relative h-[70vh] w-full bg-black">
        <div className="relative h-full w-full">
          <Image 
            src={property.images[currentImage]}
            alt={property.name}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all p-3 rounded-full"
          >
            <ChevronRight className="text-white" size={28} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all p-3 rounded-full"
          >
            <ChevronLeft className="text-white" size={28} />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
            {currentImage + 1} / {property.images.length}
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-12">
              <div className="max-w-4xl">
                <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-full text-white text-sm font-bold mb-4">
                  ⭐ מומלץ MULTIBRAWN
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                  {property.name}
                </h1>
                <div className="flex items-center gap-2 text-xl text-white/90">
                  <MapPin size={24} className="text-cyan-400" />
                  <span>{property.location}, {property.region}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Thumbnail Gallery */}
        <div className="absolute bottom-20 right-6 flex gap-2">
          {property.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                idx === currentImage ? 'ring-4 ring-cyan-400 scale-110' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={img} alt={`תמונה ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100">
                <Users className="mx-auto mb-3 text-blue-600" size={32} />
                <div className="font-bold text-gray-800">{property.guests}</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100">
                <BedDouble className="mx-auto mb-3 text-purple-600" size={32} />
                <div className="font-bold text-gray-800">{property.bedrooms} חדרי שינה</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100">
                <Bath className="mx-auto mb-3 text-cyan-600" size={32} />
                <div className="font-bold text-gray-800">{property.bathrooms} חדרי רחצה</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100">
                <Star className="mx-auto mb-3 text-yellow-500 fill-current" size={32} />
                <div className="font-bold text-gray-800">{property.rating} דירוג</div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">על המקום</h2>
              <p className="text-xl leading-relaxed text-gray-700">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Waves className="text-blue-600" />
                מאפיינים מיוחדים
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.slice(0, showAllFeatures ? property.features.length : 6).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                    <Check className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              {property.features.length > 6 && (
                <button 
                  onClick={() => setShowAllFeatures(!showAllFeatures)}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-bold"
                >
                  {showAllFeatures ? 'הצג פחות' : `הצג עוד ${property.features.length - 6} מאפיינים`}
                </button>
              )}
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">מתקנים ושירותים</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Wifi className="text-blue-600" size={20} />
                    </div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Area Guide */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-8 border border-purple-100">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <MapPin className="text-purple-600" />
                מה יש לעשות בנתניה והסביבה? 🌊
              </h2>

              {/* Restaurants */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <UtensilsCrossed className="text-orange-600" />
                  מסעדות מומלצות
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">הרברט סמואל</h4>
                    <p className="text-gray-600 text-sm mb-2">מסעדת שף יוקרתית על הטיילת עם נוף לים</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-blue-600 font-medium">📍 5 דק׳ הליכה</span>
                      <span className="text-yellow-600 font-medium">⭐ 4.7/5</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">מסעדת לידו</h4>
                    <p className="text-gray-600 text-sm mb-2">איטלקית אותנטית, פיצות ופסטות ברמה גבוהה</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-blue-600 font-medium">📍 8 דק׳ הליכה</span>
                      <span className="text-yellow-600 font-medium">⭐ 4.6/5</span>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">השף של עמית</h4>
                    <p className="text-gray-600 text-sm mb-2">מסעדת בשרים כשרה, תפריט עשיר</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-blue-600 font-medium">📍 10 דק׳ נסיעה</span>
                      <span className="text-yellow-600 font-medium">⭐ 4.8/5</span>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">מסעדת מרינה</h4>
                    <p className="text-gray-600 text-sm mb-2">דגים ופירות ים טריים מול הים</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-blue-600 font-medium">📍 7 דק׳ הליכה</span>
                      <span className="text-yellow-600 font-medium">⭐ 4.5/5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attractions */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <Waves className="text-cyan-600" />
                  אטרקציות וטיולים
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm">
                    <div className="text-3xl mb-2">🏖️</div>
                    <h4 className="font-bold text-lg mb-2">חופי נתניה</h4>
                    <p className="text-gray-600 text-sm mb-2">חופים מטופחים עם טיילת יפהפייה</p>
                    <span className="text-blue-600 font-medium text-sm">📍 5 דק׳ הליכה</span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm">
                    <div className="text-3xl mb-2">🏛️</div>
                    <h4 className="font-bold text-lg mb-2">ארמון פולג</h4>
                    <p className="text-gray-600 text-sm mb-2">מתחם תרבות ואמנות מרהיב</p>
                    <span className="text-blue-600 font-medium text-sm">📍 12 דק׳ נסיעה</span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm">
                    <div className="text-3xl mb-2">🌳</div>
                    <h4 className="font-bold text-lg mb-2">גשר השלום</h4>
                    <p className="text-gray-600 text-sm mb-2">נקודת תצפית מרהיבה ופארק</p>
                    <span className="text-blue-600 font-medium text-sm">📍 8 דק׳ נסיעה</span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm">
                    <div className="text-3xl mb-2">🎭</div>
                    <h4 className="font-bold text-lg mb-2">היכל התרבות</h4>
                    <p className="text-gray-600 text-sm mb-2">הופעות, קולנוע ואירועי תרבות</p>
                    <span className="text-blue-600 font-medium text-sm">📍 10 דק׳ נסיעה</span>
                  </div>
                </div>
              </div>

              {/* Local Tips */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Coffee className="text-yellow-300" />
                  טיפים מקומיים
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex flex-col items-center text-center">
                    <Coffee size={24} className="mb-2 text-yellow-300" />
                    <p className="font-bold">קפה בוקר</p>
                    <p className="text-white/80">Aroma - 3 דק׳</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <ShoppingBag size={24} className="mb-2 text-yellow-300" />
                    <p className="font-bold">קניות</p>
                    <p className="text-white/80">BIG - 7 דק׳</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Trees size={24} className="mb-2 text-yellow-300" />
                    <p className="font-bold">פארק</p>
                    <p className="text-white/80">גן המלך - 5 דק׳</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Car size={24} className="mb-2 text-yellow-300" />
                    <p className="font-bold">חניה</p>
                    <p className="text-white/80">חינם במקום</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  ₪{property.pricePerNight}
                </div>
                <div className="text-gray-500">ליחידה / לילה</div>
                <div className="text-sm text-gray-400 mt-1">או ₪1,200 למתחם מלא</div>
              </div>

              <div className="flex items-center justify-center gap-2 text-yellow-500 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current" />
                ))}
                <span className="text-gray-600 font-bold mr-2">{property.rating}</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">כניסה</span>
                  <span className="font-bold text-gray-900">{property.checkIn}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">יציאה</span>
                  <span className="font-bold text-gray-900">{property.checkOut}</span>
                </div>
              </div>

              <a
                href={property.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-5 px-6 rounded-2xl text-xl text-center transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl mb-4"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>הזמן עכשיו באתר השותף</span>
                  <ExternalLink size={24} />
                </div>
              </a>

              <p className="text-center text-xs text-gray-400 mb-6">
                * לאחר הלחיצה תועברו לאתר צימר 360
              </p>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <a
                  href={`tel:${property.contactPhone}`}
                  className="flex items-center justify-center gap-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all"
                >
                  <Phone size={20} />
                  <span>{property.contactPhone}</span>
                </a>

                <a
                  href={`https://wa.me/${property.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all"
                >
                  <MessageCircle size={20} />
                  <span>שלח הודעה בWhatsApp</span>
                </a>
              </div>

              {property.specialFeatures && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">מתאים גם ל:</h4>
                  <div className="space-y-2">
                    {property.specialFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            מוכנים לחופשה עם נוף לים? 🌊
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            הזמינו עכשיו את דירת החלומות שלכם בנתניה ותיהנו מחופשה בלתי נשכחת
          </p>
          <a
            href={property.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-12 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl"
          >
            בדוק זמינות ומחירים →
          </a>
        </div>
      </div>

    </div>
  );
}
