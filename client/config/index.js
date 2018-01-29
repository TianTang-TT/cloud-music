'use strict'

const path = require('path')

module.exports = {
  dev: {
    // paths
    assetsSubDir: 'static'
  },
  build: {
    // paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDir: 'static'
  }
}