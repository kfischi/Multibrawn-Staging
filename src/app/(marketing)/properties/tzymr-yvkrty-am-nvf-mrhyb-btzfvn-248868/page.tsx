import { Metadata } from 'next';
import PropertyPageClient from './PropertyPageClient';

export const metadata: Metadata = {
  title: 'צימר יוקרתי עם נוף מרהיב בצפון | MULTIBRAWN',
  description: 'נכס נופש מדהים',
};

export default function PropertyPage() {
  return <PropertyPageClient />;
}
