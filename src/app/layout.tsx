import type { Metadata } from "next";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MULTIBRAWN - מולטיבראון | צימרים, וילות ונכסי נופש יוקרתיים",
  description: "מולטיבראון - מומחים למציאת חופשה מושלמת. 9+ שנות ניסיון בהשכרת צימרים, וילות, מלונות בוטיק ואירועים יוקרתיים. שירות אישי, מחירים הוגנים, ומגוון עצום של נכסים.",
  keywords: ["צימרים", "וילות", "נופש", "מלונות בוטיק", "אירועים", "multibrawn", "מולטיבראון", "חופשה"],
  authors: [{ name: "MULTIBRAWN" }],
  openGraph: {
    title: "MULTIBRAWN - מציאת חופשה מושלמת",
    description: "9+ שנות ניסיון במציאת מקומות נופש יוקרתיים. צימרים, וילות, ומלונות בוטיק.",
    type: "website",
    locale: "he_IL",
    images: [
      {
        url: "https://res.cloudinary.com/dptyfvwyo/image/upload/v1763834667/Video-Multi_b11ehy.jpg",
        width: 1200,
        height: 630,
        alt: "MULTIBRAWN - חוויות נופש יוקרתיות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MULTIBRAWN - מציאת חופשה מושלמת",
    description: "9+ שנות ניסיון במציאת מקומות נופש יוקרתיים",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
