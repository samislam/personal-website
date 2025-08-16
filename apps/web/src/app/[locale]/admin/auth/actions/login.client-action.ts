'use client'

import { browserClient } from '@/lib/browser-client'
import { ApiResult, unwrapAxiosApiCall } from '@repo/common'
import { LoginFields } from '@/app/[locale]/admin/auth/schemas/login.schema'

/**
 * Sends a login request to the `/api/auth/login` endpoint.
 *
 * @param {LoginFields} payload - The login form data containing user credentials.
 * @returns {Promise<ApiResult<unknown>>} Resolves with the normalized API result, or throws an
 *   error if the request fails (due to HTTP error, API failure, or network issue).
 */
export const login = (payload: LoginFields): Promise<ApiResult<unknown>> => {
  return unwrapAxiosApiCall(browserClient.post('/api/auth/login', payload), true)
}
