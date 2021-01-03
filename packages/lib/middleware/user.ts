export default async function user(req, _res, next) {
  const ipAddress =
    req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  req.user = { ipAddress };

  next();
}
