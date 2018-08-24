import clone from './clone'

describe('Deep Clone (clone)', () => {
  test('Shallow primitives are cloned', () => {
    const original = { bar: 'hello', foo: 'world' }
    const copy = clone(original)

    copy.bar = 'bar'
    copy.foo = 'foo'

    expect(original).toEqual({ bar: 'hello', foo: 'world' })
  })

  test('Deeply nested primitives are cloned', () => {
    const original = { foo: { bar: 'hello', baz: 'world', nothing: null } }
    const copy = clone(original)

    copy.foo.bar = 'bar'
    copy.foo.baz = 'baz'

    expect(original.foo).toEqual({ bar: 'hello', baz: 'world', nothing: null })
  })

  test('Dates are cloned', () => {
    const now = Date.now()
    const original = { start: new Date(now) }
    const copy = clone(original)

    expect(copy.start.valueOf()).toBe(now)

    copy.start.setFullYear(2015)
    expect(original.start.valueOf()).toBe(now)
  })

  test('Functions are converted to empty objects unless flag is set', () => {
    const func = () => 'baz'
    const original = { foo: { bar: func } }
    
    const copy = clone(original)
    expect(copy).toEqual({ foo: { bar: {} } })
    
    const copy2 = clone(original, { copyFuncs: true })
    expect(copy).toEqual({ foo: { bar: func } })
  })

  test('Objects within arrays are cloned', () => {
    const original = { foo: [{ bar: 'hello' }, { bar: 'world' }] }
    const copy = clone(original)

    copy.foo[0].bar = 'bar'
    copy.foo[1].bar = 1

    expect(original.foo[0]).toEqual({ bar: 'hello' })
    expect(original.foo[1]).toEqual({ bar: 'world' })
  })
})
