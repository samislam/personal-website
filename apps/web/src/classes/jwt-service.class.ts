import { SignJWT, jwtVerify, decodeJwt, CryptoKey } from 'jose'
import { importSPKI, importPKCS8, type JWTPayload } from 'jose'

/**
 * Supported signing algorithms for JWT.
 *
 * - `HS256` — Symmetric HMAC with SHA-256 (shared secret).
 * - `RS256` — Asymmetric RSA with SHA-256 (private/public key pair).
 * - `EdDSA` — Asymmetric Edwards-curve Digital Signature Algorithm.
 */
type Alg = 'HS256' | 'RS256' | 'EdDSA'

/**
 * Configuration for initializing {@link JwtService}.
 *
 * For `HS256`:
 *
 * ```ts
 * {
 *   secret: string;
 *   issuer?: string;
 *   audience?: string;
 *   defaultExpiration?: string;
 *   clockToleranceSec?: number;
 * }
 * ```
 *
 * For `RS256` or `EdDSA`:
 *
 * ```ts
 * {
 *   alg: 'RS256' | 'EdDSA';
 *   privateKeyPEM: string;
 *   publicKeyPEM: string;
 *   issuer?: string;
 *   audience?: string;
 *   defaultExpiration?: string;
 *   clockToleranceSec?: number;
 * }
 * ```
 */
type InitOptions =
  | {
      alg?: 'HS256'
      /** Shared secret for HS256 signing. Should be 32+ random bytes. */
      secret: string
      issuer?: string
      audience?: string
      /** Default expiration time, e.g. "15m", "1h". */
      defaultExpiration?: string
      /** Allowed clock skew in seconds. */
      clockToleranceSec?: number
    }
  | {
      alg: 'RS256' | 'EdDSA'
      /** Private key in PKCS8 PEM format (used for signing). */
      privateKeyPEM: string
      /** Public key in SPKI PEM format (used for verification). */
      publicKeyPEM: string
      issuer?: string
      audience?: string
      defaultExpiration?: string
      clockToleranceSec?: number
    }

/**
 * Service class for creating, verifying, and decoding JWTs using `jose`.
 *
 * Use {@link JwtService.init} to asynchronously create an instance, since key import and preparation
 * may be asynchronous.
 *
 * Supports both symmetric (`HS256`) and asymmetric (`RS256`, `EdDSA`) algorithms.
 */
export class JwtService {
  private alg: Alg
  private issuer?: string
  private audience?: string
  private defaultExpiration: string
  private clockTolerance?: string

  private secret?: Uint8Array // HS256
  private privateKey?: CryptoKey // RS256/EdDSA
  private publicKey?: CryptoKey // RS256/EdDSA

  /** Private constructor — use {@link JwtService.init} to create instances. */
  private constructor(
    alg: Alg,
    opts: {
      issuer?: string
      audience?: string
      defaultExpiration?: string
      clockToleranceSec?: number
    }
  ) {
    this.alg = alg
    this.issuer = opts.issuer
    this.audience = opts.audience
    this.defaultExpiration = opts.defaultExpiration ?? '15m'
    this.clockTolerance = opts.clockToleranceSec ? `${opts.clockToleranceSec}s` : undefined
  }

  /**
   * Factory method to initialize the service with the correct keys.
   *
   * @param opts - Algorithm-specific initialization options.
   * @returns A ready-to-use {@link JwtService} instance.
   */
  static async init(opts: InitOptions): Promise<JwtService> {
    const base = new JwtService(opts.alg ?? 'HS256', {
      issuer: opts.issuer,
      audience: opts.audience,
      defaultExpiration: opts.defaultExpiration,
      clockToleranceSec: opts.clockToleranceSec,
    })

    // HS256
    if ((opts as any).secret) {
      base.secret = new TextEncoder().encode(
        (opts as Extract<InitOptions, { alg?: 'HS256'; secret: string }>).secret
      )
      return base
    }

    // RS256 / EdDSA
    const { privateKeyPEM, publicKeyPEM, alg } = opts as Extract<
      InitOptions,
      { alg: 'RS256' | 'EdDSA'; privateKeyPEM: string; publicKeyPEM: string }
    >
    base.privateKey = await importPKCS8(privateKeyPEM, alg)
    base.publicKey = await importSPKI(publicKeyPEM, alg)
    return base
  }

  /**
   * Signs a JWT with the configured algorithm and keys.
   *
   * @example
   *   const token = await jwtService.sign({ sub: '123' }, { expiresIn: '1h' })
   *
   * @param payload - The claims to embed in the JWT.
   * @param options - Optional overrides for expiration, subject, and JWT ID.
   * @returns A signed JWT string.
   */
  async sign(
    payload: JWTPayload,
    options?: { expiresIn?: string; subject?: string; jwtId?: string }
  ): Promise<string> {
    const exp = options?.expiresIn ?? this.defaultExpiration

    let jwt = new SignJWT(payload)
      .setProtectedHeader({ alg: this.alg, typ: 'JWT' })
      .setIssuedAt()
      .setExpirationTime(exp)

    if (this.issuer) jwt = jwt.setIssuer(this.issuer)
    if (this.audience) jwt = jwt.setAudience(this.audience)
    if (options?.subject) jwt = jwt.setSubject(options.subject)
    if (options?.jwtId) jwt = jwt.setJti(options.jwtId)

    const key = this.alg === 'HS256' ? this.secret! : this.privateKey!
    return jwt.sign(key)
  }

  /**
   * Verifies a JWT's signature, expiry, and optional issuer/audience.
   *
   * @typeParam T - Expected shape of the payload.
   * @param token - The JWT string to verify.
   * @returns The decoded payload if verification succeeds.
   * @throws If the token is expired, malformed, or fails any check.
   */
  async verify<T extends JWTPayload = JWTPayload>(token: string): Promise<T> {
    const key = this.alg === 'HS256' ? this.secret! : this.publicKey!
    const { payload } = await jwtVerify(token, key, {
      issuer: this.issuer,
      audience: this.audience,
      clockTolerance: this.clockTolerance,
    })
    return payload as T
  }

  /**
   * Decodes a JWT without verifying its signature or validity.
   *
   * @remarks
   *   This is unsafe for authentication/authorization decisions.
   * @param token - The JWT string to decode.
   * @returns The decoded payload claims.
   */
  decodeUnsafe(token: string): JWTPayload {
    return decodeJwt(token)
  }

  /**
   * Checks whether a JWT is valid according to the current service configuration.
   *
   * Runs the same checks as {@link JwtService.verify} — signature, expiry, not-before, issued-at,
   * issuer, and audience — but returns only a boolean instead of the decoded payload.
   *
   * @example
   *   if (!(await jwtService.isValid(token))) {
   *     throw new Error('Invalid token')
   *   }
   *
   * @param token - The JWT string to validate.
   * @returns `true` if valid; `false` if invalid or expired.
   */
  async isValid(token: string): Promise<boolean> {
    try {
      await this.verify(token)
      return true
    } catch {
      return false
    }
  }
}
