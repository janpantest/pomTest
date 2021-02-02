const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    googleHomePage: './pages/googleHome.js',
    googleResultsPage: './pages/googleResults.js',
    valmezHomePage: './pages/valmezHome.js',
    valmezAboutPage: './pages/valmezAbout.js',
    seznamHomePage: './pages/seznamHome.js',
    seznamResultsPage: './pages/seznamResults.js',
    googleInputPage: './pages/googleInput.js',
    introPage: './pages/intro.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'zkouska',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  rerun: {
    // how many times all tests should pass
    minSuccess: 2,

    // how many times to try to rerun all tests
    maxReruns: 5,
  }
}