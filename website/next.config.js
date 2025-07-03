/** @type {import('next').NextConfig} */
import { readFileSync } from 'fs'
import { join } from 'path'

const packageJson = JSON.parse(readFileSync(join(process.cwd(), '../package.json'), 'utf8'))

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
  // GitHub Pages configuration with custom domain
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath or assetPrefix needed for custom domain
}

export default nextConfig
