const path = require('path')
const config = require('../config')

exports.assetsPath = function(_path) {
  const assetsSubDir = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDir
    : config.dev.assetsSubDir

  return path.posix.join(assetsSubDir, _path)
}