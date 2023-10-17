/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const AuthController = require('./controllers/authControllers');
const EventController = require('./controllers/eventControllers');

const server = express();
server.use(bodyParser.json());
server.post('/login', AuthController.login);
server.post('/signup', AuthController.signup);
server.get('/events', EventController.allEvent);
server.post('/events/particular', EventController.eventSelected);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
