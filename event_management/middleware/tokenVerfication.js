const jwt = require('jsonwebtoken');

const secretKey = 'Archana';

function verifying(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader === undefined) {
      res.send('no token provided');
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secretKey, (err) => {
      if (err) {
        res.send('authentication failed', err.message);
      } else {
        next();
      }
    });
  } catch (error) {
    console.log('verifing error', error);
    res.status(500).send('internal server error');
  }
}

module.exports = verifying;
