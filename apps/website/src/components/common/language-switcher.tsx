'use client'

import { useTransition } from 'react'
import { useLocale } from 'next-intl'
import { Skeleton } from '../ui/skeleton'
import { SyriaFlag } from '../icons/syria-flag'
import { AppLanguages } from '@/types/app-config'
import { CanadaFlag } from '../icons/canada-flag'
import { TurkieyeFlag } from '../icons/turkieye-flag'
import { useTolgee, useTranslate } from '@tolgee/react'
import { usePathname, useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export const LanguageSwitcher = () => {
  const { t } = useTranslate()
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const { changeLanguage } = useTolgee()
  const [isSwitching, startTransition] = useTransition()

  const handleChange = (value: AppLanguages) => {
    startTransition(() => {
      changeLanguage(value).then(() => {
        router.replace(pathname.replace(locale, value))
      })
    })
  }

  if (isSwitching) return <Skeleton className="h-5 w-[180px]" />
  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center gap-2">
            <CanadaFlag className="h-4 w-4" />
            <span>{t('@t<english>')} (English)</span>
          </div>
        </SelectItem>
        <SelectItem value="ar">
          <div className="flex items-center gap-2">
            <SyriaFlag className="h-4 w-4" />
            {t('@t<arabic>')} (العربية)
          </div>
        </SelectItem>
        <SelectItem value="tr">
          <div className="flex items-center gap-2">
            <TurkieyeFlag className="h-4 w-4" />
            {t('@t<turkish>')} (Türkçe)
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
