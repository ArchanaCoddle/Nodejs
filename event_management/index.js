/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');
const decorRoutes = require('./routes/decor');
const bookRoutes = require('./routes/booking');

const server = express();
server.use(bodyParser.json());

server.use('/auth', authRoutes);
server.use('/events', eventRoutes);
server.use('/decors', decorRoutes);
server.use('/booking', bookRoutes);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
