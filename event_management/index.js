/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const sample = require('./sample');

const server = express();
server.use(bodyParser.json());
const users = [];

server.post('/signup', (req, res) => {
  sample.sample();
  const {
    firstname, lastname, username, password,
  } = req.body;
  const newUser = {
    firstname, lastname, username, password,
  };
  console.log(newUser);
  users.push(newUser);
  res.send('Signup successful');
  console.log(users);
});

server.post('/login', (req, res) => {
  const {
    username, password,
  } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.send('login succefull');
  } else {
    res.send('invalid username/password');
  }
  console.log(users);
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
