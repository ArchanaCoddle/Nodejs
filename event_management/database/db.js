const mysql = require('mysql2/promise');

const cont = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ammu123@',
  database: 'archana',
});
if (cont) {
  console.log('db con complete');
} else {
  console.log('db not complete');
}

module.exports = cont;
