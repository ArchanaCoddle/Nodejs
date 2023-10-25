const jwt = require('jsonwebtoken');
const verifying = require('../middleware/tokenVerfication');
const UserModel = require('../models/user');

const secretKey = 'Archana';

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await UserModel.login(username, password);
    console.log(user);
    if (user[0].username === username && user[0].password === password) {
      jwt.sign({ user }, secretKey, { expiresIn: '86400s' }, (_jwtErr, token) => {
        res.status(200).send({ succes: true, auth: true, token });
      });
    } else if (user[0].username !== username || user[0].password !== password) {
      res.status(400).send({ succes: false, message: ('invalid username/password') });
    }
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('Internal Server Error') });
  }
}

async function signup(req, res) {
  try {
    const {
      id, firstname, lastname, phone, email, address, username, password,
    } = req.body;
    const newUser = {
      id, firstname, lastname, phone, email, address, username, password,
    };
    console.log(newUser);
    if (id === '' || firstname === '' || lastname === ''
    || email === '' || address === '' || phone === ''
    || username === '' || password === '') {
      res.status(400).send({ succes: false, message: ('Missing required fields') });
    }
    if (phone.length !== 10) {
      res.status(400).send({ succes: false, message: ('number is not valid') });
    } else {
      await UserModel.signup(newUser);
      res.status(200).send({ succes: true, message: ('Signup successful') });
    }
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('Internal Server Error') });
  }
}

module.exports = { login, signup, verifying };
