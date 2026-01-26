import type { Metadata } from 'next';
import { Orbitron, Outfit } from 'next/font/google'; // טעינת הפונטים
import { ViewTransitions } from 'next-view-transitions';
import './globals.css';
import AtmosphereBackground from '@/components/AtmosphereBackground';
import SuperCloset from '@/components/SuperCloset';
import CustomCursor from '@/components/CustomCursor';
import LiquidNavbar from '@/components/LiquidNavbar';

// הגדרת משקלי הפונטים
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Multibrawn | Ultra Instinct',
  description: 'The future of digital assets.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark cursor-none"> 
        <body className={`${outfit.className} ${orbitron.variable} bg-brand-dark text-white antialiased overflow-x-hidden min-h-screen`}>
          <CustomCursor />
          <AtmosphereBackground />
          <LiquidNavbar />
          
          <main className="relative z-10">
            {children}
          </main>

          <SuperCloset />
        </body>
      </html>
    </ViewTransitions>
  );
}
