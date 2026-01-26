'use client';

import React from 'react';

const simpleItems = [
  { id: '1', title: 'Neon Asset 1', price: '0.5 ETH' },
  { id: '2', title: 'Neon Asset 2', price: '1.2 ETH' },
  { id: '3', title: 'Neon Asset 3', price: '3.0 ETH' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Digital Assets
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {simpleItems.map((item) => (
            <div key={item.id} className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors">
              <div className="h-40 bg-neutral-800 rounded-xl mb-6 w-full animate-pulse" />
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-cyan-400 font-mono">{item.price}</p>
              <button className="w-full mt-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
