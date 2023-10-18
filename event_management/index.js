/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const express = require('express');
const bodyParser = require('body-parser');
const { verify } = require('jsonwebtoken');
const AuthController = require('./controllers/authControllers');
const EventController = require('./controllers/eventControllers');
const DecorController = require('./controllers/decorControllers');

const server = express();
server.use(bodyParser.json());
server.post('/login', AuthController.login);
server.post('/signup', AuthController.signup);
server.get('/events', verify, EventController.allEvent);
server.post('/events/particular', verify, EventController.eventSelected);
server.get('/decors', verify, DecorController.allDecor);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
