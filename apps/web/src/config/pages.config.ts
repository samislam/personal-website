import { Metadata } from 'next'
import { PagesDefs } from '@/types/pagedef.types'
import { getTranslate } from '@/lib/tolgee/tolgee-server'

export const pageDefs = {
  home: {
    href: '/',
    title: '@t<home-title>',
    description: '@t<home-description>',
    icon: 'mdi:mdiHome',
    async meta(): Promise<Metadata> {
      const t = await getTranslate()
      return {
        title: t('@t<home_meta.title>'),
        description: t('@t<home_meta.description>'),
        keywords:
          'web developer, full-stack developer, UI/UX designer, React, Next.js, TypeScript, portfolio',
        authors: [{ name: 'Islam Yamor' }],
        creator: 'Islam Yamor',
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://islamyamor.me',
          title: 'Islam Yamor - Full-Stack Developer',
          description: '@Islam Yamor personal website',
          siteName: 'Islam Yamor Portfolio',
          images: [
            {
              url: '/OG-image.png',
              width: 1200,
              height: 630,
              alt: 'Islam Yamor - Full-Stack Developer Portfolio',
            },
          ],
        },
        robots: {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
      }
    },
  },
} as const satisfies PagesDefs
