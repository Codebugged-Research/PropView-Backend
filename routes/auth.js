const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Auth = require("../controllers/auth");

router.post("/signin", Auth.signin);

module.exports = router;