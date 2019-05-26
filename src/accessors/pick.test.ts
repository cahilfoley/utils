import pick from './pick'

describe('Pick Properties (pick)', () => {
  it('should exclude all properties that were not specified', () => {
    const testObject = { foo: 'hello', bar: 'world', baz: [1, 2, 3], some: 'property' }
    const pickedObject = pick(testObject, 'foo', 'bar')

    expect(pickedObject).toEqual({ foo: 'hello', bar: 'world' })
  })

  it('should return an empty object when `object` is nullish', () => {
    const testObjectNull = null as {}
    const pickedObjectNull = pick(testObjectNull)

    expect(pickedObjectNull).toEqual({})

    let testObjectUndefined: {}
    const pickedObjectUndefined = pick(testObjectUndefined)
    expect(pickedObjectUndefined).toEqual({})
  })

  describe('Overloaded signatures', () => {
    it('should accept an array of strings as keys', () => {
      const testObject = { foo: 'hello', bar: 'world', baz: [1, 2, 3], some: 'property' }
      const pickedObject = pick(testObject, ['foo', 'bar', 'baz'])

      expect(pickedObject).toEqual({ foo: 'hello', bar: 'world', baz: [1, 2, 3] })
    })

    it('should accept any number of string arguments as keys', () => {
      const testObject = { foo: 'hello', bar: 'world', baz: [1, 2, 3], some: 'property' }
      const pickedObject = pick(testObject, 'foo', 'bar', 'baz')

      expect(pickedObject).toEqual({ foo: 'hello', bar: 'world', baz: [1, 2, 3] })
    })
  })
})
