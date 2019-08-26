/**
 * Normalize the ZPL code
 *
 */

const normalizeZPL = zplArray => {
  return zplArray.join('\n').replace(/\'/g, "\"")
}

module.exports = normalizeZPL