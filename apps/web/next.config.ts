import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/lib/next-intl/i18n-request.ts')
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.pexels.com' }],
  },
}

export default withNextIntl(nextConfig)
