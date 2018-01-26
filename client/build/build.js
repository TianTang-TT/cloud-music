const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')

webpack(webpackConfig, (err, stats) => {
  console.log('..........................')
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
})