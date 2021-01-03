import { Middleware } from 'next-connect';

const user: Middleware<any, any> = (req, _res, next) => {
  const ipAddress =
    req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  req.user = { ipAddress };

  next();
};

export default user;
