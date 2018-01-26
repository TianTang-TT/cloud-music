const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = {
  module: {
    rules: []
  }
}

module.exports = merge(baseWebpackConfig, devWebpackConfig)