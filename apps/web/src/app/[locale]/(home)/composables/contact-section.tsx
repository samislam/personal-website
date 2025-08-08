import React from 'react'
import { ContactForm } from './contact-form'
import { pageDefs } from '@/config/pages.config'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { ContactInfoSubsection } from './contact-info-subsection'
import { ContactSocialSubsection } from './contact-social-subsection'

export const ContactSection = async () => {
  const t = await getTranslate()
  return (
    <section id={pageDefs.home.sections.contact} className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {t('@t<contact-section-title>')}
          </h2>
          <p className="text-lg text-gray-600">{t('@t<contact-section-description>')}</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactInfoSubsection />
            <ContactSocialSubsection />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
