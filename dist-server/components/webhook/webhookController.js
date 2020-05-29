"use strict";

require('dotenv').config();

var verifyWebhook = function verifyWebhook(req, res) {
  var VERIFY_TOKEN = process.env.VERIFY_TOKEN;
  var mode = req.query['hub.mode'];
  var token = req.query['hub.verify_token'];
  var challenge = req.query['hub.challenge'];
  console.log(mode, token, challenge);

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
};

var postWebhook = function postWebhook(req, res) {
  var body = req.body; // Checks this is an event from a page subscription

  if (body.object === 'page') {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function (entry) {
      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      var webhook_event = entry.messaging[0];
      console.log(webhook_event);
    }); // Returns a '200 OK' response to all requests

    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
};

module.exports = {
  verifyWebhook: verifyWebhook,
  postWebhook: postWebhook
};