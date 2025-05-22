import { cookies } from 'next/headers'
import appConfig from '@/config/app.config'
import { AppLanguages } from '@/types/app-config'

/**
 * A utility function that can get the current user selected language using the cookies - this
 * method supports server components only
 */
export const getCurrentLocale = async (): Promise<AppLanguages> => {
  const cookieStore = await cookies()
  const currentLocale = cookieStore.get('locale')?.value ?? appConfig.defaultLanguage
  return currentLocale as AppLanguages
}
