// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  'plugins': {
    // to edit target browsers: use 'browserlist' field in package.json
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions']
    }
  }
}
