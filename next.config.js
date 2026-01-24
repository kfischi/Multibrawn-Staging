/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'MultibrawnWEB.b-cdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tours.tzimer360.co.il',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
