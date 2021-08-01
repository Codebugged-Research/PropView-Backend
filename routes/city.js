const express = require("express");
const router = express();

const CityController = require("../controllers/city");

router.get("/city/all", CityController.getAllCities);
router.get("/city/:city_id", CityController.getCitybyId);

module.exports = router;
