const eventBook = require('../models/booking');

async function eventBooking(req, res) {
  try {
    const data = await eventBook.eventBooking();
    res.status(200).send({ succes: true, data });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('internal server error') });
  }
}

module.exports = { eventBooking };
