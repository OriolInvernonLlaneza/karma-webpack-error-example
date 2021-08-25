const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default
const path = require('path');

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  singleSpaWebpackConfig.externals = [
    /^@example\/*/,
    /^single-spa$/,
    /^rxjs$/,
    /^rxjs\/operators$/,
    /^zone\.js$/,
    /^i18next$/
  ];

  return singleSpaWebpackConfig
}