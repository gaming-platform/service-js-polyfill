exports.config = {
  tests: './tests/acceptance/*_test.js',
  output: './tests/_output',
  helpers: {
    WebDriver: {
      url: 'http://application',
      host: 'selenium',
      browser: 'chrome'
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'service-js-polyfill'
};
