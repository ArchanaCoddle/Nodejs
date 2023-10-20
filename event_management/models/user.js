/* eslint-disable no-useless-catch */
const mysql = require('mysql2/promise');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ammu123@',
  database: 'archana',
});
if (con) {
  console.log('db con complete');
} else {
  console.log('db not complete');
}

async function signup(user) {
  try {
    const sql = 'INSERT INTO customer (id, first_name, last_name, phone, email, address, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [user.id, user.firstname, user.lastname,
      user.phone, user.email, user.address, user.username, user.password];
    const [result] = await (await con).query(sql, values);
    return result;
  } catch (error) {
    throw error;
  }
}

async function login(username, password) {
  try {
    const sql = 'SELECT username, password FROM customer WHERE username = ? AND password = ?';
    const values = [username, password];
    const [results] = await (await con).query(sql, values);
    return results;
  } catch (error) {
    throw error;
  }
}
module.exports = { signup, login };
