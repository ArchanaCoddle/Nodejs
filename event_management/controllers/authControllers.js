const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const secretKey = 'Archana';

function login(req, res) {
  const { username, password } = req.body;
  UserModel.login(username, password, (loginErr, user) => {
    if (loginErr) {
      console.log('Database error:', loginErr);
      res.status(500).send('Internal Server Error');
    } else if (user) {
      jwt.sign({ user }, secretKey, { expiresIn: '86400s' }, (_jwtErr, token) => {
        res.json({ auth: true, token });
      });
    } else {
      res.status(401).send('Invalid username/password');
    }
  });
}
function signup(req, res) {
  const {
    id, firstname, lastname, phone, email, address, username, password,
  } = req.body;
  const newUser = {
    id, firstname, lastname, phone, email, address, username, password,
  };
  console.log(newUser);
  UserModel.signup(newUser, (err) => {
    if (err) {
      console.log('Database error:', err);
    } else {
      res.send('Signup successful');
    }
  });
  console.log(newUser);
}

module.exports = { login, signup };
