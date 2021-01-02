import nc from 'next-connect';
import middleware from '@juliosoto/utils/middleware';
import { NextApiResponse } from 'next';
import { Request } from '../../types';

const handler = nc<Request, NextApiResponse>({});

handler.use(middleware);

handler.get(async (req, res) => {
  res.redirect('/');
});

handler.put(async (req, res) => {
  const db = req.db;
  const { slug, userId } = req.body;

  const { _id, votes } = await db.collection('posts').findOne({ slug });

  const { result } = await db
    .collection('posts')
    .updateOne({ _id }, { $set: { votes: [...votes, userId] } });

  return res.json({ result: { ok: !!result.ok } });
});

export default handler;
