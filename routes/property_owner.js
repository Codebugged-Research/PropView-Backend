var express = require("express");
var router = express.Router();

const PropertyOwner = require("../controllers/property_owner");

router.get("/propertyOwner", PropertyOwner.getPropertyList);

module.exports = router;
