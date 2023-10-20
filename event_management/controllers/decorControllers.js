const jwt = require('jsonwebtoken');
const eventModel = require('../models/decor');

const secretKey = 'Archana';
function verifying(req, res, next) {
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
}

async function allDecor(req, res) {
  try {
    console.log('1');
    const data = await eventModel.allDecor();
    console.log('2');
    res.send({ data });
  } catch (error) {
    console.log('Database error:', error);
    res.send(error);
  }
}

module.exports = {
  allDecor, verifying,
};
