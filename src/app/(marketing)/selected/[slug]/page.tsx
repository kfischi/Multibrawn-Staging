import { notFound } from 'next/navigation';
import properties from '@/data/selected-pilot.json';
import PropertyPageClient from './PropertyPageClient';

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return <PropertyPageClient property={property} />;
}
