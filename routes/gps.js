const express = require("express");
const router = express();

const GeoController = require("../controllers/gps");

router.get("/gps/all", GeoController.getAllGPS);
router.get("/gps/:user_id", GeoController.getGPSByUserId);
router.post("/gps", GeoController.createGPS);

module.exports = router;
