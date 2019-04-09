import fs from 'fs-extra'
import path from 'path'
import pick from 'lodash/pick'

// Folders used
const distDir = path.join(process.cwd(), 'dist')
const tempDir = path.join(process.cwd(), '.temp')

// Info from the main package.json file filtered to only certain keys for dist
const packageInfo = pick(require(path.join(process.cwd(), 'package.json')), [
  'author',
  'dependencies',
  'bugs',
  'description',
  'keywords',
  'license',
  'main',
  'module',
  'repository',
  'homepage',
  'name',
  'peerDependencies',
  'typings',
  'version'
])

async function copyAssets() {
  const operations = [
    // Copying a reduced version of the package.json without dev dependencies or scripts etc
    fs.writeJSON(path.join(distDir, 'package.json'), packageInfo, { spaces: 2 }),

    // Copy the generated README file
    fs.copySync(path.join(tempDir, 'readme'), path.join(distDir))
  ]

  // Wait until done
  await Promise.all(operations)

  console.log('Production assets copied to dist folder')
}

copyAssets()
