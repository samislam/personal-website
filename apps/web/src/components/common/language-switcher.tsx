'use client'

import { useTolgee } from '@tolgee/react'
import { useEffect, useState } from 'react'
import { SyriaFlag } from '../icons/syria-flag'
import { AppLanguages } from '@/types/app-config'
import { CanadaFlag } from '../icons/canada-flag'
import { TurkieyeFlag } from '../icons/turkieye-flag'
import { changeLanguage } from '@/features/change-language.action'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export const LanguageSwitcher = () => {
  const tolgee = useTolgee()
  const [locale, setLocale] = useState(tolgee.getLanguage())

  const handleChange = async (value: AppLanguages) => {
    await tolgee.changeLanguage(value)
    setLocale(value)
    changeLanguage(value)
  }

  console.log(locale)
  useEffect(() => {
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
  }, [locale])

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center gap-2">
            <CanadaFlag className="h-4 w-4" />
            <span>English</span>
          </div>
        </SelectItem>
        <SelectItem value="tr">
          <div className="flex items-center gap-2">
            <TurkieyeFlag className="h-4 w-4" />
            <span>Türkçe</span>
          </div>
        </SelectItem>
        <SelectItem value="ar">
          <div className="flex items-center gap-2">
            <SyriaFlag className="h-4 w-4" />
            <span>العربية</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
