/* eslint-disable no-useless-catch */
const mysql = require('../database/db');

async function allDecor() {
  const sql = 'SELECT id, name, description, quantity, price FROM decor_item';
  try {
    const result = await (await mysql).query(sql);
    console.log('Data retrieved successfully.', result[0]);
    return result[0];
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = { allDecor };
