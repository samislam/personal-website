import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import PersonalPhoto from '@/media/personal-photo-01.jpeg'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { ArrowRightIcon, CodeIcon, PaletteIcon, ZapIcon } from 'lucide-react'

export const HeroSection = async () => {
  const t = await getTranslate()
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-slate-600/5" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="badge-success">{t('@t<hero-section-badge>')}</Badge>
              <h1 className="bg-gradient-to-r from-gray-900 via-slate-700 to-gray-800 bg-clip-text text-5xl font-bold leading-tight text-transparent lg:text-6xl">
                {t('@t<hero-section-title>')}
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-gray-600">
                {t('@t<hero-section-description>')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-primary px-8 shadow-lg">
                {t('@t<hero-section-primary-button>')}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                {t('@t<hero-section-secondary-button>')}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <CodeIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">{t('@t<hero-section-feature-title-01>')}</h3>
                <p className="text-sm text-gray-600">
                  {t('@t<hero-section-feature-description-01>')}
                </p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <PaletteIcon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold">{t('@t<hero-section-feature-title-02>')}</h3>
                <p className="text-sm text-gray-600">
                  {t('@t<hero-section-feature-description-02>')}
                </p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <ZapIcon className="text-warning h-8 w-8" />
                </div>
                <h3 className="font-semibold">{t('@t<hero-section-feature-title-03>')}</h3>
                <p className="text-sm text-gray-600">
                  {t('@t<hero-section-feature-description-03>')}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto h-80 w-80">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-primary to-slate-500 opacity-20 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl">
                <Image fill alt="Profile" src={PersonalPhoto} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
