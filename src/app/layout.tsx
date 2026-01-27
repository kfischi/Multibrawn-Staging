import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MULTIBRAWN - Ultra Instinct | חוויות נופש יוקרתיות",
  description: "חוויית נופש יוקרתית ברמה שמעולם לא חווית. צימרים, וילות, מלונות בוטיק ואירועים אקסקלוסיביים.",
  keywords: ["צימרים", "וילות", "נופש", "מלונות בוטיק", "אירועים", "multibrawn"],
  authors: [{ name: "MULTIBRAWN" }],
  openGraph: {
    title: "MULTIBRAWN - Ultra Instinct",
    description: "חוויית נופש יוקרתית ברמה שמעולם לא חווית",
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
    title: "MULTIBRAWN - Ultra Instinct",
    description: "חוויית נופש יוקרתית ברמה שמעולם לא חווית",
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
        {children}
      </body>
    </html>
  );
}
