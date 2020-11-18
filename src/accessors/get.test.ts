import get from './get'

describe('Recursive Set (set)', () => {
  const testObject = {
    value: 'layer 1',
    child: {
      value: 'layer 2',
      child: {
        value: 'layer 3',
        child: {
          value: 'layer 4',
        },
        children: [{ value: 'layer 3 child 1' }, { value: 'layer 3 child 2' }],
      },
      children: [{ value: 'layer 2 child 1' }, { value: 'layer 2 child 2' }],
    },
  }

  const testObscureValues = { zero: 0, one: 1, emptyString: '', undefined: undefined, null: null }

  describe('Accessed values', () => {
    it('should return any value that is not undefined if it exists on the target object', () => {
      expect(get(testObscureValues, 'zero')).toBe(0)
      expect(get(testObscureValues, 'one')).toBe(1)
      expect(get(testObscureValues, 'emptyString')).toBe('')
      expect(get(testObscureValues, 'null')).toBeNull()
      expect(get(testObscureValues, 'undefined')).toBeUndefined()
    })
  })

  describe('Nested accessor', () => {
    it('should retrieve nested values with a path array of any depth', () => {
      expect(get(testObject, ['value'])).toBe('layer 1')
      expect(get(testObject, ['child', 'value'])).toBe('layer 2')
      expect(get(testObject, ['child', 'child', 'value'])).toBe('layer 3')
      expect(get(testObject, ['child', 'child', 'child', 'value'])).toBe('layer 4')
    })

    it('should retrieve nested values with a period delimited string of any depth', () => {
      expect(get(testObject, 'value')).toBe('layer 1')
      expect(get(testObject, 'child.value')).toBe('layer 2')
      expect(get(testObject, 'child.child.value')).toBe('layer 3')
      expect(get(testObject, 'child.child.child.value')).toBe('layer 4')
    })

    it('should traverse both objects and arrays when using a string path', () => {
      expect(get(testObject, 'child.children[0].value')).toBe('layer 2 child 1')
      expect(get(testObject, 'child.child.children[1].value')).toBe('layer 3 child 2')
    })
  })

  describe('Default value', () => {
    it(`should return undefined if the property doesn't exist and a default value is not provided`, () => {
      expect(get(testObject, 'child.baz')).toBeUndefined()
      expect(get(testObject, ['child', 'baz'])).toBeUndefined()
    })

    it(`should return a default value if the property has the value undefined`, () => {
      expect(get(testObscureValues, 'null', 'default')).toBe(null)
      expect(get(testObscureValues, 'undefined', 'default')).toBe('default')
    })

    it(`should return a default value if one is provided and a value isn't found`, () => {
      expect(get(testObject, 'child.baz', 'world')).toBe('world')
      expect(get(testObject, ['child', 'baz'], 'world')).toBe('world')
    })

    it(`should ignore the default value if one is provided but a value is found`, () => {
      expect(get(testObject, 'child.value', 'world')).toBe('layer 2')
      expect(get(testObject, ['child', 'value'], 'world')).toBe('layer 2')
    })
  })
})
