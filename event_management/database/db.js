/* eslint-disable no-useless-catch */
const mysql = require('mysql2/promise');

async function connectiondb() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Ammu123@',
      database: 'archana',
    });
    return connection;
  } catch (error) {
    throw error;
  }
}

module.exports = connectiondb;
