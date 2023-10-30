/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const feedback = require('../controllers/feedback');
const jwt = require('../middleware/tokenVerfication');

const server = express();
server.use(bodyParser.json());

server.get('/show', jwt, feedback.feedbackDetails);
server.post('/write', jwt, feedback.feedbackWrite);

module.exports = server;
