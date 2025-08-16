import appConfig from '@/config/app.config'
import { StaticImageData } from 'next/image'
import { AppLocaleRoutingDef } from './_private'
import { RequestConfig } from 'next-intl/server'

type NextIntlRequestConfig = Pick<RequestConfig, 'formats' | 'timeZone' | 'now'>

export interface AppConfig<L extends string> {
  appName: string
  appDescription: string
  defaultTheme: AppThemes
  enableMaintenanceMode?: boolean
  defaultLanguage: NoInfer<L>
  fallbackLanguage: NoInfer<L>
  readonly languages: Array<L>
  appLogo: string | StaticImageData
  i18nRoutingDef: AppLocaleRoutingDef<L>
  authentication: {
    jwtAlgorithm: 'HS256' | 'RS256' | 'EdDSA'
    issuer?: string
    audience?: string
    defaultExpiration?: string // e.g., "30d", "15m"
    clockToleranceSec?: number
  }
  i18nFormattersDefaults?: (
    requestLocale: Promise<string | undefined>
  ) => NextIntlRequestConfig | Promise<NextIntlRequestConfig>
}

export type AppLanguages = (typeof appConfig.languages)[number]
export type AppThemes = 'light' | 'dark'
