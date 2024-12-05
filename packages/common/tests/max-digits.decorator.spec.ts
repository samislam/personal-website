import { MaxDigits } from '@/max-digits.decorator'
import { plainToInstance } from 'class-transformer'
import { IsNumber, validate } from 'class-validator'

describe('@MaxDigits() decorator', () => {
  class TestDto {
    @IsNumber()
    @MaxDigits(5)
    prop1: number
  }
  it('Passes when the value is less than the maxDigits specifed value', async () => {
    const data: TestDto = {
      prop1: 1234,
    }
    const instance = plainToInstance(TestDto, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBe(0)
  })
  it('Passes when the value is equal to the maxDigits specifed value', async () => {
    const data: TestDto = {
      prop1: 12345,
    }
    const instance = plainToInstance(TestDto, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBe(0)
  })
  it('Validation error when the value exceeds the maxDigits specifed value', async () => {
    const data: TestDto = {
      prop1: 123456,
    }
    const instance = plainToInstance(TestDto, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBeGreaterThan(0)
    expect(validationState[0].constraints).toHaveProperty('MaxDigits')
  })
})
