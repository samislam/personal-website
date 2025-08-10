import { createErrorHandler } from '@repo/common'
import { globalRouteErrorHandler } from '@/handlers/global-error-handlers'
import { globalActionErrorHandler } from '@/handlers/global-error-handlers'

export const withCatchErrorResponse = createErrorHandler(globalRouteErrorHandler)
export const withCatchErrorAction = createErrorHandler(globalActionErrorHandler)
