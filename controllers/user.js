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
  UserModel.findByIdAndUpdate(req.params.user_id, userReqData, (err, user) => {
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

exports.updateUserDeviceToken = (req, res) => {
  const { device_token } = req.body;
  try {
    UserModel.updateDeviceToken(
      req.params.user_id,
      device_token,
      (err, user) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Failed to update User!",
          });
        }
        res.json({
          success: true,
        });
      }
    );
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Something went wrong!",
    });
  }
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

exports.getUsersByMangerID = (req, res) => {
  UserModel.findUsersByManger(req.params.id, (err, users) => {
    if (err) {
      return res.status(400).json({
        error: "No Users is found with this ID!",
      });
    }
    res.json(users);
  });
};
