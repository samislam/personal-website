import { plainToInstance } from 'class-transformer'
import { conditionalizeValidator } from '@/misc/conditionalize-validator'
import { IsBoolean, isNumber, IsString, isString, minLength, validate } from 'class-validator'

describe('conditionalizeValidator() function', () => {
  const IsStringIf = conditionalizeValidator(
    'isStringIf',
    ({ value }) => isString(value),
    () => `$property must be a string`
  )
  const IsNumberIf = conditionalizeValidator(
    'isNumberIf',
    ({ value }) => isNumber(value),
    () => `$property must be a number`
  )
  const IsLongerThan = conditionalizeValidator<number>(
    'isLongerThan',
    ({ value }: { value: string }, userArg: number) => minLength(value, userArg),
    (_, userArg: number) => `$property must be longer than ${userArg}`
  )
  it('Should require the constraint when condition of the generated decorator is true', async () => {
    class TestClass {
      @IsStringIf(() => true)
      prop: string
    }
    const data = { prop: 123 }
    const instance = plainToInstance(TestClass, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBe(1)
    expect(validationState[0].constraints).toHaveProperty('isStringIf')
  })
  it("Should include the user defined message when the validation doesn't pass", async () => {
    class TestClass {
      @IsStringIf(() => true)
      prop: string
    }
    const data = { prop: 123 }
    const instance = plainToInstance(TestClass, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBe(1)
    expect(validationState[0]?.constraints).toHaveProperty('isStringIf')
    expect(validationState[0]?.constraints?.['isStringIf']).toBe('prop must be a string')
  })
  it('Should let you define custom user argument', async () => {
    class TestClass {
      @IsString()
      @IsLongerThan(() => true, 5)
      prop: string
    }
    const data = { prop: '123' }
    const instance = plainToInstance(TestClass, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBe(1)
    expect(validationState[0]?.constraints?.['isLongerThan']).toBe('prop must be longer than 5')
  })
  it('Should allow mixing multiple conditional decorators', async () => {
    class TestClass {
      @IsStringIf(() => true)
      @IsLongerThan(() => true, 5)
      prop: string
    }
    const data = { prop: 123 }
    const instance = plainToInstance(TestClass, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBe(1)
    expect(validationState[0]?.constraints).toHaveProperty('isStringIf')
    expect(validationState[0]?.constraints).toHaveProperty('isLongerThan')
    expect(validationState[0]?.constraints?.['isStringIf']).toBe('prop must be a string')
    expect(validationState[0]?.constraints?.['isLongerThan']).toBe('prop must be longer than 5')
  })
  it('Should allow the condition callback to rely on other property in the instance', async () => {
    class TestClass {
      @IsStringIf<TestClass>((obj) => obj.prop2)
      @IsNumberIf<TestClass>((obj) => !obj.prop2)
      prop: string

      @IsBoolean()
      prop2: boolean
    }
    const data1 = { prop: 'foo', prop2: true }
    const instance1 = plainToInstance(TestClass, data1)
    const validationState1 = await validate(instance1)
    expect(validationState1.length).toBe(0)

    const data2 = { prop: 123, prop2: false }
    const instance2 = plainToInstance(TestClass, data2)
    const validationState2 = await validate(instance2)
    expect(validationState2.length).toBe(0)
  })
})
