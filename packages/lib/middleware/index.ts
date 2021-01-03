import nc from 'next-connect';
import db from './db';
import user from './user';

const middleware = nc();

middleware.use(db).use(user);
export default middleware;
