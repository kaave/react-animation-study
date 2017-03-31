const
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  UglifyJSPlugin = require('uglify-js-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

const base = require('./base');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'production'"
  }),
  new webpack.LoaderOptionsPlugin({ debug: false }),
  new ExtractTextPlugin('app.css'),
  new UglifyJSPlugin(),
  new CopyWebpackPlugin([{
    from: './client/index.html',
    to: './'
  }], { copyUnmodified: true })
];
const devtool = false;

module.exports = Object.assign({}, base, {
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
                modules: true
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  }
});


