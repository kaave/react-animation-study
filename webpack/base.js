const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/js/app.jsx'],
  output: {
    path: path.join(__dirname, '../', 'client', 'assets'),
    filename: 'app.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};

