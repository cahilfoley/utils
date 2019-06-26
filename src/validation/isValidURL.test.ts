import partial from '../function/partial'
import batchTest from '../tests/batchTest'
import buildCaseArray from '../tests/buildCaseArray'
import isValidURL from './isValidURL'

const batch = partial(batchTest, isValidURL)

describe('URL Validation (isValidURL)', () => {
  test('Identifies valid URLs', () => {
    batch(
      buildCaseArray(
        [
          'http://lorempixel.com/640/480/business',
          'http://jakob.info',
          'http://www.google.com',
          'http://lorempixel.com/640/480/technics',
          'https://s3.amazonaws.com/uifaces/faces/twitter/besbujupi/128.jpg',
          'https://localhost/home',
          'http://this.will.cause.problems.com/Foo.aspx?file=00e9b81e-9cce-433a-b51c-f33ac68c54ab&options=7-0,8-1,9-1,10-0,11-0,12-0,13-0,14-0,1-0,2-0,3-0,4-1,5-0,6-0,15-0,17-0',
        ],
        true,
      ),
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
          ' what __ !_@+# ',
        ],
        false,
      ),
    )
  })
})
