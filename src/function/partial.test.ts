import partial from './partial'

describe('Create Partial Function (partial)', () => {
  const join = (...args) => args.join('')

  it('Substitutes any number of arguments', () => {
    expect(partial(join)(1)).toBe('1')
    expect(partial(join, 1)(2)).toBe('12')
    expect(partial(join, 1, 2)(3)).toBe('123')
    expect(partial(join, 1, 2, 3)(4)).toBe('1234')
    expect(partial(join, 1, 2, 3, 4)(5)).toBe('12345')
  })

  it('Returns a function that accepts any number of parameters', () => {
    expect(partial(join, 1, 2, 3)()).toBe('123')
    expect(partial(join, 1, 2, 3)(4)).toBe('1234')
    expect(partial(join, 1, 2, 3)(4, 5)).toBe('12345')
    expect(partial(join, 1, 2, 3)(4, 5, 6)).toBe('123456')
    expect(partial(join, 1, 2, 3)(4, 5, 6, 7)).toBe('1234567')
  })

  const testArgs = [1, true, 'foo', { bar: 'baz' }]

  it('Does not interfere with the types of any arguments', () => {
    const getTypes = (...args) => args.map(arg => typeof arg)
    const types = ['number', 'boolean', 'string', 'object']

    expect(partial(getTypes, ...testArgs)()).toEqual(types)
    expect(partial(getTypes)(...testArgs)).toEqual(types)
    expect(partial(getTypes, ...[...testArgs].reverse())(...testArgs)).toEqual([
      ...[...types].reverse(),
      ...types
    ])
  })

  it('Does not interfere with the values of any arguments', () => {
    const getValues = (...args) => args

    expect(partial(getValues, ...testArgs)()).toEqual(testArgs)
    expect(partial(getValues)(...testArgs)).toEqual(testArgs)
    expect(partial(getValues, ...[...testArgs].reverse())(...testArgs)).toEqual([
      ...[...testArgs].reverse(),
      ...testArgs
    ])
  })
})
