const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('./src'),
    port: 8005,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {"^/api" : ""}
      }
    }
  },
  entry: [
    './src/index.jsx',
    'webpack-dev-server/client?http://localhost:8005'
  ],

  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader'
      }
    ]
  }
}