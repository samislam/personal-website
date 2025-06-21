import React from 'react'
import { NewsletterForm } from './newsletter-form'
import { getTranslate } from '@/lib/tolgee/tolgee-server'

export const NewsLetterSection = async () => {
  const t = await getTranslate()
  return (
    <section className="section-dark px-6 py-20">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <h2 className="text-4xl font-bold">{t('@t<newsletter-section-title>')}</h2>
        <p className="text-xl opacity-90">{t('@t<newsletter-section-description>')}</p>
        <NewsletterForm />
      </div>
    </section>
  )
}
