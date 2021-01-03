import { NextApiRequest } from 'next';
import { Db } from 'mongodb';

export interface Request extends NextApiRequest {
  db: Db;
  user?: {
    ipAddress: string;
  };
}

export interface PostPreviewData {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
}
