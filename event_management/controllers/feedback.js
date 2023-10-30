/* eslint-disable camelcase */
const feedbackModel = require('../models/feedback');

async function feedbackDetails(req, res) {
  try {
    const data = await feedbackModel.feedbackDetails();
    res.status(200).send({ succes: true, data });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('internal server error') });
  }
}

async function feedbackWrite(req, res) {
  try {
    const {
      event_name, customer_name, title, description,
    } = req.body;
    const feedbackdata = {
      event_name, customer_name, title, description,
    };
    const data = await feedbackModel.feedbackWrite(feedbackdata);
    res.status(200).send({ succes: true, data });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('internal server error') });
  }
}

module.exports = {
  feedbackDetails, feedbackWrite,
};
