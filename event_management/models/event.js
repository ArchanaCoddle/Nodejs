/* eslint-disable no-shadow */
const mysql = require('mysql2');

const cont = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ammu123@',
  database: 'archana',
});

function allEvent(some, callback) {
  const sql = 'SELECT * FROM package_categories';
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
function eventSelected(eventSelected, callback) {
  const sql = 'SELECT * FROM package_categories where name=?';
  const values = eventSelected;
  cont.query(sql, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  allEvent, eventSelected,
};
