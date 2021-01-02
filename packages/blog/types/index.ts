import { NextApiRequest } from 'next';
import { Db } from 'mongodb';

export interface Request extends NextApiRequest {
  db: Db;
  user?: {
    ipAddress: string;
  };
}
