import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const serverEnv = createEnv({
  server: {
    PORT: z.number().default(3000),
    PASSWORD_PEPPER: z.string().optional(),
    // HS256 secret (only required for HS256)
    JWT_SECRET: z.string().min(32, 'JWT_SECRET must be at least 32 characters').optional(),
    // RS256 / EdDSA keys (required if JWT_ALG !== 'HS256')
    JWT_PRIVATE_KEY: z.string().optional(),
    JWT_PUBLIC_KEY: z.string().optional(),
  },
  experimental__runtimeEnv: {
    PORT: process.env.PORT ? +process.env.PORT : undefined,
    PASSWORD_PEPPER: process.env.PASSWORD_PEPPER,
    // JWT STUFF
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
    JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
  },
})
