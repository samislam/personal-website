import { Globe, Palette, Package } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { getTranslate } from '@/lib/tolgee/tolgee-server'

export const AboutSection = async () => {
  const t = await getTranslate()
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">{t('@t<about-section-title>')}</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          {t('@t<about-section-description>')}
        </p>
        <div className="grid gap-8 pt-8 md:grid-cols-3">
          <Card className="card-hover border-0 text-center shadow-lg">
            <CardContent className="pt-6">
              <Globe className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">
                {t('@t<about-section-talent-title-01>')}
              </h3>
              <p className="text-gray-600">{t('@t<about-section-talent-description-01>')}</p>
            </CardContent>
          </Card>
          <Card className="card-hover border-0 text-center shadow-lg">
            <CardContent className="pt-6">
              <Palette className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 text-lg font-semibold">
                {t('@t<about-section-talent-title-02>')}
              </h3>
              <p className="text-gray-600">{t('@t<about-section-talent-description-02>')}</p>
            </CardContent>
          </Card>
          <Card className="card-hover border-0 text-center shadow-lg">
            <CardContent className="pt-6">
              <Package className="mx-auto mb-4 h-12 w-12 text-slate-600" />
              <h3 className="mb-2 text-lg font-semibold">
                {t('@t<about-section-talent-title-03>')}
              </h3>
              <p className="text-gray-600">{t('@t<about-section-talent-description-03>')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
