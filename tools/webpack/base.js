const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    entry: {
      app: ['./source/scripts/app.jsx']
    },
    output: {
      path: path.join(__dirname, '../../build'),
      filename: '[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.jsx', '.js']
    }
  },
  views: [
    'index',
    'views/foo',
    'views/bar'
  ]
};

