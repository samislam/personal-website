import { AxiosError, AxiosResponse } from 'axios'

export type ApiResult<T = unknown> =
  | { success: true; status: number; payload: T }
  | { success: false; status: number; error: string }

export async function proxyApiCall<T>(apiCall: Promise<AxiosResponse<T>>): Promise<ApiResult<T>> {
  try {
    const res = await apiCall
    return {
      success: true,
      status: res.status,
      payload: res.data,
    }
  } catch (err) {
    const axiosErr = err as AxiosError<{ error?: string }>
    return {
      success: false,
      status: axiosErr.response?.status ?? 500,
      error: axiosErr.response?.data?.error ?? axiosErr.message,
    }
  }
}
