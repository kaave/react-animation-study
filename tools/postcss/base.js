const
  postCSSImport = require('postcss-import');
  postCSSCssNext = require('postcss-cssnext');

module.exports = {
  plugins: [
    postCSSImport(),
    postCSSCssNext({
      browsers: [
        'last 2 versions',
        'ie >= 9',
        'ios >= 8'
      ]
    }),
  ]
};

