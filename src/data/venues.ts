// הגדרת המבנה של נכס - אומרת ל-TypeScript למה לצפות
export interface Venue {
  id: string;
  title: string;
  location: string;
  price: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
  affiliateUrl?: string; // סימן שאלה אומר שזה שדה אופציונלי
}

export const venues: Venue[] = [
  {
    id: 'royal-villa-eilat',
    title: 'ROYAL VILLA EILAT',
    location: 'Eilat, Israel',
    price: 'From ₪4,500 / Night',
    capacity: 'Up to 12 Guests',
    description: 'The ultimate luxury vacation rental in Eilat. Features a private heated pool, jacuzzi, and smart home integration. Perfect for bachelor parties and exclusive family vacations.',
    image: 'https://images.unsplash.com/photo-1512918760532-3ed465901ea1?auto=format&fit=crop&q=80&w=1200',
    affiliateUrl: 'https://www.zimmer.co.il',
    features: ['Heated Pool', 'BBQ Zone', 'Sea View', '5 Suites']
  },
  {
    id: 'galilee-mansion',
    title: 'THE GALILEE MANSION',
    location: 'Rosh Pina',
    price: 'From ₪3,200 / Night',
    capacity: 'Up to 20 Guests',
    description: 'An isolated estate in the north. Huge outdoor area, complete privacy, professional sound system permitted, and a chef kitchen.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
    affiliateUrl: 'https://www.zimmer.co.il',
    features: ['Isolated', 'Huge Jacuzzi', 'Pro Sound', 'Chef Kitchen']
  },
  {
    id: 'tel-aviv-penthouse',
    title: 'SKY PENTHOUSE TLV',
    location: 'Tel Aviv, Neve Tzedek',
    price: 'From ₪8,000 / Night',
    capacity: 'Up to 50 Guests',
    description: 'Located on the 40th floor, this penthouse offers the best view in the Middle East. Glass walls, infinity pool, and pure luxury.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    affiliateUrl: 'https://www.zimmer.co.il',
    features: ['Infinity Pool', 'Panoramic View', 'Doorman', 'Private Lift']
  }
];
