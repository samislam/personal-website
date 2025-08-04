import ms from 'ms'
import { concat } from 'concat-str'
import logo from '@/media/logo.png'
import { LOCALE_COOKIE_NAME } from '@/constants'
import { createAppConfig } from '@/utils/create-app-config'

export default createAppConfig({
  appLogo: logo,
  defaultTheme: 'light',
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
  appName: 'Islam Yamor Website',
  languages: ['en', 'ar', 'tr', 'de'],
  appDescription: concat('@Islam Yamor website'),
  i18nRoutingDef: {
    localePrefix: 'always', // defaults to have no URL prefix (no /en/users, just /users)
    localeCookie: {
      name: LOCALE_COOKIE_NAME,
      secure: false,
      sameSite: 'lax',
      maxAge: ms('1y'),
    },
  },
})
