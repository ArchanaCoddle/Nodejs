/* eslint-disable no-else-return */
/* eslint-disable no-useless-catch */
const mysql = require('../database/db');

async function signup(user) {
  try {
    const con = await mysql();
    const sql = 'INSERT INTO customer (id, first_name, last_name, phone, email, address, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [user.id, user.firstname, user.lastname,
      user.phone, user.email, user.address, user.username, user.password];
    const [result] = await con.query(sql, values);
    con.end();
    return result;
  } catch (error) {
    throw error;
  }
}

async function login(username, password) {
  try {
    const con = await mysql();
    const sql = 'SELECT username, password FROM customer WHERE username = ? AND password = ?';
    const values = [username, password];
    const [results] = await con.query(sql, values);
    con.end();
    return results;
  } catch (error) {
    throw error;
  }
}
module.exports = { signup, login };
