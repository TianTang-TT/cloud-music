const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const prodWebpackConfig = {
  module: {
    rules: []
  }
}

module.exports = merge(baseWebpackConfig, prodWebpackConfig)