const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    entry: ['./client/scripts/app.jsx'],
    output: {
      path: path.join(__dirname, '../../build/client'),
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

