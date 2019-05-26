import clone from './clone'

describe('Deep Clone (clone)', () => {
  describe('Primitive properties', () => {
    it('should clone shallowly nested primitive properties', () => {
      const original = { bar: 'hello', foo: 'world' }
      const copy = clone(original)

      copy.bar = 'bar'
      copy.foo = 'foo'

      expect(original).toEqual({ bar: 'hello', foo: 'world' })
    })

    it('should clone deeply nested primitive properties', () => {
      const original = { foo: { bar: 'hello', baz: 'world', nothing: null } }
      const copy = clone(original)

      expect(copy.foo).toEqual({ bar: 'hello', baz: 'world', nothing: null })

      copy.foo.bar = 'bar'
      copy.foo.baz = 'baz'

      expect(original.foo).toEqual({ bar: 'hello', baz: 'world', nothing: null })
    })
  })

  describe('Date properties', () => {
    it('should clone date values', () => {
      const now = Date.now()
      const original = { start: new Date(now) }
      const copy = clone(original)

      expect(copy.start.valueOf()).toBe(now)
    })

    it('should not copy dates by reference', () => {
      const now = Date.now()
      const original = { start: new Date(now) }
      const copy = clone(original)

      expect(original.start).not.toBe(copy.start)

      copy.start.setFullYear(2015)
      expect(original.start.valueOf()).toBe(now)
    })
  })

  describe('Function properties', () => {
    const func = () => 'baz'
    const original = { foo: { bar: func } }

    it('should convert functions to empty objects by default or when the `copyFunctions` option is false', () => {
      const copyDefault = clone(original)
      expect(copyDefault).toEqual({ foo: { bar: {} } })

      const copyNoFunctions = clone(original, { copyFunctions: false })
      expect(copyNoFunctions).toEqual({ foo: { bar: {} } })
    })

    it('should copy functions to the cloned object when the `copyFunctions` option is true', () => {
      const copyWithFunctions = clone(original, { copyFunctions: true })
      expect(copyWithFunctions).toEqual({ foo: { bar: func } })
    })
  })

  describe('Nested objects', () => {
    it('should clone sub-arrays', () => {
      const original = { foo: [1, 2, 'foo', 'bar'] }
      const copy = clone(original)

      expect(copy.foo).toEqual(original.foo)
      expect(copy.foo).not.toBe(original.foo)

      copy.foo[1] = 0
      copy.foo.splice(2)
      copy.foo.reverse()
      copy.foo.push('hello', 'world')
      expect(copy.foo).toEqual([0, 1, 'hello', 'world'])
      expect(original.foo).toEqual([1, 2, 'foo', 'bar'])
    })

    it('should clone sub-objects', () => {
      const original = { foo: { bar: 'hello' } }
      const copy = clone(original)

      expect(copy.foo.bar).toBe('hello')

      copy.foo.bar = 'bar'
      expect(copy.foo.bar).toBe('bar')
      expect(original.foo.bar).toBe('hello')
    })

    it('should clone sub-objects within arrays', () => {
      const original = { foo: [{ bar: 'hello' }, { bar: 'world' }] }
      const copy = clone(original)

      copy.foo[0].bar = 'bar'
      copy.foo[1].bar = '1'

      expect(original.foo[0]).toEqual({ bar: 'hello' })
      expect(original.foo[1]).toEqual({ bar: 'world' })
    })
  })
})
