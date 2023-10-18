const jwt = require('jsonwebtoken');
const eventModel = require('../models/event');

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

function allEvent(req, res) {
  verifying(req, res, () => {
    eventModel.allEvent(req, (loginErr, user) => {
      if (loginErr) {
        console.log('Database error:', loginErr);
      } else {
        console.log('controller', user);
        res.send({ user });
      }
    });
  });
}
function eventSelected(req, res) {
  verifying(req, res, () => {
    const eventClicked = req.body.eventSelected;
    eventModel.eventSelected(eventClicked, (err, data) => {
      if (err) {
        console.log('Database error:', err);
      } else {
        res.send({ data });
      }
    });
  });
}

module.exports = {
  allEvent, eventSelected,
};
