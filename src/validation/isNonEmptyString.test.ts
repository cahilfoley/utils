import { curryRight } from 'lodash'
import batchTest from '../tests/batchTest'
import buildCaseArray from '../tests/buildCaseArray'
import isNonEmptyString from './isNonEmptyString'

const batch = curryRight(batchTest)(isNonEmptyString)

describe('isNonEmptyString', () => {
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
