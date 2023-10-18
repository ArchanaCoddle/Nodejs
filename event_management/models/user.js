const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ammu123@',
  database: 'archana',
});

function signup(user, callback) {
  const sql = 'INSERT INTO customer (id, first_name, last_name, phone, email, address, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [user.id, user.firstname, user.lastname,
    user.phone, user.email, user.address, user.username, user.password];

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
}

function login(username, password, callback) {
  const sql = 'SELECT username, password FROM customer WHERE username = ? AND password = ?';
  const values = [username, password];

  con.query(sql, values, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}

module.exports = { signup, login };
