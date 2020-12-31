const getUserIpAddress = (req) =>
  req.headers['x-forwarded-for'] || req.connection.remoteAddress;

export default function handler(req, res) {
  const userIpAddress = getUserIpAddress(req);

  res.send({ userIpAddress });
}
