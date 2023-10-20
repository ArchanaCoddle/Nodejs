const jwt = require('../middleware/tokenVerfication');
const eventModel = require('../models/event');

async function allEvent(req, res) {
  try {
    jwt(req, res, async () => {
      const user = await eventModel.allEvent();
      console.log('Controller side', user);
      res.send({ user });
    });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function eventSelected(req, res) {
  const eventClicked = req.body.eventSelected;
  try {
    jwt(req, res, async () => {
      const data = await eventModel.eventSelected(eventClicked);
      res.send({ data });
    });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  allEvent, eventSelected,
};
