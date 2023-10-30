/* eslint-disable no-useless-catch */
const mysql = require('../database/db');

async function feedbackDetails() {
  try {
    const con = await mysql();
    const sql = 'SELECT customer_id, booking_id, title, description FROM feedback';
    const result = await con.query(sql);
    console.log('Data retrieved successfully.', result[0]);
    con.end();
    return result[0];
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

async function feedbackWrite(data) {
  try {
    const con = await mysql();

    const bookedName = data.event_name;
    const bookSql = 'select id from booking where name=?';
    const bookedid = await con.query(bookSql, bookedName);

    const customerName = data.customer_name;
    const customerSql = 'select id from customer where first_name=?';
    const customerid = await con.query(customerSql, customerName);

    const sql = `INSERT INTO feedback (customer_id, booking_id, title, description) VALUES ('${customerid[0][0].id}', '${bookedid[0][0].id}', '${data.title}', '${data.description}')`;
    await con.query(sql);
    console.log('Data entered successfully.');
    con.end();
    return 'Data entered successfully.';
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = { feedbackDetails, feedbackWrite };
