import partial from '../function/partial'
import batchTest from '../tests/batchTest'
import buildCaseArray from '../tests/buildCaseArray'
import isNonEmptyString from './isNonEmptyString'

const batch = partial(batchTest, isNonEmptyString)

describe('Non-empty String Validation (isNonEmptyString)', () => {
  test('Identifies valid strings', () => {
    batch(buildCaseArray(['Something', 'Multiple words'], true))
  })

  test('Identifies empty strings', () => {
    expect('')
  })

  test('Identifies non-string values', () => {
    batch(buildCaseArray([null, undefined, { foo: 'bar' }, []], false))
  })
})
