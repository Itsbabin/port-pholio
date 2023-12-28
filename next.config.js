/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'play-lh.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 's.tmimgcdn.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
        ],
      },
}
