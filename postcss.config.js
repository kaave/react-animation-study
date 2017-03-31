module.exports = process.env.NODE_ENV === 'production' ?
  require('./tools/postcss/production') :
  require('./tools/postcss/development');

