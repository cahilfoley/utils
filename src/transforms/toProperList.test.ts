import partial from 'lodash.partial'
import batchTest from '../tests/batchTest'
import toProperList from './toProperList'

const batch = partial(batchTest, toProperList)

describe('ProperList String (toProperList)', () => {
  test(`When the list is empty`, () => {
    batch([
      [[], '']
    ])
  })


  test(`No commas and o 'and'`, () => {
    batch([
      [['apples'], 'apples']
    ])
  })

  test(`With only two items`, () => {
    batch([
      [['apples','bananas'], 'apples and bananas']
    ])
  })

  test(`With three or more items`, () => {
    batch([
      [['apples', 'pears', 'bananas'], 'apples, pears and bananas'],
      [['apples', 'pears', 'bananas', 'grape'], 'apples, pears, bananas and grape'],
      [['apples', 'pears', 'bananas', 'grape', 'lemon'], 'apples, pears, bananas, grape and lemon']
    ])
  })
})
