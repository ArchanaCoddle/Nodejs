const jwt = require('jsonwebtoken');
const verifying = require('../middleware/tokenVerfication');
const UserModel = require('../models/user');

const secretKey = 'Archana';

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await UserModel.login(username, password);
    if (user) {
      jwt.sign({ user }, secretKey, { expiresIn: '86400s' }, (_jwtErr, token) => {
        res.json({ auth: true, token });
      });
    } else {
      res.console.log('invalid username/password');
    }
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
}
async function signup(req, res) {
  const {
    id, firstname, lastname, phone, email, address, username, password,
  } = req.body;
  const newUser = {
    id, firstname, lastname, phone, email, address, username, password,
  };
  console.log(newUser);
  try {
    await UserModel.signup(newUser);
    res.send('Signup successful');
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { login, signup, verifying };
