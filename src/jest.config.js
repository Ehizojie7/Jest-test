module.exports = {
  // The root of your source code, typically the `src` directory
  roots: ['<rootDir>/src'],

  // A list of file extensions that Jest will look for
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)'
  ],

  // Transform files with Babel
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'mjs'],

  setupFilesAfterEnv: ['@babel/register'],

  // An array of regexp pattern strings that are matched against all source file paths before transformation.
  transformIgnorePatterns: [
    '/node_modules/(?!(@babel/runtime|react-native|react-navigation-tabs|react-native-splash-screen)/)',
  ],

  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },

  "globals": {
    "process": {
      "env": {
        "NODE_ENV": "test"
      }
    }
  },

  // Ignore these directories when looking for files to run tests on
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Collect coverage information from specified directories
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/App.js',
    '!src/serviceWorker.js',
    '!src/setupTests.js',
  ],

  // The coverage report directory
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'lcov', 'text', 'clover'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
