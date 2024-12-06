import { Transform, TransformOptions } from 'class-transformer'
import { type ValidationOptions, ValidateIf } from 'class-validator'

/**
 * Sets all the validation rules to off and excludes (transforms) the property from the resulting
 * object.
 */
export const ExcludeIf: ExcludeIf =
  (condition, options = {}) =>
  (target: object, propertyKey: string | symbol) => {
    ValidateIf((object, value) => {
      const doIt = !!condition(object, value)
      if (doIt) return false
      else return true
    }, options.validationOptions)(target, propertyKey)
    Transform(
      (params) => {
        const doIt = !!condition(params.obj, params.value)
        // ! this will not remove it from the class instance, you need to omit it by { exposeUnsetFields: false }
        if (doIt) return undefined
        return params.value
      },
      { toClassOnly: true, ...options.transformOptions }
    )(target, propertyKey)
  }

export type ExcludeIf = <
  T extends Record<string, any> = any, // class instance
  Y extends keyof T = any, // propertyName
>(
  condition: (object: T, value: T[Y]) => boolean | void,
  options?: ExcludeIfOptions
) => PropertyDecorator

export interface ExcludeIfOptions {
  validationOptions?: ValidationOptions
  transformOptions?: TransformOptions
}
