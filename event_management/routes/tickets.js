/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const tickets = require('../controllers/tickets');
const jwt = require('../middleware/tokenVerfication');

const server = express();
server.use(bodyParser.json());

server.post('/booking', jwt, tickets.ticketBooking);

module.exports = server;
