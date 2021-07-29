const StateModel = require("../models/state");

exports.getAllStates = (req, res) => {
  try {
    StateModel.findAllStates((err, states) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        return res.status(200).json(states);
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};
