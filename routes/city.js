const express = require("express");
const router = express();

const CityController = require("../controllers/city");

router.get("/city/all", CityController.getAllCities);

module.exports = router;
