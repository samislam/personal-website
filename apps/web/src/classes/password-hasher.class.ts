import { createHmac, randomBytes } from 'crypto'
import argon2, { type Options as Argon2Options } from 'argon2'

export type HasherOpts = Argon2Options & {
  /** Bytes to use when generating a new salt (default 16) */
  saltLength?: number
  /** Optional server-side pepper, e.g. process.env.PASSWORD_PEPPER */
  pepper?: string
  /** HMAC algo for peppering */
  pepperAlgo?: 'sha256' | 'sha512'
}

export class PasswordHasher {
  private opts: Argon2Options
  private saltLength: number
  private pepper?: string
  private pepperAlgo: 'sha256' | 'sha512'

  constructor(options?: Partial<HasherOpts>) {
    this.opts = {
      type: argon2.argon2id,
      timeCost: 3,
      memoryCost: 19 * 1024, // KiB → ~19 MiB
      parallelism: 1,
      hashLength: 32,
      version: 0x13,
      ...options,
    }
    this.saltLength = options?.saltLength ?? 16
    this.pepper = options?.pepper
    this.pepperAlgo = options?.pepperAlgo ?? 'sha256'
  }

  private withPepper(plain: string): string {
    if (!this.pepper) return plain
    return createHmac(this.pepperAlgo, this.pepper).update(plain).digest('base64')
  }

  /** Hash a plaintext password (returns argon2 encoded string with salt+params) */
  async hash(plain: string): Promise<string> {
    const salt = randomBytes(this.saltLength) // explicit salt (also embedded in output)
    const material = this.withPepper(plain)
    return argon2.hash(material, { ...this.opts, salt })
  }

  /** Verify a plaintext password against a stored argon2 hash string */
  async verify(storedHash: string, plain: string): Promise<boolean> {
    const material = this.withPepper(plain)
    return argon2.verify(storedHash, material, this.opts)
  }
}
