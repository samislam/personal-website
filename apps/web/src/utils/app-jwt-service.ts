import appConfig from '@/config/app.config'
import { serverEnv } from '@/server/server-env'
import { JwtService } from '@/classes/jwt-service.class'

/**
 * Application-wide JwtService instance.
 *
 * Chooses HS256 (shared secret) or RS256/EdDSA (keypair) based on env. Falls back to optional
 * issuer/audience/exp/tolerance if provided.
 */
export const appJwtService = await (async () => {
  const { JWT_SECRET, JWT_PRIVATE_KEY, JWT_PUBLIC_KEY } = serverEnv
  const {
    //
    issuer,
    audience,
    jwtAlgorithm,
    clockToleranceSec,
    defaultExpiration,
  } = appConfig.authentication

  if (jwtAlgorithm === 'HS256') {
    // Basic runtime hardening in case schema wasn’t strict
    if (!JWT_SECRET) throw new Error('JWT_SECRET is required for HS256')
    if (JWT_SECRET.length < 32) throw new Error('JWT_SECRET must be at least 32 chars for HS256')

    return JwtService.init({
      secret: JWT_SECRET,
      issuer: issuer,
      audience: audience,
      defaultExpiration: defaultExpiration,
      clockToleranceSec: clockToleranceSec ?? 0,
    })
  }

  // RS256 or EdDSA
  if (!JWT_PRIVATE_KEY || !JWT_PUBLIC_KEY) {
    throw new Error(`JWT_PRIVATE_KEY and JWT_PUBLIC_KEY are required for ${jwtAlgorithm}`)
  }

  return JwtService.init({
    alg: jwtAlgorithm,
    privateKeyPEM: JWT_PRIVATE_KEY,
    publicKeyPEM: JWT_PUBLIC_KEY,
    issuer: issuer,
    audience: audience,
    defaultExpiration: defaultExpiration,
    clockToleranceSec: clockToleranceSec ?? 0,
  })
})()
