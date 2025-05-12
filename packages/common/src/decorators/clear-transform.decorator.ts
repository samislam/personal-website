/** Overrides any inherited `@Transform` on this property by setting a no-op transform. */
import { Transform } from 'class-transformer'

export function ClearTransform(): PropertyDecorator {
  return Transform(({ value }) => value, { toClassOnly: true })
}
