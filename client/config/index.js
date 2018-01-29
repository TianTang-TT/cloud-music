'use strict'

const path = require('path')

module.exports = {
  dev: {
    // paths
    assetsSubDir: 'static',

    // source map
    devtool: 'cheap-module-eval-source-map',
  },
  build: {
    // htmlwebpackplugin template
    index: path.resolve(__dirname, '../dist/index.html'),

    // paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDir: 'static',

    // source map
    devtool: '#source-map',
    productionSourceMap: true
  }
}