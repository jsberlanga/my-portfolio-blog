import { NextApiResponse } from 'next';
import nc from 'next-connect';
import middleware from '@juliosoto/lib/middleware';
import { MAX_VOTES_ALLOWED } from '@juliosoto/lib/constants';
import { TRequest } from '../../types';

const handler = nc<TRequest, NextApiResponse>({});

handler.use(middleware);

handler.get(async (req, res) => {
  res.redirect('/');
});

handler.put(async (req, res) => {
  const db = req.db;
  const { slug, userId } = req.body;

  const { _id, votes } = await db.collection('posts').findOne({ slug });

  const votesFromUser = votes.filter((vote: string[]) => vote === userId);

  if (votesFromUser.length >= MAX_VOTES_ALLOWED) {
    return res.json({ result: 'Maximum votes per user reached' });
  }

  const { result } = await db
    .collection('posts')
    .updateOne({ _id }, { $set: { votes: [...votes, userId] } });

  return res.json({ result: { ok: !!result.ok } });
});

export default handler;
