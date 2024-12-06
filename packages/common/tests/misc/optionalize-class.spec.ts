import { OptionalizeClass } from '@/misc/optionalize-class'

describe('OptionalizeClass', () => {
  it('should make all properties of the base class optional', () => {
    class A {
      e: string
    }

    const OptionalizedA = OptionalizeClass(A)

    // Assert that OptionalizedA has optional properties
    type OptionalizedAInstance = InstanceType<typeof OptionalizedA>
    const instance: OptionalizedAInstance = {}
    instance.e = 'optional' // Optional assignment
    expect(instance.e).toBe('optional')
  })

  it('should work with a derived class and keep derived properties required', () => {
    class A {
      e: string
    }
    class B extends A {
      c: string
    }

    const OptionalizedA = OptionalizeClass(A)

    class OptionalizedB extends OptionalizedA {
      c: string
    }

    // Assert that OptionalizedB has optional 'e' and required 'c'
    type OptionalizedBInstance = InstanceType<typeof OptionalizedB>
    const instance: OptionalizedBInstance = { c: 'required' }
    expect(instance.c).toBe('required')
    expect(instance.e).toBeUndefined() // Optional property

    instance.e = 'optional'
    expect(instance.e).toBe('optional')
  })

  it('should not alter behavior for classes with no properties', () => {
    class Empty {}

    const OptionalizedEmpty = OptionalizeClass(Empty)

    type OptionalizedEmptyInstance = InstanceType<typeof OptionalizedEmpty>
    const instance: OptionalizedEmptyInstance = {}
    expect(instance).toBeDefined()
  })
})
