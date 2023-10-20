/* eslint-disable no-shadow */
const mysql = require('../database/db');

async function allEvent() {
  try {
    const sql = 'SELECT id, name, description, type, price FROM package_categories';
    const result = await (await mysql).query(sql);
    console.log('Data retrieved successfully.', result[0]);
    return result[0];
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

async function eventSelected(eventsSelected) {
  try {
    const sql = 'SELECT * FROM package_categories where name=?';
    const value = await (await mysql).query(sql, [eventsSelected]);
    console.log('Data retrieved successfully.', value[0]);
    return value[0];
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = {
  allEvent, eventSelected,
};
