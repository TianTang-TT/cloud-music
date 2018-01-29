const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

const devWebpackConfig = {
  devtool: config.dev.devtool,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },

    // 注意，开启hot:true之后必须在plugins中配置webpack.HotModuleReplacementPlugin
    hot: true,
    
    contentBase: false,
    compress: true,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: false,

    // webpack使用文件系统(file system)获取文件改变通知，某些情况下不会正常工作
    // 比如当使用Network File System时。在这种情况下配置poll：true使用轮询检查文件更新
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    // 配置了热加载hot: true之外还需配置此插件
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}

module.exports = merge(baseWebpackConfig, devWebpackConfig)