import { z } from 'zod'

export const newsletterFormSchema = z.object({
  email: z.string().min(3),
})

export type NewsletterFormFields = z.infer<typeof newsletterFormSchema>
