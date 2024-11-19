'use client'

import { useState } from 'react'
import { AppLanguages } from '@/types/app-config'
import { useTolgee, useTranslate } from '@tolgee/react'
import { changeLanguage } from '@/features/change-language.action'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export const LanguageSwitcher = () => {
  const tolgee = useTolgee()
  const { t } = useTranslate()
  const [locale, setLocale] = useState(tolgee.getLanguage())

  const handleChange = async (value: AppLanguages) => {
    await tolgee.changeLanguage(value)
    setLocale(value)
    changeLanguage(value)
  }

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">{t('@t<english>')} (English)</SelectItem>
        <SelectItem value="ar">{t('@t<arabic>')} (العربية)</SelectItem>
        <SelectItem value="tr">{t('@t<turkish>')} (Türkçe)</SelectItem>
      </SelectContent>
    </Select>
  )
}
