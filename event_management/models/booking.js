/* eslint-disable no-useless-catch */
const mysql = require('../database/db');

async function eventDetails() {
  try {
    const con = await mysql();
    const sql1 = 'SELECT id, name, description, quantity, price FROM decor_item';
    const result1 = await con.query(sql1);
    const sql2 = 'SELECT id, name, description, price FROM menu_item';
    const result2 = await con.query(sql2);
    const result = { decor_items: result1[0], food_items: result2[0] };
    console.log('Data retrieved successfully.', result);
    con.end();
    return result;
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

async function eventBooking(event) {
  try {
    const con = await mysql();
    const sql = 'INSERT INTO booking (id, name, package_id, customer_id, venu_id, total_price, date_event, status ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [event.id, event.name, event.package_id,
      event.cutomer_id, event.venu_id, event.total_price, event.date_event, event.status_event];
    const result = await con.query(sql, values);
    console.log('Data inserted successfully.');
    con.end();
    return result;
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = { eventDetails, eventBooking };
