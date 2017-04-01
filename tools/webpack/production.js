const
  path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  UglifyJSPlugin = require('uglify-js-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./base');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'production'"
  }),
  new webpack.LoaderOptionsPlugin({ debug: false }),
  new ExtractTextPlugin('app.css'),
  new UglifyJSPlugin(),
  ...config.views.map(filename => new HtmlWebpackPlugin({
    title: 'Sample webpack project',
    template: `./client/${filename}.ejs`,
    filename: `${filename}.html`
  }))
];
const devtool = false;

module.exports = Object.assign({}, config.webpack, {
  cache: false,
  plugins,
  devtool,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[name]__[local]--[hash:base64:8]',
                modules: true,
                minimize: true
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.ejs$/,
        use: {
          loader: 'ejs-compiled-loader',
          options: {
            htmlmin: true
          }
        }
      }
    ]
  }
});


