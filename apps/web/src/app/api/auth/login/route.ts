import { prismaClient } from '@/lib/prisma-client'
import { NextRequest, NextResponse } from 'next/server'
import { appPasswordHasher } from '@/utils/app-password-hasher'
import { withCatchErrorResponse } from '@/utils/error-handlers'
import { VALIDATION_ERR, INCORRECT_CREDENTIALS } from '@/constants'
import { apiFailureResult, apiResult, mapZodError } from '@repo/common'
import { loginSchema } from '@/app/[locale]/admin/auth/schemas/login.schema'

export const POST = withCatchErrorResponse(async (req: NextRequest) => {
  const body = await req.json()
  const { success, data, error } = await loginSchema.safeParseAsync(body)
  if (!success)
    return NextResponse.json(
      apiFailureResult({
        error: VALIDATION_ERR,
        errorCode: VALIDATION_ERR,
        statusCode: 400,
        errors: mapZodError(error),
      }),
      { status: 400 }
    )

  const admin = await prismaClient.user.findFirst({ where: { email: data.email, role: 'admin' } })
  if (!admin) return NextResponse.json(accessDeniedRes, { status: accessDeniedRes.statusCode })
  const ok = await appPasswordHasher.verify(admin.password, data.password)
  if (!ok) return NextResponse.json(accessDeniedRes, { status: accessDeniedRes.statusCode })
  // everything is okay

  NextResponse.json({ message: 'Habibi' })
})

const accessDeniedRes = apiResult({
  success: false,
  statusCode: 401,
  errorCode: INCORRECT_CREDENTIALS,
  error: 'incorrect email/password',
})
