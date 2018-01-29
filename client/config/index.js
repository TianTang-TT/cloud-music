'use strict'

const path = require('path')

module.exports = {
  dev: {
    // paths
    assetsSubDir: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // 服务配置
    host: '0.0.0.0',
    port: 9000,
    autoOpenBrowser: false,
    poll: false,

    // 是否全屏显示报错信息
    errorOverlay: true,

    // source map
    devtool: 'cheap-module-eval-source-map',
  },
  build: {
    // htmlwebpackplugin template
    index: path.resolve(__dirname, '../dist/index.html'),

    // paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDir: 'static',
    assetsPublicPath: '/',

    // source map
    devtool: '#source-map',
    productionSourceMap: true
  }
}