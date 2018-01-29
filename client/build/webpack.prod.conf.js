const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

const prodWebpackConfig = {
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  module: {
    rules: []
  },
  plugin: [
    // 每次构建之前清除dist文件夹
    new cleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),

    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
  ]
}

module.exports = merge(baseWebpackConfig, prodWebpackConfig)