const express = require("express");
const router = express.Router();

const PropertyFacility = require("../controllers/property_facility");

router.get("/property/facility/get", PropertyFacility.getAllFacility);

module.exports = router;