/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const event = require('../controllers/event');
const jwt = require('../middleware/tokenVerfication');

const server = express();
server.use(bodyParser.json());

server.get('/all', jwt, event.allEvent);
server.post('/particular', jwt, event.eventSelected);

module.exports = server;
