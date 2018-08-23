import get from './get'

describe('Recursive Set (set)', () => {
  const testObject = { foo: { bar: 'hello' } }

  test('Fetches nested keys', () => {
    expect(get(testObject, ['foo', 'bar'])).toBe('hello')
  })

  test('Accepts period delimited string for path', () => {
    expect(get(testObject, 'foo.bar')).toBe('hello')
  })

  test(`Returns undefined if the property doesn't exist`, () => {
    expect(get(testObject, ['bar', 'baz'])).toBeUndefined()
  })

  test(`Returns a default value if one is provided and they key doesn't exist`, () => {
    expect(get(testObject, ['bar', 'baz'], 'world')).toBe('world')
  })
})
