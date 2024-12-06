import { enumToValue, valueToEnum, numberToString } from '@/misc/transformers'
import { stringToNumber, booleanToNumber, numberToBoolean } from '@/misc/transformers'

describe('stringToNumber() function', () => {
  it('transforms a string to number', () => {
    expect(stringToNumber('123')).toBe(123)
  })
})

describe('numberToString() function', () => {
  it('transforms a number to string', () => {
    expect(numberToString(123)).toBe('123')
  })
})

describe('booleanToNumber() function', () => {
  it('transforms (true) to (1) and (false) to (0)', () => {
    expect(booleanToNumber(true)).toBe(1)
    expect(booleanToNumber(false)).toBe(0)
  })
})

describe('numberToBoolean() function', () => {
  it('transforms (1) to (true) and (0) to (false)', () => {
    expect(numberToBoolean(1)).toBe(true)
    expect(numberToBoolean(0)).toBe(false)
  })
})

describe('enumToValue() function', () => {
  it('transforms an enum to its defined value', () => {
    const enumMap = {
      ONE: 1,
      TWO: 2,
    }
    expect(enumToValue(enumMap, 'ONE')).toBe(1)
    expect(enumToValue(enumMap, 'TWO')).toBe(2)
  })
})

describe('valueToEnum() function', () => {
  it('transforms an enum to its defined value', () => {
    const enumMap = {
      ONE: 1,
      TWO: 2,
    }
    expect(valueToEnum(enumMap, 1)).toBe('ONE')
    expect(valueToEnum(enumMap, 2)).toBe('TWO')
  })
})
