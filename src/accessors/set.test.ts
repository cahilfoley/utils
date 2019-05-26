import set from './set'

describe('Recursive Set (set)', () => {
  describe('Nested accessor', () => {
    it('should update nested values with a path array of any depth', () => {
      const testObject = {
        value: 'layer 1',
        child: {
          value: 'layer 2',
          child: {
            value: 'layer 3',
            child: {
              value: 'layer 4',
            },
          },
        },
      }

      set(testObject, ['value'], 'updated layer 1')
      expect(testObject.value).toBe('updated layer 1')

      set(testObject, ['child', 'value'], 'updated layer 2')
      expect(testObject.child.value).toBe('updated layer 2')

      set(testObject, ['child', 'child', 'value'], 'updated layer 3')
      expect(testObject.child.child.value).toBe('updated layer 3')

      set(testObject, ['child', 'child', 'child', 'value'], 'updated layer 4')
      expect(testObject.child.child.child.value).toBe('updated layer 4')

      expect(testObject).toEqual({
        value: 'updated layer 1',
        child: {
          value: 'updated layer 2',
          child: {
            value: 'updated layer 3',
            child: {
              value: 'updated layer 4',
            },
          },
        },
      })
    })

    it('should update nested values with a period delimited string of any depth', () => {
      const testObject = {
        value: 'layer 1',
        child: {
          value: 'layer 2',
          child: {
            value: 'layer 3',
            child: {
              value: 'layer 4',
            },
          },
        },
      }

      set(testObject, 'value', 'updated layer 1')
      expect(testObject.value).toBe('updated layer 1')

      set(testObject, 'child.value', 'updated layer 2')
      expect(testObject.child.value).toBe('updated layer 2')

      set(testObject, 'child.child.value', 'updated layer 3')
      expect(testObject.child.child.value).toBe('updated layer 3')

      set(testObject, 'child.child.child.value', 'updated layer 4')
      expect(testObject.child.child.child.value).toBe('updated layer 4')

      expect(testObject).toEqual({
        value: 'updated layer 1',
        child: {
          value: 'updated layer 2',
          child: {
            value: 'updated layer 3',
            child: {
              value: 'updated layer 4',
            },
          },
        },
      })
    })

    it('should create empty objects or arrays when descending the object if they do not exist', () => {
      const testObject = { foo: { bar: 'hello' } }
      set(testObject, 'bar.baz', 'world')
      expect(testObject).toEqual({ bar: { baz: 'world' }, foo: { bar: 'hello' } })

      const testObjectEmpty = {}
      set(testObjectEmpty, 'foo[0].bar[0].baz', 'world')
      expect(testObjectEmpty).toEqual({ foo: [{ bar: [{ baz: 'world' }] }] })
    })

    it('should convert values in the path to objects if they are not indexable', () => {
      const testObject = { foo: { bar: 'hello' } }
      set(testObject, 'foo.bar.baz', 'world')
      expect(testObject).toEqual({ foo: { bar: { baz: 'world' } } })

      const testObjectArray = { foo: 'hello world' }
      set(testObjectArray, 'foo[0]', 'hola')
      set(testObjectArray, 'foo[1]', 'world')
      expect(testObjectArray).toEqual({ foo: ['hola', 'world'] })
    })
  })
})
