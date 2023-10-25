const eventModel = require('../models/event');

async function allEvent(req, res) {
  try {
    const user = await eventModel.allEvent();
    console.log('Controller side', user);
    res.status(200).send({ succes: true, user });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('Internal Server Error') });
  }
}

async function eventSelected(req, res) {
  const eventClicked = req.body.eventSelected;
  try {
    const data = await eventModel.eventSelected(eventClicked);
    res.status(200).send({ succes: true, data });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('Internal Server Error') });
  }
}

module.exports = {
  allEvent, eventSelected,
};
