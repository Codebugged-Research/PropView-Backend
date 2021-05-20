const UserModel = require("../models/user");

exports.getUserList = (req, res) => {
  UserModel.getAllUsers((err, users) => {
    if (err) {
      return res.status(400).json({
        error: "No Users List is found!",
      });
    }
    res.json(users);
  });
};

exports.getUserById = (req, res) => {
  UserModel.findUserById(req.params.user_id, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: "No Users is found with this ID!",
      });
    }
    res.json(user[0]);
  });
};

exports.getDeviceTokenbyUserId = (req, res) => {
  UserModel.findDeviceTokenByUserId(req.params.user_id, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: "No Users is found with this ID!",
      });
    }
    res.json(user[0]);
  });
};

exports.updateUserById = (req, res) => {
  const userReqData = new UserModel(req.body);
  UserModel.findByIdAndUpdate(req.params.id, userReqData, (err, user) => {
    if (err) {
      return res.status(400).json({
        success: false,
      });
    }
    res.json({
      success: true,
    });
  });
};

exports.getUserByUserType = (req, res) => {
  UserModel.findUserByUserType(req.body.user_type, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: "No Users is found with this ID!",
      });
    }
    res.json(user);
  });
};
