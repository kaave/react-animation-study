const cssnano = require('cssnano');

const base = require('./base');

module.exports = Object.assign({}, base, {
  plugins: base.plugins.concat([
    cssnano()
  ])
});

