const eventModel = require('../models/event');

function allEvent(req, res) {
  eventModel.allEvent(req, (loginErr, user) => {
    if (loginErr) {
      console.log('Database error:', loginErr);
    } else {
      console.log('controller', user);
      res.send({ user });
    }
  });
}
function eventSelected(req, res) {
  const eventClicked = req.body.eventSelected;
  eventModel.eventSelected(eventClicked, (err, data) => {
    if (err) {
      console.log('Database error:', err);
    } else {
      res.send({ data });
    }
  });
}

module.exports = {
  allEvent, eventSelected,
};
