import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

export function MaxDigits(maxLength: number, validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'MaxDigits',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [maxLength],
      options: validationOptions,
      validator: {
        validate(value: number) {
          const numString = String(value)
          const digitsCount = numString.replace('.', '').length // excluding the decimal point if present
          return digitsCount <= maxLength
        },
        defaultMessage({ value, constraints }: ValidationArguments) {
          return `$property value (${value}) exceeds the maximum allowed digits of ${constraints[0]}`
        },
      },
    })
  }
}
