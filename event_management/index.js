/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.json());

const users = [];

server.post('/', (req, res) => {
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

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
