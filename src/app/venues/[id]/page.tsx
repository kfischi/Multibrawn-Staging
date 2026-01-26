import React from 'react';
import { venues } from '@/data/venues';
import { notFound } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { ArrowLeft, Check, Calendar } from 'lucide-react';

export default async function VenueDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const venue = venues.find((v) => v.id === id);

  if (!venue) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans">
      <div className="h-[50vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${venue.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-brand-dark" />
        
        <Link href="/gallery" className="absolute top-8 left-8 flex items-center text-white/80 hover:text-brand-neon transition-colors z-20 glass-panel px-4 py-2 rounded-full">
          <ArrowLeft size={20} className="mr-2" /> Back to Gallery
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-cyber mb-4 text-glow">{venue.title}</h1>
              <div className="flex items-center text-xl text-neutral-400">
                <MapPin className="mr-2 text-brand-neon" /> {venue.location}
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-neon">ABOUT THE SPACE</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                {venue.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {venue.features.map((feature, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl flex items-center text-neutral-200">
                  <Check size={18} className="mr-3 text-brand-neon" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-panel p-8 rounded-2xl sticky top-8 border-t-4 border-brand-neon">
              <div className="text-sm text-neutral-500 font-mono mb-2">STARTING PRICE</div>
              <div className="text-4xl font-bold mb-8 font-cyber">{venue.price}</div>
              
              <div className="space-y-4">
                <button className="w-full py-4 bg-brand-neon text-black font-bold text-lg rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                  BOOK VIEWING
                </button>
                <button className="w-full py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Calendar size={20} className="mr-2" /> CHECK AVAILABILITY
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-neutral-500">
                Secure transaction via Multibrawn Escrow
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
