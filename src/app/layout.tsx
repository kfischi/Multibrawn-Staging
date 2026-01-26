import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AtmosphereBackground from '@/components/AtmosphereBackground';
import SuperCloset from '@/components/SuperCloset'; // הארון שיצרנו קודם
import { ViewTransitions } from 'next-view-transitions'; // ספרייה למעברים חלקים (צריך להתקין)

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Multibrawn | Next Gen Experience',
  description: 'The future of luxury digital assets.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-transparent text-white antialiased overflow-x-hidden`}>
        {/* שכבה 1: הרקע החי */}
        <AtmosphereBackground />
        
        {/* שכבה 2: התוכן המרכזי */}
        <ViewTransitions>
          <main className="relative z-10 min-h-screen flex flex-col">
            {children}
          </main>
        </ViewTransitions>

        {/* שכבה 3: הארון (תמיד למעלה) */}
        <SuperCloset />
      </body>
    </html>
  );
}
