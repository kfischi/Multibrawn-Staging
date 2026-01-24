/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // מאפשר את כל התמונות מכל תיקייה ומכל ענן בקלודינרי
      },
      {
        protocol: 'https',
        hostname: 'www.tzimer360.co.il',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  compress: true,
};

export default nextConfig;
