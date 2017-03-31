module.exports = process.env.NODE_ENV === 'production' ?
  require('./tools/webpack/production') :
  require('./tools/webpack/development');

