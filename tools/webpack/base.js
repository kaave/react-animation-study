const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    entry: ['./scripts/app.jsx'],
    output: {
      path: path.join(__dirname, '../../build'),
      filename: 'app.js',
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

