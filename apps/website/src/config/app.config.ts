import { concat } from 'concat-str'
import { createAppConfig } from '@/types/app-config'
import logo from '@/media/logo.png'

export default createAppConfig({
  languages: ['en', 'ar', 'tr', 'de'],
  defaultLanguage: 'en',
  defaultTheme: 'light',
  appName: 'Islam Yamor Website',
  appLogo: logo,
  appDescription: concat('@Islam Yamor website'),
})
