import { notFound } from 'next/navigation';
import properties from '@/data/selected-pilot.json';
import PropertyPageClient from './PropertyPageClient';

// הגדרת הטייפים החדשה שמתאימה ל-Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PropertyPage({ params }: PageProps) {
  // אנחנו עושים await ל-params כדי לחלץ את ה-slug
  const { slug } = await params;
  
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return <PropertyPageClient property={property} />;
}
