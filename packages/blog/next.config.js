const withTM = require('next-transpile-modules')([
  '@juliosoto/components',
  '@juliosoto/utils',
]);

module.exports = withTM({
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    BUTTONDOWN_AUTH_TOKEN: process.env.BUTTONDOWN_AUTH_TOKEN,
  },
  images: {
    deviceSizes: [360, 768, 1200],
    domains: ['images.ctfassets.net'],
  },
});
