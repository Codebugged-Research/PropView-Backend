const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../controllers/user");

//Get User by user_id
router.get('/user/:user_id', User.getUserById);

// Get User by user_type
router.post("/user/usertype", User.getUserByUserType);

//Update User
router.put("/user/update/:user_id", User.updateUserById);

//Get All Users
router.get("/users", User.getUserList);

module.exports = router;
