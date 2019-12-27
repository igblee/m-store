const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const fs = require('fs')
fs.copyFileSync(path.resolve(__dirname, '..', 'src/types', 'type.d.ts'), path.resolve(__dirname, '..', 'dist', 'store-umd.d.ts'))
fs.copyFileSync(path.resolve(__dirname, '..', 'src/types', 'type.d.ts'), path.resolve(__dirname, '..', 'dist', 'store-amd.d.ts'))
fs.copyFileSync(path.resolve(__dirname, '..', 'src/types', 'type.d.ts'), path.resolve(__dirname, '..', 'dist', 'store-esm.d.ts'))
fs.copyFileSync(path.resolve(__dirname, '..', 'src/types', 'type.d.ts'), path.resolve(__dirname, '..', 'dist', 'store-commonjs.d.ts'))
fs.copyFileSync(path.resolve(__dirname, '..', 'src/types', 'type.d.ts'), path.resolve(__dirname, '..', 'dist', 'store-commonjs2.d.ts'))
module.exports = [
  merge(base, {
    output: {
      filename: './store-amd.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'amd',
      globalObject: 'this'

    },
    target: 'web',
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  }),
  merge(base, {
    output: {
      filename: './store-umd.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    target: 'node',
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  }),
  merge(base, {
    output: {
      filename: './store-commonjs.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'commonjs',
      globalObject: 'this'
    },
    target: 'web',
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  }),
  merge(base, {
    output: {
      filename: './store-commonjs2.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'commonjs2',
      globalObject: 'this'
    },
    target: 'web',
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  }),
  merge(base, {
    output: {
      filename: './store-esm.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'commonjs-module',
      globalObject: 'this'
    },
    target: 'web',
    entry: 'src/index.ts',
    mode: 'production',
    devtool: 'cheap-module-source-map'
  })
]
