import toProperList from './toProperList'

const stringTestCases: [string[], string][] = [
  [['a', 'b', 'c', 'd'], 'a, b, c and d'],
  [['foo', 'bar', 'baz'], 'foo, bar and baz'],
  [['apples', 'pears'], 'apples and pears'],
  [['just me'], 'just me']
]

const numberTestCases: [number[], string][] = [
  [[1, 2, 3, 4], '1, 2, 3 and 4'],
  [[10, 5, 0], '10, 5 and 0'],
  [[1, 2], '1 and 2'],
  [[1, 2, 3, 4], '1, 2, 3 and 4']
]

const mixedTestCases: [(string | number)[], string][] = [
  [[1, 'two', 3, 'four'], '1, two, 3 and four'],
  [['foo', 'bar', 2], 'foo, bar and 2']
]

describe('To Proper List (toProperList)', () => {
  describe('Works with an array of inputs', () => {
    test('Works with an array of strings', () => {
      stringTestCases.forEach(([inputs, output]) => expect(toProperList(inputs)).toBe(output))
    })

    test('Works with an array of numbers', () => {
      numberTestCases.forEach(([inputs, output]) => expect(toProperList(inputs)).toBe(output))
    })

    test('Works with an array of mixed string and numbers', () => {
      mixedTestCases.forEach(([inputs, output]) => expect(toProperList(inputs)).toBe(output))
    })
  })

  describe('Works with multiple input parameters', () => {
    test('Multiple string parameters', () => {
      stringTestCases.forEach(([inputs, output]) => expect(toProperList(...inputs)).toBe(output))
    })

    test('Multiple number parameters', () => {
      numberTestCases.forEach(([inputs, output]) => expect(toProperList(...inputs)).toBe(output))
    })

    test('Multiple string or number parameters', () => {
      mixedTestCases.forEach(([inputs, output]) => expect(toProperList(...inputs)).toBe(output))
    })
  })

  describe('Throws a TypeError for invalid inputs', () => {
    const invalidCall: (...args: any[]) => any = toProperList

    test('Inputs that are null or undefined', () => {
      expect(() => invalidCall(['foo', null, 'baz'])).toThrowError(TypeError)
      expect(() => invalidCall([1, undefined, 3])).toThrowError(TypeError)
    })

    test('Inputs that contain nested arrays', () => {
      expect(() => invalidCall(['foo', ['bar', 'baz']])).toThrowError(TypeError)
      expect(() => invalidCall([[1, 2, 3]])).toThrowError(TypeError)
    })

    test('Inputs that are objects', () => {
      expect(() => invalidCall({ foo: 1, bar: 2 })).toThrowError(TypeError)
      expect(() => invalidCall(['foo', { bar: 'baz' }])).toThrowError(TypeError)
    })
  })
})
