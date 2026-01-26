'use client';

import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

export default function LiquidNavbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/gallery', label: 'GALLERY' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-center pointer-events-none">
      <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 pointer-events-auto flex gap-8">
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className={`text-sm font-bold tracking-widest transition-colors ${
              pathname === link.href ? 'text-cyan-400' : 'text-neutral-500 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
