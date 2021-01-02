import nc from 'next-connect';
import middleware from '@juliosoto/utils/middleware';
import { NextApiResponse } from 'next';

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
    votes: user.votes,
  };

  res.send({ user: publicUserData });
});

export default handler;
