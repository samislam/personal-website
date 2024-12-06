import { ExcludeIf } from '@/decorators/exclude-if.decorator'
import { Contains, IsString, validate } from 'class-validator'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { IsNotEmpty, IsBoolean, MaxLength, MinLength } from 'class-validator'

describe('@ExcludeIf() decorator', () => {
  class TestDto {
    @IsString()
    @ExcludeIf(() => true)
    prop1?: string // always excludes
    @IsString()
    prop2: string // always exists
    @IsString()
    @ExcludeIf<TestDto>((obj) => obj.prop4)
    prop3?: string // exclude based on prop4
    @IsBoolean()
    prop4?: boolean = false // exclude property3 based on this boolean
  }
  it("Exludes a property from the plainToInstance object (when `'exposeUnsetFields'` is `false`)", async () => {
    const data: TestDto = {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3',
    }
    const instance = plainToInstance(TestDto, data, { exposeUnsetFields: false })
    const expectation: TestDto = {
      prop2: 'value2',
      prop3: 'value3',
      prop4: false,
    }
    expect(instance).toEqual(expectation)
  })
  it("Excludes a property from the instanceToPlain object (when `'exposeUnsetFields'` is `false`)", async () => {
    const data: TestDto = {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3',
    }
    const instance = plainToInstance(TestDto, data, { exposeUnsetFields: false })
    const plain = instanceToPlain(instance)
    const expectation: TestDto = {
      prop2: 'value2',
      prop3: 'value3',
      prop4: false,
    }
    expect(plain).toEqual(expectation)
  })
  it("Excludes a property based on another property in the same class (when `'exposeUnsetFields'` is `false`)", async () => {
    const data: TestDto = {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3',
      prop4: true,
    }
    const instance = plainToInstance(TestDto, data, { exposeUnsetFields: false })
    const expectation: TestDto = {
      prop2: 'value2',
      prop4: true,
    }
    expect(instance).toEqual(expectation)
  })
  it('removes all the validations in case the property was excluded', async () => {
    class TestDto {
      @IsString()
      @IsNotEmpty()
      @MinLength(10)
      @MaxLength(200)
      @Contains('Good morning')
      @ExcludeIf(() => true)
      prop?: string
    }
    const data: TestDto = {}
    const instance = plainToInstance(TestDto, data)
    const errors = await validate(instance)
    expect(errors.length).toBe(0)
  })
})
