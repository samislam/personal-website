import appConfig from '@/config/app.config'
import { getStaticData } from './tolgee-shared'
import { AppLanguages } from '@/types/app-config'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  if (!locale || !appConfig.languages.includes(locale as any)) {
    locale = appConfig.defaultLanguage
  }

  return {
    locale,
    messages: (await getStaticData([locale as AppLanguages])) as any,
  }
})
