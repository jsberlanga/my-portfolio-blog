import { NextApiRequest } from 'next';
import { Db } from 'mongodb';

export interface TRequest extends NextApiRequest {
  db: Db;
  user?: {
    ipAddress: string;
  };
}
