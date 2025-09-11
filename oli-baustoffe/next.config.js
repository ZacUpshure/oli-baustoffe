/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['oli-baustoffe-images.s3.eu-central-1.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({ 'lottie-web': 'commonjs lottie-web' });
    }
    return config;
  },
}

module.exports = nextConfig
