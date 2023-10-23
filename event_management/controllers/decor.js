const jwt = require('../middleware/tokenVerfication');
const eventModel = require('../models/decor');

async function allDecor(req, res) {
  try {
    jwt(req, res, async () => {
      const data = await eventModel.allDecor();
      res.send({ succes: true, message: { data } });
    });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('internal server error') });
  }
}

module.exports = {
  allDecor,
};
