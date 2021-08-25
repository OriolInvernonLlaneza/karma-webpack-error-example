const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default
const path = require('path');

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  singleSpaWebpackConfig.externals = [
    /^@example\/*/,
  ];

  // singleSpaWebpackConfig.condig.resolve.extensions = ['', '.ts', '.js']

  singleSpaWebpackConfig.module.rules = [
    { test: /\.ts$/, use: 'ts-loader' },
    { test: /\.js$/, use: 'babel-loader' }
  ];

  return singleSpaWebpackConfig
}