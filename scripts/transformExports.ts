import fs from 'fs-extra'
import globCallback from 'glob'
import path from 'path'
import { promisify } from 'util'

const glob = promisify(globCallback)

const root = process.cwd()
const src = path.join(root, 'src')
const tmp = path.join(root, '.temp/src')

const pattern = /export (?:default )?function (\w*)/g

async function run() {
  // Copy all src files to a dir in .temp
  await fs.copy(src, tmp, {
    filter: path => {
      return !path.includes('.test.ts')
    },
  })

  // Get a list of ts files that aren't the index files
  const files = await glob('.temp/src/!(internal)/**/!(index|*.test).ts')

  // Update each file
  for (let i = 0; i < files.length; i++) {
    const filePath = path.join(root, files[i])
    const script = await fs.readFile(filePath, 'utf8')

    // Find the name of the default export
    const result = pattern.exec(script)

    // If a name was found then we will inject some exports at the end of the script
    if (result && result.length) {
      const func = result[1]
      await fs.writeFile(
        filePath,
        [
          script,
          `module.exports = ${func}`,
          `module.exports.${func} = ${func}`,
          `module.exports.default = ${func}`,
        ].join('\n'),
      )
    }
  }
}

run()
