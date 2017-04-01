const
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./base');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'development'"
  }),
  new webpack.LoaderOptionsPlugin({ debug: true }),
  new webpack.HotModuleReplacementPlugin(),
  ...config.views.map(filename => new HtmlWebpackPlugin({
    title: 'Sample webpack project: Debug',
    template: `${filename}.ejs`,
    filename: `${filename}.html`
  }))
];
const devtool = 'cheap-module-eval-source-map';

module.exports = Object.assign({}, config.webpack, {
  cache: true,
  entry: config.webpack.entry.concat([
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ]),
  plugins,
  devtool,
  devServer: {
    publicPath: config.webpack.output.publicPath,
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              modules: true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader'
      }
    ]
  }
});

