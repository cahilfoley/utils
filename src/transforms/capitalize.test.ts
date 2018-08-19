import { partial } from 'lodash'
import batchTest from '../tests/batchTest'
import capitalize from './capitalize'

const batch = partial(batchTest, capitalize)

describe('Capitalize String (capitalize)', () => {
  test(`Always capitalize the first letter of a single word`, () => {
    batch([['hello', 'Hello'], ['world', 'World'], ['Capital', 'Capital']])
  })

  test(`Capitalize the first letter of a sentence`, () => {
    batch([
      [
        'please capitalize the first letter.',
        'Please capitalize the first letter.'
      ],
      [
        'Non-creative test cases for this function',
        'Non-creative test cases for this function'
      ],
      ['from dusk till dawn', 'From dusk till dawn']
    ])
  })

  test(`Doesn't change string that don't start with a letter`, () => {
    batch([
      [' salt in the wounds', ' salt in the wounds'],
      ['1 2 3 4, high 5!', '1 2 3 4, high 5!'],
      ['_internal', '_internal']
    ])
  })
})
