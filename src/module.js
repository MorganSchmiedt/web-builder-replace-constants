'use strict'
/* eslint-env node */

const MODULE_TAG = 'const'

module.exports = async(fileMap, opt, lib) => {
  const constants = opt.constants
  const {
    getTagList,
    getTag,
    log,
  } = lib

  for (const [path, content] of fileMap.entries()) {
    const tags = getTagList(MODULE_TAG, content)

    if (tags.length > 0) {
      let data = content

      for (const tag of tags) {
        if (constants[tag] === undefined) {
          throw `Constant not found: ${tag}`
        }

        log(`Found and replace ${tag} in ${path}`)

        const tagName = getTag(MODULE_TAG, tag)
        const tagValue = constants[tag]

        data = data.replace(new RegExp(tagName, 'g'), tagValue)
      }

      fileMap.set(path, data)
    }
  }
}
