/* eslint-disable no-useless-catch */
const mysql = require('../database/db');

async function allDecor() {
  try {
    const con = await mysql();
    const sql = 'SELECT id, name, description, quantity, price FROM decor_item';
    const result = await con.query(sql);
    console.log('Data retrieved successfully.', result[0]);
    con.end();
    return result[0];
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = { allDecor };
