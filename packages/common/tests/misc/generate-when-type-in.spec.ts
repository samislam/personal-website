import { plainToInstance } from 'class-transformer'
import { IsNotEmpty, IsString, validate } from 'class-validator'
import { IsOptionalIf } from '@/decorators/is-optional-if.decorator'
import { generateWhenTypeIn, Verbs } from '@/misc/generate-when-type-in'

describe('generateWhenTypeIn() utility function', () => {
  const generateWhenTypeInTest = (verb: Verbs) => async () => {
    const whenTypeIn = generateWhenTypeIn<TestClass, PropEnums>('prop')
    type PropEnums = 'apple' | 'orange' | 'banana'
    class TestClass {
      prop: PropEnums
      @IsString()
      @IsNotEmpty()
      @IsOptionalIf<_>(whenTypeIn(verb, ['banana']))
      prop1?: string
    }
    type _ = TestClass // alias

    const data: TestClass = { prop: 'banana' }
    const instance = plainToInstance(TestClass, data)
    const errors = await validate(instance)
    if (verb === 'is') expect(errors.length).toBe(0)
    if (verb === 'is-not') {
      expect(errors.length).toBe(1)
      expect(errors[0].property).toBe('prop1')
    }
  }
  it(
    'should generate a working whenTypeIn callback that returns a proper value when using the `is` verb',
    generateWhenTypeInTest('is')
  )
  it(
    'should generate a working whenTypeIn callback that returns a proper value when using the `is-not` verb',
    generateWhenTypeInTest('is')
  )
})
