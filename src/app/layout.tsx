import type { Metadata } from 'next';
import { Orbitron, Outfit } from 'next/font/google'; 
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
          
          {/* סמן עכבר מותאם אישית - תמיד עליון */}
          <div className="relative z-[9999]">
             <CustomCursor />
          </div>

          {/* רקע אטמוספרי - שכבה אחורית */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <AtmosphereBackground />
          </div>
          
          {/* תיקון התפריט: עטיפה ב-Z-Index גבוה כדי שיהיה מעל הוידאו */}
          <div className="relative z-[100]">
            <LiquidNavbar />
          </div>
          
          {/* התוכן הראשי */}
          <main className="relative z-10">
            {children}
          </main>

          <SuperCloset />
        </body>
      </html>
    </ViewTransitions>
  );
}
