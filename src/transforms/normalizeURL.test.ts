import partial from '../function/partial'
import batchTest from '../tests/batchTest'
import buildCaseArray from '../tests/buildCaseArray'
import normalizeURL from './normalizeURL'

const batch = partial(batchTest, normalizeURL)

describe('Normalize URL (normalizeURL)', () => {
  test('Removes duplicate slashes in a url path', () => {
    batch([
      [['https://www.google.com/', '/images'], 'https://www.google.com/images'],
      [
        ['https://www.some.site/', '/a/', '/slashy/', '/path/'],
        'https://www.some.site/a/slashy/path/',
      ],
      [
        ['https://www.stupid.slashes/////', '/foo/bar////', '/////baz/////'],
        'https://www.stupid.slashes/foo/bar/baz/',
      ],
      [['https://www.google.com/', '/images'], 'https://www.google.com/images'],
    ])
  })

  describe('Ensures the correct number of slashes in the protocol if provided', () => {
    test('3 slashes for the file protocol', () => {
      batch(
        buildCaseArray(
          [
            'file:/server/shared-drive',
            'file://server/shared-drive',
            'file:///server/shared-drive',
            'file:////server/shared-drive',
            ['file:', 'server/shared-drive'],
          ],
          'file:///server/shared-drive',
        ),
      )
    })

    test('2 slashes for all other protocols', () => {
      batch([
        ['https:/fake.com', 'https://fake.com'],
        ['http://fake.com', 'http://fake.com'],
        ['ftp:///test.co/', 'ftp://test.co/'],
        ['ws:////server.io/socket-io', 'ws://server.io/socket-io'],
      ])
    })
  })

  test('Throws a TypeError if an argument is not a string', () => {
    batch(
      buildCaseArray(
        [
          ['http://supernet.dev/', '/users/', 1234],
          [
            'file://server/',
            () => {
              /* something very nefarious */
            },
          ],
          ['ssl://192.168.1.20/', { path: '/remote-admin' }],
        ],
        TypeError,
      ),
      { verb: 'toThrow' },
    )
  })

  test('Ignores empty string arguments', () => {
    batch([
      [['https:/fake.com', ''], 'https://fake.com'],
      [['http://fake.com', 'users', ''], 'http://fake.com/users'],
      [['', 'ftp://test.co/'], 'ftp://test.co/'],
      [['ws:////server.io', '', 'socket-io'], 'ws://server.io/socket-io'],
    ])
  })

  test('Removes a trailing slash before parameters', () => {
    batch([
      ['http://some.api/users/?userID=5', 'http://some.api/users?userID=5'],
      ['api/users/?userID=5&filter=foo', 'api/users?userID=5&filter=foo'],
      [['http://supernet.dev', '/?apiKey=1234'], 'http://supernet.dev?apiKey=1234'],
    ])
  })

  test(`Replaces '?' in parameters with '&'`, () => {
    batch([
      ['http://some.api/users?userID=5?filter=foo', 'http://some.api/users?userID=5&filter=foo'],
      [
        ['http://supernet.dev', '?apiKey=1234', '?filter=foo'],
        'http://supernet.dev?apiKey=1234&filter=foo',
      ],
    ])
  })
})
