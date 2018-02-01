const path = require('path')
const config = require('../config')
const util = require('./util')

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
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: util.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: util.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: util.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}