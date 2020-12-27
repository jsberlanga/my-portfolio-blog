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

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    }),
    withTM(),
  ],
  {
    env: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      BUTTONDOWN_AUTH_TOKEN: process.env.BUTTONDOWN_AUTH_TOKEN,
    },
    images: {
      deviceSizes: [360, 768, 1200],
      domains: ['images.ctfassets.net'],
    },
  },
);
