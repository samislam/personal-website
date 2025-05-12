// packages/shared-utils/src/decorators/query-transform-populate.decorator.ts
import { Transform } from 'class-transformer'

/**
 * Transforms query param into an array of strings. Supports:
 *
 * - `?populate=a,b,c`
 * - `?populate=a&populate=b`
 */
export function QueryTransformMulti(): PropertyDecorator {
  return Transform(({ value }) => {
    if (Array.isArray(value)) return value
    if (typeof value === 'string') {
      return value
        .split(',')
        .map((v) => v.trim())
        .filter(Boolean)
    }
    return []
  })
}
