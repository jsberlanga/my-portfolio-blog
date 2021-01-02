const remarkSlug = require('remark-slug');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@juliosoto/components',
  '@juliosoto/utils',
]);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSlug],
  },
});

module.exports = withPlugins([withMDX, withTM], {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  env: {
    MONGODB_DB: process.env.MONGODB_DB,
    MONGODB_URI: process.env.MONGODB_URI,
    BUTTONDOWN_AUTH_TOKEN: process.env.BUTTONDOWN_AUTH_TOKEN,
  },
  images: {
    deviceSizes: [360, 768, 1200],
    domains: ['images.ctfassets.net'],
  },
});
