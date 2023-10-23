/* eslint-disable no-shadow */
const mysql = require('../database/db');

async function allEvent() {
  try {
    const con = await mysql();
    const sql = 'SELECT id, name, description, type, price FROM package_categories';
    const result = await con.query(sql);
    console.log('Data retrieved successfully.', result[0]);
    con.end();
    return result[0];
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

async function eventSelected(eventsSelected) {
  try {
    const con = await mysql();
    const sql = 'SELECT * FROM package_categories where name=?';
    const value = await con.query(sql, [eventsSelected]);
    console.log('Data retrieved successfully.', value[0]);
    con.end();
    return value[0];
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = {
  allEvent, eventSelected,
};
