const fs = require('fs')
const path = require('path')
const package = require(path.join(process.cwd(), 'package.json'))

const keysToCopy = [
  'author',
  'dependencies',
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
      output[key] = package[key]
      return output
    }, {}),
    null,
    2
  ),
  'utf8'
)

fs.copyFileSync(path.join(process.cwd(), 'README.md'), path.join(process.cwd(), 'dist/README.md'))
