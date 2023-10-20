/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const { verify } = require('jsonwebtoken');
const decor = require('../controllers/decor');

const server = express();
server.use(bodyParser.json());

server.get('/all', verify, decor.allDecor);

module.exports = server;
