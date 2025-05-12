import { Transform, TransformFnParams } from 'class-transformer'

type DefaultFunction<T> = (params: TransformFnParams) => T
type DefaultValue<T> = T | DefaultFunction<T>

/**
 * Applies a default value **only if the input is `undefined`** during transformation. Accepts
 * either a static value or a function with access to the full transform context.
 *
 * @Default(true)
 * @Default(({ obj }) => obj.price ?? 0)
 */
export function Default<T>(defaultValue: DefaultValue<T>): PropertyDecorator {
  return Transform(
    (params) => {
      const { value } = params

      const isFn = typeof defaultValue === 'function' && defaultValue.length > 0

      if (value !== undefined) return value
      if (isFn) {
        return (defaultValue as DefaultFunction<T>)(params)
      }

      return defaultValue
    },
    { toClassOnly: true }
  )
}
