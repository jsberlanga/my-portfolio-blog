import { TDbPost } from '../types';
import { connectToDatabase } from './connect';

interface GetPostBySlugParams {
  slug: string;
}

export const getPostBySlug = async ({ slug }: GetPostBySlugParams) => {
  const { db } = await connectToDatabase();

  const [post] = await db
    .collection('posts')
    .find<TDbPost>({ slug })
    .toArray();

  return post;
};
