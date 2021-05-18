const express = require("express");
const router = express.Router();

const Notifcation = require("../controllers/notification");

router.post("/notification/one", Notifcation.oneUser);
router.post("/notification/all", Notifcation.allUser);

module.exports = router;
