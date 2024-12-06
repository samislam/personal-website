import { from } from '@/misc/from'

describe('from() utility function', () => {
  it('returns a `ValueTransformer` where `to` returns the same value, and from returns the specified value', () => {
    const transformer = from(jest.fn(() => 'foo'))
    expect(transformer).toEqual({ from: expect.any(Function), to: expect.any(Function) })
    expect(transformer.from(undefined)).toBe('foo')
    expect(transformer.to('baz')).toBe('baz')
  })
})
