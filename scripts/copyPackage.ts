const fs = require('fs')
const path = require('path')
const packageInfo = require(path.join(process.cwd(), 'package.json'))

const keysToCopy: string[] = [
  'author',
  'dependencies',
  'peerDependencies',
  'description',
  'name',
  'version',
  'main',
  'module',
  'keywords',
  'license'
]

fs.writeFileSync(
  path.join(process.cwd(), 'dist/package.json'),
  JSON.stringify(
    keysToCopy.reduce((output, key) => {
      output[key] = packageInfo[key]

      return output
    }, {}),
    null,
    2
  )
)

// fs.copyFileSync(path.join(process.cwd(), 'README.md'), path.join(process.cwd(), 'dist/README.md'))
