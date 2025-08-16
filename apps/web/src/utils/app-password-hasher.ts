import { PasswordHasher } from '@/classes/password-hasher.class'
import { serverEnv } from '@/server/server-env'

// Singleton with env-based pepper
export const appPasswordHasher = new PasswordHasher({
  pepper: serverEnv.PASSWORD_PEPPER,
})
