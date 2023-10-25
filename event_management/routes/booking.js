/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const booking = require('../controllers/booking');
const jwt = require('../middleware/tokenVerfication');

const server = express();
server.use(bodyParser.json());

server.get('/details', jwt, booking.eventDetails);
server.post('/event', jwt, booking.eventBooking);

module.exports = server;
