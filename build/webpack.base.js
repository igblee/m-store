const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      {
        test: /\.[(tsx?$)|(jsx?$)]/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: path.join(__dirname, '..', 'tslint.json'),
              typeCheck: true,
              failOnHint: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: path.join(__dirname, '..', 'tsconfig.json'), extensions: ['.ts', '.tsx'] })]
  }
}
