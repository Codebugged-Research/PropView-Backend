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
