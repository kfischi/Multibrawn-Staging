import Link from 'next/link';
import properties from '@/data/selected-pilot.json';

export default function SelectedCatalog() {
  return (
    <div className="min-h-screen bg-white py-20 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black mb-12 italic italic">THE SELECTED</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link href={`/selected/${property.slug}`} key={property.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100">
                <img src={property.heroImage} alt={property.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-8 text-white">
                  <p className="text-amber-400 text-sm font-bold">{property.location}</p>
                  <h2 className="text-2xl font-bold">{property.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
