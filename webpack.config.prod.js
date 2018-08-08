const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'howler',
      'whatwg-fetch',
    ],
    main: './src/index.jsx',
  },

  output: {
    publicPath: '/',
    path: path.resolve('./dist'),
    filename: 'static/[name]-[chunkhash:8].js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      constants: path.resolve(__dirname, 'src/constants/'),
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                localIdentName: '[local]__[hash:base64:5]'
              }
            },
            'postcss-loader',
            {
              loader: 'stylus-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        })
      },
      {
        test: /\.(jpg|png|gif|ttf|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/[name].[ext]'
          },
        }]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'static/[name]-[chunkhash:8].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: false,
      template: './template/index.html',
    })
  ]
}