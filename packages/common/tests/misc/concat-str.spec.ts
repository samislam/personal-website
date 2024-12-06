import { concatStr } from '@/misc/concat-str'

describe('concatStr() utility function', () => {
  it('should concatinate multiple strings correctly', () => {
    expect(concatStr('hello', 'world')).toBe('hello world')
  })
  it('should allow passing one string and still give a proper output', () => {
    expect(concatStr('hello')).toBe('hello')
  })
  it('should handle cases when no arguments were proivded', () => {
    expect(concatStr()).toBe('')
  })
})
