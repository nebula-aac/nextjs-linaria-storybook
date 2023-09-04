const withLinaria = require('next-with-linaria');

const webpackConfig = withLinaria({
  // settings from next.config.js
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = webpackConfig;
