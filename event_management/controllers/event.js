const eventModel = require('../models/event');

async function allEvent(req, res) {
  try {
    const user = await eventModel.allEvent();
    console.log('Controller side', user);
    res.send({ succes: true, message: { user } });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('Internal Server Error') });
  }
}

async function eventSelected(req, res) {
  const eventClicked = req.body.eventSelected;
  try {
    const data = await eventModel.eventSelected(eventClicked);
    res.send({ succes: true, message: { data } });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('Internal Server Error') });
  }
}

module.exports = {
  allEvent, eventSelected,
};
