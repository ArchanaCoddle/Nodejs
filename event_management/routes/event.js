/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const { verify } = require('jsonwebtoken');
const event = require('../controllers/event');

const server = express();
server.use(bodyParser.json());

server.get('/all', verify, event.allEvent);
server.post('/particular', verify, event.eventSelected);

module.exports = server;
