const express = require("express");
const router = express();

const Mail = require("../controllers/mail");

router.post("/mail/send/", Mail.sendMail);

module.exports = router;
