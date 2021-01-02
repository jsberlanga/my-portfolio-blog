import nc from 'next-connect';
import middleware from '@juliosoto/utils/middleware';
import { NextApiResponse } from 'next';
import { Request } from '../../../types';

const handler = nc<Request, NextApiResponse>({});

handler.use(middleware);

handler.get(async (req, res) => {
  const db = req.db;
  const {
    query: { slug },
  } = req;
  const post = await db.collection('posts').findOne({ slug });

  return res.json({ post });
});

export default handler;
