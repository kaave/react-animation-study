const
  webpack = require('webpack'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

const base = require('./base');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'development'"
  }),
  new webpack.LoaderOptionsPlugin({ debug: true }),
  new webpack.HotModuleReplacementPlugin(),
  new CopyWebpackPlugin([{
    from: './src/index.html',
    to: './index.html'
  }], { copyUnmodified: true })
];
const devtool = 'cheap-module-eval-source-map';

module.exports = Object.assign({}, base, {
  cache: true,
  entry: base.entry.concat([
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ]),
  plugins,
  devtool,
  devServer: {
    // contentBase: './client/',
    publicPath: base.output.publicPath,
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

