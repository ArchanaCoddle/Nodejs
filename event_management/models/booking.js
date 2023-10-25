/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-catch */
const mysql = require('../database/db');

async function eventDetails() {
  try {
    const con = await mysql();
    const sql1 = 'SELECT id, name, description, quantity, price FROM decor_item';
    const result1 = await con.query(sql1);
    const sql2 = 'SELECT id, name, description, price FROM menu_item';
    const result2 = await con.query(sql2);
    const result = { decor_items: result1[0], food_items: result2[0] };
    console.log('Data retrieved successfully.', result);
    con.end();
    return result;
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

async function eventBooking(event) {
  try {
    const con = await mysql();
    const sql = 'INSERT INTO booking (id, name, package_id, customer_id, venu_id, total_price, date_event, status ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [event.id, event.name, event.package_id,
      event.cutomer_id, event.venu_id, event.total_price, event.date_event, event.status_event];
    const result = await con.query(sql, values);

    const food = event.food_item;
    const quantity = event.food_quantity;
    const foodSql = 'SELECT id FROM menu_item WHERE name=?';
    const fooditem = await con.query(foodSql, food);
    const booked = `insert into booked_food (id, booking_id, menu_item_id, quantity) values(8, '${event.id}', '${fooditem[0][0].id}', '${quantity}')`;
    const bookedfooditem = await con.query(booked);

    const decorator = event.decor_item;
    const decor_quantity = event.decor_quantity;
    const decorSql = 'select id from decor_item where name=?';
    const decoritems = await con.query(decorSql, decorator);
    const decor = `insert into booked_decor (id, decor_item_id, booking_id, quantity) values(8, '${decoritems[0][0].id}', '${event.id}', '${decor_quantity}')`;
    const bookeddecoritem = await con.query(decor);

    console.log(bookedfooditem, bookeddecoritem);
    console.log('Data inserted successfully.');
    con.end();
    return result;
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

module.exports = { eventDetails, eventBooking };
