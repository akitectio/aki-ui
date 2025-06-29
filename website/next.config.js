/** @type {import('next').NextConfig} */
const packageJson = require('../package.json')

const nextConfig = {
  transpilePackages: ['@akitectio/aki-ui'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_VERSION: packageJson.version,
  },
}

module.exports = nextConfig
