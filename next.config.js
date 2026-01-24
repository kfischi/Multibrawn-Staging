/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'MultibrawnWEB.b-cdn.net', // הכתובת החדשה שלך
        pathname: '/**',
      },
      // ... שאר הכתובות
    ],
  },
};
export default nextConfig;
