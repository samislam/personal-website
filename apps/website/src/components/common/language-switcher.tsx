'use client'

import { Skeleton } from '../ui/skeleton'
import { useTolgee } from '@tolgee/react'
import { SyriaFlag } from '../icons/syria-flag'
import { useEffect, useTransition } from 'react'
import { AppLanguages } from '@/types/app-config'
import { CanadaFlag } from '../icons/canada-flag'
import { TurkieyeFlag } from '../icons/turkieye-flag'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  // const locale = useLocale()
  const params = useParams()
  const locale = params.locale as string
  const { changeLanguage } = useTolgee()
  const [isSwitching, startTransition] = useTransition()

  const handleChange = (value: AppLanguages) => {
    startTransition(() => {
      // Change the server components locale
      router.replace(pathname.replace(locale, value), { scroll: false })
    })
  }

  useEffect(() => {
    return () => {
      // Change the client-side components locale
      changeLanguage(locale)
      document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
    }
  }, [changeLanguage, locale])

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
