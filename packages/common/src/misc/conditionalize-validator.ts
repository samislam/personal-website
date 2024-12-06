import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

/**
 * Creates a conditional validation decorator that applies a constraint only if a specified condition is met.
 *
 * @template Z - Type of the optional user argument.
 * @param {string} name - The name of the custom validation.
 * @param {(args: ValidationArguments, userArg: any) => boolean} constraint - The constraint function that determines validity.
 * @param {(args: ValidationArguments, userArg: any) => string} defaultMessage - Function to generate the default error message.
 * @returns {<T extends Record<string, any> = any, Y extends keyof T = any>(
 *   condition: (object: T, value: T[Y]) => boolean | void,
 *   userArg?: Z,
 *   validationOptions?: ValidationOptions
 * ) => PropertyDecorator} A function that creates a property decorator based on the condition.
 *
 * @example
 * ```typescript
 * const IsStringIf = conditionalizeValidator(
 *   'isStringIf',
 *   ({ value }) => isString(value),
 *   () => `$property must be a string`
 * );
 *
 * class ExampleClass {
 *   @IsStringIf((obj) => obj.someCondition)
 *   someProperty: string;
 * }
 * ```
 */
export const conditionalizeValidator: ConditionalizeValidator =
  (name, constraint, defaultMessage) =>
  (condition, userArg, validationOptions) =>
  (object, propertyName: string) => {
    registerDecorator({
      name,
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate: (value: any, args: ValidationArguments) => {
          const target = args.object
          const runConstraint = condition(target as any, value)
          if (runConstraint) return constraint(args, userArg)
          else return true
        },
        defaultMessage(validationArguments: ValidationArguments) {
          return defaultMessage(validationArguments, userArg)
        },
      },
    })
  }

export type ConditionalizeValidator = <Z = any>(
  name: string,
  constraint: (args: ValidationArguments, userArg: any) => boolean,
  defaultMessage: (args: ValidationArguments, userArg: any) => string
) => <
  T extends Record<string, any> = any, // class instance
  Y extends keyof T = any, // propertyName
>(
  condition: (object: T, value: T[Y]) => boolean | void,
  userArg?: Z,
  validationOptions?: ValidationOptions
) => PropertyDecorator

type PropertyDecorator = (target: Object, propertyKey: string) => void
