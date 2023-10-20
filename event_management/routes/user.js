/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const authentication = require('../controllers/authentication');

const server = express();
server.use(bodyParser.json());

server.post('/login', authentication.login);
server.post('/signup', authentication.signup);

module.exports = server;
