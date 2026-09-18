/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  images: {
    // Add remote patterns here if you host real project photos on a
    // remote CDN. Local photos placed in /public/images work with no
    // config needed — see README.md for the image replacement guide.
    remotePatterns: [],
  },
};

export default nextConfig;
