import { z } from 'zod'
export const contactFormSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().min(3),
  message: z.string().min(25),
})

export type ContactFormFields = z.infer<typeof contactFormSchema>
