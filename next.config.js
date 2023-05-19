/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "algo-shop.s3.ap-south-1.amazonaws.com",
          port: '',
          pathname: '/image/upload/**',
        },
      ],
    },
  }