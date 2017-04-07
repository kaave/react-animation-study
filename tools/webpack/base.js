const
  path = require('path'),
  glob = require('glob'),
  webpack = require('webpack');

module.exports = {
  webpack: {
    entry: {
      app: [
        './source/styles/app.scss',
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
    ...glob.sync('./source/views/*.ejs')
      .map(path => path.replace(/\.\/source\//, ''))
      .map(path => path.replace(/\.ejs$/, ''))
  ],
  loaders: [
    {
      test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream'
        }
      }
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: 'file-loader'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      }
    },
    {
      test: /\.ejs$/,
      use: 'ejs-compiled-loader'
    }
  ]
};

