'use client'

import { useState } from 'react'
import { useTolgee } from '@tolgee/react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { changeLanguage } from '@/features/change-language.action'
import { AppLanguages } from '@/types/app-config'

export const LanguageSwitcher = () => {
  const tolgee = useTolgee()
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
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ar">العربية</SelectItem>
      </SelectContent>
    </Select>
  )
}
