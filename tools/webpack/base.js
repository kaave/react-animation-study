const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./client/js/app.jsx'],
  output: {
    path: path.join(__dirname, '../../build/client'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};

