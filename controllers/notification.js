var admin = require("firebase-admin");

exports.oneUser = (req, res) => {
  if (req.body.data === undefined) {
    var payload = {
      notification: {
        title: req.body.title,
        body: req.body.message,
      },
    };
  } else {
    var payload = {
      notification: {
        title: req.body.title,
        body: req.body.message,
      },
      data: req.body.data
    };
  }
  var options = {
    priority: "high",
    timeToLive: 60 * 60 * 24,
  };
  admin
    .messaging()
    .sendToDevice(req.body.deviceToken, payload, options)
    .then(function (response) {
      return res.json({
        message: "Successfully Send",
        response: response,
      });
    })
    .catch(function (error) {
      return res.status(400).json({
        message: "Not Send",
        err: error,
      });
    });
};

exports.allUser = (req, res) => {
  if (req.body.data === undefined) {
    var payload = {
      notification: {
        title: req.body.title,
        body: req.body.message,
      },
    };
  } else {
    var payload = {
      notification: {
        title: req.body.title,
        body: req.body.message,
      },
      data: req.body.data
    };
  }

  var topic = "propview";

  admin
    .messaging()
    .sendToTopic(topic, payload)
    .then(function (response) {
      return res.json({
        message: "Successfully Send",
      });
    })
    .catch(function (error) {
      return res.status(400).json({
        message: "Not Send",
        error: error,
      });
    });
};
