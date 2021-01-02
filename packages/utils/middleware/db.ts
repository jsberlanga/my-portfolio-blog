import { connectToDatabase } from '../mongodb';

export default async function database(req, res, next) {
  const { db } = await connectToDatabase();
  req.db = db;

  next();
}
