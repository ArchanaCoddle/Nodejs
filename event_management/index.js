/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const sample = require('./sample');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ammu123@',
  database: 'event_management',
});
con.connect((err) => {
  if (err) {
    console.log(`database error${err.message}`);
  } else {
    console.log('connected');
  }
});

const secretKey = 'Archana';

const server = express();
server.use(bodyParser.json());
const users = [];

function verifying(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader === undefined) {
    res.send('no token provided');
  }
  const token = authHeader.split(' ')[1];
  // eslint-disable-next-line no-unused-vars
  jwt.verify(token, secretKey, (err) => {
    if (err) {
      res.send('authentication failed', err.message);
    } else {
      next();
    }
  });
}

server.post('/', verifying, (_req, res) => {
  res.send('Welcome');
});
server.post('/signup', (req, res) => {
  sample.sample();
  const {
    id, firstname, lastname, phone, email, address, username, password,
  } = req.body;
  const newUser = {
    id, firstname, lastname, phone, email, address, username, password,
  };
  con.query(`INSERT INTO customer (id, first_name, last_name, phone, email, address, username, password) VALUES ('${id}', '${firstname}', '${lastname}', '${phone}', '${email}', '${address}', '${username}', '${password}')`);
  console.log(newUser);
  users.push(newUser);
  res.send('Signup successful');
  console.log(users);
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  con.query('SELECT username, password FROM customer', (loginErr, loginResults) => {
    if (loginErr) {
      console.log('Database error:', loginErr);
    } else {
      const user = loginResults.find((u) => u.username === username && u.password === password);
      if (user) {
        jwt.sign({ user }, secretKey, { expiresIn: '86400s' }, (_jwtErr, token) => {
          res.send({ auth: true, token });
        });
      } else {
        res.send('Invalid username/password');
      }
    }
  });
});

server.get('/events', verifying, (req, res) => {
  con.query('SELECT * FROM package_categories', (err, querys) => {
    if (err) {
      console.log('Database error:', err);
    } else {
      res.send({ querys });
    }
  });
});

server.post('/events/particular', verifying, (req, res) => {
  const eventSelected = req.body;
  console.log(eventSelected);
  con.query(`SELECT * FROM package_categories where name='${eventSelected.eventSelected}'`, (loginErr, loginResults) => {
    if (loginErr) {
      console.log('Database error:', loginErr);
    } else {
      console.log(loginResults);
      res.send(loginResults);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
