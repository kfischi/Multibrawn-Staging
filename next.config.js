/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        //pathname: '/**'  // מאפשר את כל הנתיבים בקלודינרי עבור שני החשבונות שלך
      },
      {
        protocol: 'https',
        hostname: 'www.tzimer360.co.il',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  compress: true,
  // אם הקובץ הוא next.config.mjs השתמש בייצוא הזה:
  // export default nextConfig;
};

// אם הקובץ הוא next.config.js השתמש בזה:
module.exports = nextConfig;
