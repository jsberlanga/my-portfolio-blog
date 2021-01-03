import { connectToDatabase } from '../mongodb';
import { Middleware } from 'next-connect';

const database: Middleware<any, any> = async (req, res, next) => {
  const { db } = await connectToDatabase();
  req.db = db;

  next();
};

export default database;
