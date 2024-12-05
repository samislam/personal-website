import { plainToInstance } from 'class-transformer'
import { IsOptionalIf } from '@/is-optional-if.decorator'
import { IsBoolean, IsString, Length, validate } from 'class-validator'

describe('@IsOptionalIf() decorator', () => {
  class TestDto {
    @IsString()
    @IsOptionalIf(() => false)
    prop1: string // always there
    @IsString()
    @IsOptionalIf(() => true)
    prop2?: string // always optional
    @IsString()
    @IsOptionalIf<TestDto>((obj) => obj.prop4)
    prop3?: string // based on property4
    @IsBoolean()
    prop4: boolean // exclude property3 based on this boolean
    @IsString()
    @Length(1, 10)
    @IsOptionalIf(() => true)
    prop5?: string | null // strict even when optional
    @IsString()
    @Length(1, 10)
    @IsOptionalIf(() => true, { allowNull: false })
    prop6?: string // strict even when optional, only undefined allowed
    @IsString()
    @Length(1, 10)
    @IsOptionalIf(() => true, { allowUndefined: false })
    prop7: string | null // strict even when optional, only undefined allowed
  }

  it('Optionalize a property in the plainToInstance object', async () => {
    const data: TestDto = {
      prop1: 'value1',
      prop3: 'value3',
      prop4: true,
      prop5: '1234567890',
      prop7: null,
    }
    const instance = plainToInstance(TestDto, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBe(0)
  })

  it('Ineffective when condition evaluates to false', async () => {
    const data: Partial<TestDto> = {
      prop2: 'value2',
      prop3: 'value3',
      prop4: true,
      prop5: '1234567890',
      prop7: null,
    }
    const instance = plainToInstance(TestDto, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBe(1)
    expect(validationState[0].property).toBe('prop1')
  })

  it('Optionalize a property based on another property in the same class', async () => {
    const data: TestDto = {
      prop1: 'value1',
      prop2: 'value1',
      prop4: true,
      prop5: '1234567890',
      prop7: null,
    }
    const instance = plainToInstance(TestDto, data)
    const validationState = await validate(instance)
    expect(validationState.length).toBe(0)
  })

  describe('@Optionalize() only allows null and undefined values to pass without validation', () => {
    let data: Partial<TestDto>
    beforeEach(() => {
      data = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
        prop4: true,
        prop7: null,
      }
    })
    it('providing null as a value', async () => {
      data.prop5 = null
      const instance = plainToInstance(TestDto, data)
      const validationState = await validate(instance)
      expect(validationState.length).toBe(0)
    })
    it('providing undefined as a value', async () => {
      data.prop5 = undefined
      const instance = plainToInstance(TestDto, data)
      const validationState = await validate(instance)
      expect(validationState.length).toBe(0)
    })

    it('providing an empty "" string', async () => {
      data.prop5 = ''
      const instance = plainToInstance(TestDto, data)
      const validationState = await validate(instance)
      expect(validationState.length).toBe(1)
    })

    it('completly omitting the optional key', async () => {
      const instance = plainToInstance(TestDto, data)
      const validationState = await validate(instance)
      expect(validationState.length).toBe(0)
    })

    describe("passing a real value, that does't meet the validation requirements", () => {
      it('giving a wrong type', async () => {
        // @ts-expect-error this is intended because we're testing the object
        data.prop5 = 123456
        const instance = plainToInstance(TestDto, data)
        const validationState = await validate(instance)
        expect(validationState.length).toBe(1)
        expect(validationState[0].property).toBe('prop5')
        expect(validationState[0].constraints).toHaveProperty('isString')
      })
      it('giving a bad value', async () => {
        data.prop5 = 'some long text ..........'
        const instance = plainToInstance(TestDto, data)
        const validationState = await validate(instance)
        expect(validationState.length).toBe(1)
        expect(validationState[0].property).toBe('prop5')
        expect(validationState[0].constraints).toHaveProperty('isLength')
      })
    })
  })

  describe('You can prevent null or undefined if you wanted to', () => {
    let data: Partial<TestDto>
    beforeEach(() => {
      data = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
        prop4: true,
        prop5: '12345',
        prop7: null,
      }
    })
    describe('preventing null with `{ allowNull: false }` option', () => {
      it('providing null as a value will trigger a validation error', async () => {
        // @ts-expect-error this is intended because we're testing the object
        data.prop6 = null
        const instance = plainToInstance(TestDto, data)
        const validationState = await validate(instance)
        expect(validationState.length).toBe(1)
        expect(validationState[0].property).toBe('prop6')
        expect(validationState[0].constraints).toHaveProperty('isString')
        expect(validationState[0].constraints).toHaveProperty('isLength')
      })

      it('providing undefined as a value will pass the validation', async () => {
        data.prop6 = undefined
        const instance = plainToInstance(TestDto, data)
        const validationState = await validate(instance)
        expect(validationState.length).toBe(0)
      })
    })

    describe('preventing undefined with `{ allowUndefined: false }` option', () => {
      it('providing undefined as a value will trigger a validation error', async () => {
        data.prop7 = undefined
        const instance = plainToInstance(TestDto, data)
        const validationState = await validate(instance)
        expect(validationState.length).toBe(1)
        expect(validationState[0].property).toBe('prop7')
        expect(validationState[0].constraints).toHaveProperty('isString')
        expect(validationState[0].constraints).toHaveProperty('isLength')
      })

      it('providing null as a value will pass the validation', async () => {
        data.prop7 = null
        const instance = plainToInstance(TestDto, data)
        const validationState = await validate(instance)
        expect(validationState.length).toBe(0)
      })
    })
  })
})
