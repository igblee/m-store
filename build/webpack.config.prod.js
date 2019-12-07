const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = [
  merge(base, {
    output: {
      filename: './store-amd.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'amd'
    },
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  }),
  merge(base, {
    output: {
      filename: './store-umd.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'umd'
    },
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  }),
  merge(base, {
    output: {
      filename: './store-commonjs.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'commonjs'
    },
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  }),
  merge(base, {
    output: {
      filename: './store-commonjs2.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'commonjs2'
    },
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  }),
  merge(base, {
    output: {
      filename: './store-esm.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'commonjs-module'
    },
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  })
]
