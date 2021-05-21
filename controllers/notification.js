var admin = require("firebase-admin");

exports.oneUser = (req, res) => {
  var payload = {
    notification: {
      title: req.body.title,
      body: req.body.message,
    },
    data: req.body.data
  };
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
      });
    })
    .catch(function (error) {
      return res.json({
        message: "Not Send",
      });
    });
};

exports.allUser = (req, res) => {
  var payload = {
    notification: {
      title: "Update !",
      body: `"${req.body.message}" has been added.`,
    },
  };

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
      return res.json({
        message: "Not Send",
      });
    });
};
