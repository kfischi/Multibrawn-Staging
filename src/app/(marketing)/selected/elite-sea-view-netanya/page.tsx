import { Metadata } from 'next';
import PropertyPageClient from './PropertyPageClient';

export const metadata: Metadata = {
  title: 'דירות העילית - נוף ים פנורמי ורוגע עירוני בנתניה | MULTIBRAWN',
  description: 'שלוש דירות נופש מעוצבות במלון כרמל בנתניה, כולן עם נוף פתוח ומרהיב לים התיכון. מיקום מרכזי ליד החוף ומרכזי הבילוי. מתאימות לזוגות ולמשפחות.',
  keywords: 'דירות נופש נתניה, נוף לים, מלון כרמל, אירוח נתניה, דירות עם נוף לים התיכון',
  openGraph: {
    title: 'דירות העילית - נוף ים פנורמי בנתניה',
    description: '3 דירות נופש יוקרתיות עם נוף מרהיב לים התיכון',
    images: ['https://MultibrawnWEB.b-cdn.net/%D7%A6%D7%99%D7%9E%D7%A8%20360/%D7%9E%D7%9C%D7%95%D7%9F%20%D7%9B%D7%A8%D7%9E%D7%9C/R0011393_still_1229_793.webp'],
  },
};

export default function Page() {
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

  return <PropertyPageClient property={property} />;
}
