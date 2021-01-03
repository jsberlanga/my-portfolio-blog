/* eslint-disable @typescript-eslint/no-namespace */
import { MongoClient, Db } from 'mongodb';

declare global {
  namespace NodeJS {
    interface Global {
      mongo: any;
    }
  }
}

const {
  MONGODB_URI = 'Invalid MONGODB_URI environment variable',
  MONGODB_DB = 'Invalid MONGODB_DB environment variable',
} = process.env;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<{ db: Db }> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB),
      };
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
