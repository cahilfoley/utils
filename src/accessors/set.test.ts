import set from './set'

describe('Recursive Set (set)', () => {
  test('Updates nested keys', () => {
    const testObject = { foo: { bar: 'hello' } }
    set(testObject, ['foo', 'bar'], 'world')

    expect(testObject).toEqual({ foo: { bar: 'world' } })
  })

  test('Accepts period delimited string for path', () => {
    const testObject = { foo: { bar: { baz: 'hello' } } }
    set(testObject, 'foo.bar.baz', 'world')

    expect(testObject).toEqual({ foo: { bar: { baz: 'world' } } })
  })

  test('Creates nested objects if they do not exist', () => {
    const testObject = { foo: { bar: 'hello' } }
    set(testObject, ['bar', 'baz'], 'world')

    expect(testObject).toEqual({ bar: { baz: 'world' }, foo: { bar: 'hello' } })
  })

  test('Overrides keys in the path if they are not objects', () => {
    const testObject = { foo: { bar: 'hello' } }
    set(testObject, ['foo', 'bar', 'baz'], 'world')

    expect(testObject).toEqual({ foo: { bar: { baz: 'world' } } })
  })
})
