/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const { verify } = require('jsonwebtoken');

const authRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');
const decorRoutes = require('./routes/decor');

const server = express();
server.use(bodyParser.json());

server.use('/auth', authRoutes);
server.use('/events', verify, eventRoutes);
server.use('/decors', verify, decorRoutes);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
