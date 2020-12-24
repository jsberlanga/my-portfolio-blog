import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'invalid_space_id',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'invalid_token',
});
