const jwt = require('jsonwebtoken');
const eventModel = require('../models/decor');

const secretKey = 'Archana';
function verifying(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader === undefined) {
    res.send('no token provided');
  }
  const token = authHeader.split(' ')[1];
  // eslint-disable-next-line no-unused-vars
  jwt.verify(token, secretKey, (err) => {
    if (err) {
      res.send('authentication failed', err.message);
    } else {
      next();
    }
  });
}

function allDecor(req, res) {
  eventModel.allDecor(req, (loginErr, user) => {
    if (loginErr) {
      console.log('Database error:', loginErr);
    } else {
      console.log('controller', user);
      res.send({ user });
    }
  });
}

module.exports = {
  allDecor, verifying,
};
