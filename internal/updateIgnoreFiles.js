import fs from 'fs-extra'
import curryRight from 'lodash/curryRight'

// Pattern to match the generated section of the existing .gitignore file
const outPattern = /# out((?:.|\s)+)# endout/g

// Tagged template to generate
const output = (_, folders) => `\
# out
${folders.map(name => `/${name}`).join('\n')}
# endout`

/**
 * Inject or update the generated block of the given string
 *
 * @param {string} content The string that should contain the output block
 * @param {string} outputBlock The new content of the output block
 * @return {string} The new content string with the updated block
 */
const updateIgnoreBlock = (content, outputBlock) => {
  if (outPattern.test(content)) {
    // Existing output pattern found, replace it
    return content.replace(outPattern, outputBlock)
  } else {
    // No ignore block found, add to end
    return [content, outputBlock].join('\n')
  }
}

/**
 * Updates or adds a generated block in the .gitignore file that ignores the given folder names
 *
 * @param {string[]} foldersToIgnore Array of folders to add to the .gitignore file
 * @return {void}
 */
const updateIgnoreFiles = foldersToIgnore => {
  const update = curryRight(updateIgnoreBlock)(output`${foldersToIgnore}`)
  fs.readFile('.gitignore', 'utf8')
    .then(content => update(content))
    .then(newContent => fs.writeFile('.gitignore', newContent))
    .then(() => console.log('.gitignore file updated'))
    .catch(console.error)
}

export default updateIgnoreFiles
