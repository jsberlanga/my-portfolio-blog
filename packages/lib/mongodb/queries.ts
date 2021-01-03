import { connectToDatabase } from './connect';

export const getUsers = async () => {
  const { db } = await connectToDatabase();
  const users = await db.collection('users').find({}).limit(20).toArray();

  return users;
};

interface GetPostBySlugParams {
  slug: string;
}

export const getPostBySlug = async ({ slug }: GetPostBySlugParams) => {
  const { db } = await connectToDatabase();

  const post = await db.collection('posts').find({ slug }).toArray();

  return post;
};
