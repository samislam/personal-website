import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import appConfig from '@/config/app.config'
import { getLocale } from 'next-intl/server'
import { AppLanguages } from '@/types/app-config'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { getStaticData } from '@/lib/tolgee/tolgee-shared'
import { TolgeeNextProvider } from '@/lib/tolgee/tolgee-client'
import { TanstackQueryProvider } from '@/lib/tanstack-query/tanstack-query-provider'
import './globals.css'

interface Props extends PropsWithChildren {
  params: Promise<{ locale: string }>
}

export default async function RootLayout(props: Props) {
  const { children } = props
  const locale = (await getLocale()) as AppLanguages
  const locales = await getStaticData([appConfig.defaultLanguage, locale])
  return (
    <NextIntlClientProvider locale={locale}>
      <TolgeeNextProvider locale={locale} locales={locales}>
        <html dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale} suppressHydrationWarning>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <ThemeProvider
              attribute="class"
              enableSystem
              disableTransitionOnChange
              defaultTheme={appConfig.defaultTheme}
            >
              <TanstackQueryProvider>{children}</TanstackQueryProvider>
            </ThemeProvider>
          </body>
        </html>
      </TolgeeNextProvider>
    </NextIntlClientProvider>
  )
}

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslate()
  return {
    title: 'Your Name - Full-Stack Developer & UI/UX Designer',
    description:
      'Portfolio of a passionate full-stack developer specializing in modern web applications, beautiful user interfaces, and scalable solutions.',
    keywords:
      'web developer, full-stack developer, UI/UX designer, React, Next.js, TypeScript, portfolio',
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://yourname.com',
      title: 'Your Name - Full-Stack Developer',
      description: 'Portfolio showcasing modern web development projects and expertise',
      siteName: 'Your Name Portfolio',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Your Name - Full-Stack Developer Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Your Name - Full-Stack Developer',
      description: 'Portfolio showcasing modern web development projects and expertise',
      creator: '@yourusername',
      images: ['/og-image.jpg'],
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
}
