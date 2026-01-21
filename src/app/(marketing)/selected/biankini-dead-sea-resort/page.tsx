import PropertyPageClient from './PropertyPageClient';

const property = {
  id: "biankini-dead-sea-resort",
  slug: "biankini-dead-sea-resort",
  name: "כפר נופש ביאנקיני ים המלח",
  type: "event",
  location: "קליה, ים המלח",
  region: "south",
  heroImage: "https://res.cloudinary.com/decirk3zb/image/upload/v1769030004/R0020469_HDR-Edit_still_1229_793_ucujhh.webp",
  gallery: [
    "https://res.cloudinary.com/decirk3zb/image/upload/v1769030004/R0020468_HDR-Edit_still_1229_793_urnhdm.webp",
    "https://res.cloudinary.com/decirk3zb/image/upload/v1769030004/R0020455_HDR-Edit_still_1229_793_lxmwie.webp",
    "https://res.cloudinary.com/decirk3zb/image/upload/v1769030004/R0020458_HDR-Edit_still_1229_793_u7aswa.webp",
    "https://res.cloudinary.com/decirk3zb/image/upload/v1769030004/R0020461_HDR-Edit_still_1229_793_lugpld.webp",
    "https://res.cloudinary.com/decirk3zb/image/upload/v1769030004/R0020444_HDR-Edit_-_Copy_still_1229_793_dxpo50.webp"
  ],
  description: "כפר נופש מרהיב בעיצוב מרוקאי אותנטי הפרוס על 200 דונם על חוף ים המלח. המתחם כולל 110 יחידות אירוח מגוונות, חוף פרטי עם בוץ מינרלי חופשי, בריכה חצי אולימפית, 3 אולמות אירועים ומתקנים עשירים. מתאים לאירועים גדולים, חתונות, אירועי חברה וחופשות משפחתיות במיקום ייחודי במקום הנמוך ביותר בעולם.",
  highlights: [
    "200 דונם מתחם על חוף ים המלח",
    "110 יחידות אירוח בעיצוב מרוקאי",
    "חוף פרטי עם בוץ מינרלי חופשי",
    "בריכה חצי אולימפית ובריכת פעוטות",
    "3 אולמות אירועים לעד 500 אורחים",
    "גן אירועים 500 מטר + אמפיתיאטרון",
    "בית כנסת עם 2 ספרי תורה",
    "מסעדה מרוקאית ביתית",
    "חדר מלח וחדר משחקים",
    "מתחם קמפינג",
    "טיולי ג'יפים וטרקטורונים",
    "אבטחה 24/7 ושירותי הצלה",
    "חניה חינם ו-Wi-Fi",
    "נגישות מלאה לנכים",
    "25 דקות מירושלים, שעה ורבע מתל אביב"
  ],
  amenities: [
    "מטבחון מאובזר בכל יחידה",
    "מקרר ומיקרוגל",
    "טלוויזיה חכמה בלווין",
    "מזגן ומאווררי תקרה",
    "כספת אישית",
    "מרפסת או גינה פרטית",
    "פינת קפה ותה",
    "חדרי רחצה מודרניים",
    "ארוחת בוקר (בתיאום מראש)",
    "חנות נוחות במקום",
    "חדרי ישיבות לקבוצות",
    "שירותי הצלה וחירום",
    "צוות רב-לשוני",
    "חיות מחמד מותרות"
  ],
  nearbyAttractions: [
    "מערות קומראן - 15 ק\"מ (מגילות ים המלח)",
    "שמורת עין גדי - 25 ק\"מ (נחלים ומפלים)",
    "מצדה - 30 ק\"מ (אתר מורשת עולמית)",
    "ירושלים העתיקה - 30 ק\"מ (25 דקות נסיעה)",
    "כפר אדומים - 10 ק\"מ (טיולי ג'יפים)",
    "טיולי ATV ורייזרים במדבר יהודה",
    "שייט קייקים בים המלח",
    "חוף קליה הציבורי - 2 ק\"מ",
    "נווה מדבר ספא - 5 ק\"מ"
  ],
  houseRules: [
    "Check-in: 15:00 | Check-out: 11:00",
    "לינה מינימלית: 2 לילות",
    "אירועים ומסיבות: בתיאום מראש בלבד",
    "שמירה על שקט בין 23:00-07:00",
    "אפשר להביא חיות מחמד (בתיאום)",
    "עישון מותר רק בחוץ",
    "שמירה על ניקיון ונקיון המתחם",
    "כיבוד שעות הכניסה והיציאה"
  ],
  capacity: 500,
  bedrooms: 110,
  bathrooms: 110,
  priceRange: "₪550-1,500",
  affiliateLink: "https://www.tzimer360.co.il/Location/C4642?t=affiliate26",
  featured: true,
  rating: 4.8,
  reviewsCount: 0
};

export const metadata = {
  title: 'כפר נופש ביאנקיני ים המלח - 110 יחידות על 200 דונם | MULTIBRAWN',
  description: 'כפר נופש מרהיב בעיצוב מרוקאי על 200 דונם בים המלח. 110 יחידות אירוח, חוף פרטי, בוץ חופשי, בריכה חצי אולימפית, 3 אולמות אירועים לעד 500 אורחים. מושלם לחתונות ואירועי חברה.',
  keywords: 'ביאנקיני, כפר נופש ים המלח, מתחם אירועים ים המלח, חתונות ים המלח, אירועי חברה, עיצוב מרוקאי, חוף פרטי, בוץ ים המלח, קליה',
  openGraph: {
    title: 'כפר נופש ביאנקיני ים המלח',
    description: 'כפר נופש מרהיב בעיצוב מרוקאי על 200 דונם בים המלח',
    images: [property.heroImage],
  },
};

export default function BiankiniPage() {
  return <PropertyPageClient property={property} />;
}
