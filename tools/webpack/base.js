const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/js/app.jsx'],
  output: {
    path: path.join(__dirname, '../../build/client'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};

