import React from 'react'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react'

export const ContactInfoSubsection = async () => {
  const t = await getTranslate()
  return (
    <div>
      <h3 className="mb-6 text-2xl font-semibold">
        {t('@t<contact-section-info-subsection-title>')}
      </h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <MailIcon className="h-5 w-5 text-primary" />
          <span>hello@yourname.com</span>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="h-5 w-5 text-primary" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="h-5 w-5 text-primary" />
          <span>+1 (555) 987-6543</span>
        </div>
        <div className="flex items-center gap-4">
          <MessageCircleIcon className="h-5 w-5 text-accent" />
          <span>WhatsApp: +1 (555) 123-4567</span>
        </div>
      </div>
    </div>
  )
}
