import nc from 'next-connect';
import middleware from '@juliosoto/lib/middleware';
import { NextApiResponse } from 'next';
import { Request } from '../../types';
import { nanoid } from 'nanoid';

const handler = nc<Request, NextApiResponse>({});

handler.use(middleware);

handler.get(async (req, res) => {
  const getUserByIpAddress = async (req) => {
    const db = req.db;
    const user = req.user;

    if (!user || !user.ipAddress) {
      return res.send({ user: null });
    }

    const userCollection = await db
      .collection('users')
      .find({ ipAddress: user.ipAddress })
      .toArray();

    if (!userCollection || !userCollection.length) {
      return null;
    }

    return userCollection;
  };

  const [user] = await getUserByIpAddress(req);

  const publicUserData = {
    _id: user._id,
  };

  res.send({ user: publicUserData });
});

handler.post(async (req, res) => {
  const db = req.db;

  const ipAddress = req.user.ipAddress;

  const user = await db.collection('users').findOne({
    ipAddress,
  });

  if (user) return;

  const _id = nanoid(5);

  const { result } = await db.collection('users').insertOne({
    _id,
    ipAddress,
  });

  res.json({ result: { ok: !!result.ok }, _id });
});

export default handler;
