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
        pathRewrite: { "^/api": "" }
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
        use: [
          'style-loader',
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
  }
}