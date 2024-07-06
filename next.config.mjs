/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'reyn.pythonanywhere.com',
        port: '',
      },
    ],
    unoptimized: true,
  },
  
};
export default nextConfig;
