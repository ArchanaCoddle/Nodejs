/* eslint-disable object-property-newline */
/* eslint-disable camelcase */
const ticketModel = require('../models/tickets');

async function ticketBooking(req, res) {
  try {
    const {
      event_name, seat_type, price, count, customer_name, payment_name,
    } = req.body;
    const ticketdetails = {
      event_name, seat_type, price, count, customer_name, payment_name,
    };

    const data = await ticketModel.ticketBooking(ticketdetails);
    res.status(200).send({ succes: true, data });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('internal server error') });
  }
}

module.exports = {
  ticketBooking,
};
