const webpack = require('webpack');

const base = require('./base');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'development'"
  }),
  new webpack.LoaderOptionsPlugin({ debug: true })
];
const devtool = 'cheap-module-eval-source-map';

module.exports = Object.assign({}, base, {
  cache: true,
  plugins,
  devtool,
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
              localIdentName: '[name]-[local]-[hash:base64:5]',
              modules: true
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
});

