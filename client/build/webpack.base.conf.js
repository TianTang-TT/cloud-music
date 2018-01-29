const path = require('path')
const config = require('../config')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/index.js' //设置context之后路径从context开始计算
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  }
}