const wbconf = require('./webpack-test.config');

module.exports = (config) => {
  config.set({
    // ... normal karma configuration
    // make sure to include webpack as a framework
    frameworks: ['jasmine', 'webpack'],

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage-istanbul-reporter',
      'karma-sourcemap-loader',
    ],

    files: [
      // all files ending in ".spec.ts"
      // !!! use watched: false as we use webpacks watch
      'node_modules/zone.js/dist/zone.js',
      { pattern: './src/**/*.spec.ts', watched: false }
    ],

    preprocessors: {
      // add webpack as preprocessor
      "**/*.ts": ['webpack', 'sourcemap']
    },

    browsers: ['Chrome'],
    reporters: ['progress'],
    port: 9876,

    webpack: {
      resolve: {
        modules: ['node_modules']
      },
      externals: [
        /^@example\/*/,
      ],
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: 'ts-loader',
          },
        ],
      },
    }
  });
}