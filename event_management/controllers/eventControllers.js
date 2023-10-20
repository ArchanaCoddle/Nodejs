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

async function allEvent(req, res) {
  try {
    const user = await eventModel.allEvent();
    console.log('Controller', user);
    res.send({ user });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function eventSelected(req, res) {
  const eventClicked = req.body.eventSelected;
  try {
    const data = await eventModel.eventSelected(eventClicked);
    res.send({ data });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  allEvent, eventSelected, verifying,
};
