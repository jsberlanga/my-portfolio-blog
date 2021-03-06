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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['images.ctfassets.net'],
    loader: 'default',
  },
  async redirects() {
    return [
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/jsberlanga/',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/jsberlanga',
        permanent: true,
      },
    ];
  },
});
