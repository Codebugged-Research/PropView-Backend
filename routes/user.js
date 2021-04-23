const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../controllers/user");

router.get("/users", User.getUserList);

module.exports = router;
