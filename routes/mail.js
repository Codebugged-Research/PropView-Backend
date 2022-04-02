const express = require("express");
const router = express();

const Mail = require("../controllers/mail");

router.get("/mail/send/", Mail.sendMail);

module.exports = router;
