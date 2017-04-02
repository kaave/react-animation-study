const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    entry: {
      app: [
        './source/styles/app.css',
        './source/scripts/app.js'
      ]
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

