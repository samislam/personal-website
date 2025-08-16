import ms from 'ms'
import { concat } from 'concat-str'
import logo from '@/media/logo.png'
import { LOCALE_COOKIE } from '@/constants'
import { createAppConfig } from '@/utils/create-app-config'

export default createAppConfig({
  appLogo: logo,
  authorName: 'Islam Yamor',
  authorEmail: 'islamyamorz@gmail.com',
  authorPhone: '+90 553 441 6608',
  authorWhatsappNumber: '+90 553 441 6608',
  authorGithubUrl: 'https://github.com/samislam',
  defaultTheme: 'light',
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
  appName: 'Islam Yamor Website',
  enableMaintenanceMode: true,
  languages: ['en', 'ar', 'tr', 'de'],
  appDescription: concat('@Islam Yamor website'),
  authentication: {
    clockToleranceSec: 5,
    jwtAlgorithm: 'HS256',
    defaultExpiration: '30d',
  },
  i18nRoutingDef: {
    localePrefix: 'always', // defaults to have no URL prefix (no /en/users, just /users)
    localeCookie: {
      name: LOCALE_COOKIE,
      secure: false,
      sameSite: 'lax',
      maxAge: ms('1y'),
    },
  },
})
