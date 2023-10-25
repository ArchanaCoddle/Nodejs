/* eslint-disable no-useless-catch */
const mysql = require('../database/db');

async function eventBooking() {
  try {
    const con = await mysql();
    const sql1 = 'SELECT id, name, description, quantity, price FROM decor_item';
    const result1 = await con.query(sql1);
    const sql2 = 'SELECT id, name, description, price FROM menu_item';
    const result2 = await con.query(sql2);
    const result = [result1[0], result2[0]];
    console.log('Data retrieved successfully.', result);
    con.end();
    return result;
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = { eventBooking };
