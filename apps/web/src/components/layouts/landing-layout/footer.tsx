import React from 'react'
import appConfig from '@/config/app.config'
import { Button } from '@/components/ui/button'
import { SocialIcon } from 'react-social-icons'
import { FooterLastLine } from './footer-last-line'
import { Separator } from '@/components/ui/separator'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react'

export const Footer = async () => {
  const t = await getTranslate()
  return (
    <footer className="bg-gray-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">{t('@t<footer-moto-title>')}</h3>
            <p className="text-gray-400">{t('@t<footer-moto-description>')}</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t('@t<footer-nav-title>')}</h4>
            <div className="space-y-2 text-gray-400">
              <div>{t('@t<footer-nav-item-01>')}</div>
              <div>{t('@t<footer-nav-item-02>')}</div>
              <div>{t('@t<footer-nav-item-03>')}</div>
              <div>{t('@t<footer-nav-item-04>')}</div>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t('@t<footer-contact-section-title>')}</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <MailIcon className="h-4 w-4" />
                {appConfig.authorEmail}
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                {appConfig.authorPhone}
              </div>
              <div className="flex items-center gap-2">
                <MessageCircleIcon className="h-4 w-4" />
                WhatsApp: {appConfig.authorPhone}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <FooterLastLine />
          <div className="mt-4 flex gap-4 md:mt-0">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <SocialIcon network="github" href={appConfig.authorGithubUrl} className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
