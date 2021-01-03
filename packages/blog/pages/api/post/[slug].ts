import nc from 'next-connect';
import middleware from '@juliosoto/lib/middleware';
import { NextApiResponse } from 'next';
import { TRequest } from '../../../types';

const handler = nc<TRequest, NextApiResponse>({});

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
