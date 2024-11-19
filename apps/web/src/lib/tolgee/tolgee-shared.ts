import appConfig from '@/config/app.config'
import { AppLanguages } from '@/types/app-config'
import { DevTools, Tolgee, FormatSimple, TreeTranslationsData } from '@tolgee/react'

export const ALL_LOCALES = appConfig.languages
export const DEFAULT_LOCALE = appConfig.defaultLanguage

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL

export async function getStaticData(languages: AppLanguages[]) {
  const result: Record<string, TreeTranslationsData | (() => Promise<TreeTranslationsData>)> = {}
  for (const lang of languages) {
    result[lang] = (await import(`../../i18n/${lang}.json`)).default
  }
  return result
}

export function TolgeeBase() {
  return Tolgee().use(FormatSimple()).use(DevTools()).updateDefaults({
    apiKey,
    apiUrl,
  })
}
