const UserModel = require("../models/user");
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  UserModel.findEmail(email, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: "No user found!",
      });
    } else {
      try {
        if (password === user[user.length-1].password) {
          const token = jwt.sign(
            {
              user_id: user[user.length-1].user_id,
            },
            process.env.SECRET
          );

          return res.json({ token, user: user[user.length-1] });
        } else {
          return res.status(401).json({
            error: "Email and Password do not match",
          });
        }
      } catch (error) {
        return res.status(400).json({
          error: "Email not Found in DB",
        });
      }
    }
  });
};
