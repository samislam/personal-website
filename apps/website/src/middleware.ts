import appConfig from './config/app.config'
import { defineRouting } from 'next-intl/routing'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware(
  defineRouting({
    locales: appConfig.languages,
    defaultLocale: appConfig.defaultLanguage,
  })
)

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
