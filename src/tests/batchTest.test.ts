import batchTest from './batchTest'

describe('Batch Test (batchTest)', () => {
  const cases: any[][] = [[0, 0], [1, 2], ['foo', 'bar'], ['input', 'output']]

  // Creating a mock function to test
  const mockFunction = jest.fn().mockName('mockTestFunction')

  // Run the test cases in batch with a mock test runner
  const mockRunner = jest.fn().mockName('mockTestRunner')
  batchTest(mockFunction, cases, {
    runner: mockRunner
  })

  describe('The runner is called for every test case', () => {
    test('Called the correct number of times', () => {
      expect(mockRunner.mock.calls.length).toBe(4)
    })

    test('Called with the correct arguments', () => {
      cases.forEach(([input, output], i) => {
        expect(mockRunner.mock.calls[i][0][0]).toBe(input)
        expect(mockRunner.mock.calls[i][0][1]).toBe(output)
        expect(mockRunner.mock.calls[i][1]).toBe(mockFunction)
      })
    })
  })

  describe('The options behave correctly', () => {
    describe('The correct runner is called', () => {
      test('Custom runner used if provided', () => {
        expect(mockRunner).toBeCalled()
      })

      test('Default runner used if not provided', () => {
        batchTest(input => input * 2, [[2, 4]])
      })
    })

    describe('The correct verb is used', () => {
      test('Verb is undefined if not provided', () => {
        const mockVerbRunner = jest.fn().mockName('mockVerbTestRunner')
        batchTest(mockFunction, [['in', 'out']], {
          runner: mockVerbRunner,
          verb: 'toThrow'
        })

        expect(mockVerbRunner).toBeCalledWith(['in', 'out'], mockFunction, 'toThrow')
      })

      test('Custom verb used if not provided', () => {
        expect(mockRunner).toBeCalledWith([0, 0], mockFunction, undefined)
      })
    })
  })
})
