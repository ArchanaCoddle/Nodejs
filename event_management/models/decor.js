/* eslint-disable no-useless-catch */
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

async function allDecor() {
  const sql = 'SELECT id, name, description, quantity, price FROM decor_item';
  console.log('3');
  try {
    console.log('4');
    const result = await (await cont).query(sql);
    console.log('5');
    console.log('Data retrieved successfully.', result[0]);
    console.log('6');
    return result[0];
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = {
  allDecor,
};
