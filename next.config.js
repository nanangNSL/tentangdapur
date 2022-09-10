/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://res.cloudinary.com','http://res.cloudinary.com','res.cloudinary.com' ],
  },
};



module.exports = nextConfig;
