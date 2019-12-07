const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const config = merge(base, {
  mode: 'development',
  watch: true,
  entry: path.join(__dirname, '..', 'src', 'index'),
  output: {
    libraryTarget: 'umd',
    path: path.join(__dirname, '..', 'dist'),
    filename: 'store.js'
  },
  devtool: 'cheap-module-eval-source-map'
})

module.exports = config
