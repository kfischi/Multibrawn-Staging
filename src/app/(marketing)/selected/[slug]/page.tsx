import { notFound } from 'next/navigation';
import properties from '@/data/selected-pilot.json';
import PropertyPageClient from './PropertyPageClient';

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) notFound();

  return <PropertyPageClient property={property} />;
}
