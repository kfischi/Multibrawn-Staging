import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import './globals.css';
import AtmosphereBackground from '@/components/AtmosphereBackground';
import SuperCloset from '@/components/SuperCloset';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

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
        <body className={`${inter.className} bg-black text-white antialiased overflow-x-hidden min-h-screen`}>
          <CustomCursor />
          <AtmosphereBackground />
          
          <main className="relative z-10">
            {children}
          </main>

          <SuperCloset />
        </body>
      </html>
    </ViewTransitions>
  );
}
