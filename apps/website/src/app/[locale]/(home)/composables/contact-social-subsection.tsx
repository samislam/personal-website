import React from 'react'
import { Button } from '@/components/ui/button'
import { SocialIcon } from 'react-social-icons'
import { getTranslate } from '@/lib/tolgee/tolgee-server'

export const ContactSocialSubsection = async () => {
  const t = await getTranslate()
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold">
        {t('@t<contact-section-social-subsection-title>')}
      </h3>
      <div className="flex gap-4">
        <Button variant="outline" size="icon">
          <SocialIcon network="github" className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <SocialIcon network="twitter" className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <SocialIcon network="linkedin" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
