/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: [
      "lh3.googleusercontent.com", // Google 프로필 이미지 호스트
      "firebasestorage.googleapis.com", // Firebase Storage 호스트 (필요한 경우)
    ],
  },
};

module.exports = nextConfig;
