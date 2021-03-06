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

exports.getStateById = (req, res) => {
  try {
    StateModel.findStateById(req.params.state_id, (err, state) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        return res.status(200).json(state[0]);
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};
