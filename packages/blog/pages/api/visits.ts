import { NextApiResponse } from 'next';
import nc from 'next-connect';
import middleware from '@juliosoto/lib/middleware';
import { TRequest } from '../../types';
import { redisClient } from '@juliosoto/lib/redis';

const handler = nc<TRequest, NextApiResponse>({});

handler.use(middleware);

handler.get(async (req, res) => {
  const { slug } = req.query;

  const visits = await redisClient.hget('visits', slug.toString());

  return res.json({ post: { slug, visits } });
});

handler.put(async (req, res) => {
  const db = req.db;
  const { slug } = req.body;

  const result = await db.collection('posts').findOneAndUpdate(
    { slug },
    {
      $inc: {
        visits: 1,
      },
    },
  );

  return res.json({ result: { ok: !!result.ok } });
});

export default handler;
