const remarkSlug = require('remark-slug');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@juliosoto/components',
  '@juliosoto/lib',
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
    REDIS_URL: process.env.REDIS_URL,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
});
