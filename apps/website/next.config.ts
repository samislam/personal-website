import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/lib/tolgee/i18n-request.ts')
const nextConfig: NextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
}

export default withNextIntl(nextConfig)
