const path = require('path');
const webpack = require('webpack');

const DEBUG = !process.argv.includes('--release');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': `"${process.env.NODE_ENV || (DEBUG ? 'development' : 'production')}"`
  }),
  new webpack.LoaderOptionsPlugin({ debug: true })
];

module.exports = {
  cache: DEBUG,
  entry: './src/js/app.jsx',
  output: {
    path: path.join(__dirname, '../', 'client', 'assets'),
    filename: 'app.js',
    publicPath: '/assets/'
  },
  plugins,
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

