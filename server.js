const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack/base.js');

config.entry.push(
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server'
);

config.plugins.push(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  contentBase: 'client/',
  historyApiFallback: true
}).listen(3000, 'localhost', (err, result) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});

