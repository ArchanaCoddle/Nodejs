const mysql = require('mysql2');

const cont = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ammu123@',
  database: 'archana',
});

function allDecor(some, callback) {
  const sql = 'SELECT id, name, description, quantity, price FROM decor_item';
  cont.query(sql, (error, results) => {
    if (error) {
      console.error('Error inserting data:', error);
      callback(error, null);
    } else {
      console.log('Data getted successfully.', results);
      callback(null, results);
    }
  });
}

module.exports = {
  allDecor,
};
