import { curryRight } from 'lodash'
import batchTest from '../tests/batchTest'
import buildCaseArray from '../tests/buildCaseArray'
import isValidURL from './isValidURL'

const batch = curryRight(batchTest)(isValidURL)

describe('URL Validation (isValidURL)', () => {
  test('Identifies valid URLs', () => {
    batch(
      buildCaseArray(
        [
          'http://lorempixel.com/640/480/business',
          'http://jakob.info',
          'http://www.google.com',
          'http://lorempixel.com/640/480/technics',
          'https://s3.amazonaws.com/uifaces/faces/twitter/besbujupi/128.jpg'
        ],
        true
      )
    )
  })

  test('Identifies malformatted URLs', () => {
    batch(
      buildCaseArray(
        [
          'http://probably@hackers.sus',
          'herpa://derpa.com.au',
          'https://///slash-city.com////free//slashes',
          'no spaces.com',
          ' what __ !_@+# '
        ],
        false
      )
    )
  })
})
