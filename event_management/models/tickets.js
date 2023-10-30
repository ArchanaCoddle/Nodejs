/* eslint-disable no-useless-catch */
const mysql = require('../database/db');

async function ticketBooking(ticketdetails) {
  try {
    const con = await mysql();

    const bookedName = ticketdetails.event_name;
    const bookSql = 'select id from booking where name=?';
    const bookedid = await con.query(bookSql, bookedName);

    const customerName = ticketdetails.customer_name;
    const customerSql = 'select id from customer where first_name=?';
    const customerid = await con.query(customerSql, customerName);

    const paymentName = ticketdetails.payment_name;
    const paymentSql = 'select id from payment where user_name=?';
    const paymentid = await con.query(paymentSql, paymentName);

    const sql = `INSERT INTO tickets ( booking_id, type, price, count, customer_id, payment_id) VALUES ('${bookedid[0][0].id}', '${ticketdetails.seat_type}', '${ticketdetails.price}', '${ticketdetails.count}', '${customerid[0][0].id}', '${paymentid[0][0].id}')`;
    const result = await con.query(sql);
    console.log('Data retrieved successfully.', result[0]);
    con.end();
    return 'successfully booked the tickets';
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = { ticketBooking };
