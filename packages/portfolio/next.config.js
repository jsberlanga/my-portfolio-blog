// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  '@juliosoto/components',
  '@juliosoto/lib',
]);

module.exports = withTM({
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  images: {
    deviceSizes: [360, 768, 1200],
    domains: ['images.ctfassets.net'],
  },
});
