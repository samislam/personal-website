import z from 'zod'

export const loginSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, 'Email is required')
      .email('Invalid email address')
      .transform((s) => s.toLowerCase())
      .transform((s) => s.trim()),
    password: z.string(),
  })
  .strict()

export type LoginFields = z.infer<typeof loginSchema>
