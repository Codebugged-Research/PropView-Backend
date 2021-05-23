const express = require("express");
var router = express();
const redis = require("redis");
const client = redis.createClient(process.env.REDIS_PORT);

const Property = require("../controllers/property");

const {propertyCache} = require("../middlewares/property");

//Create Property
router.post("/property/create", Property.createProperty);

//Get Property by PropertyId
router.get("/property/:property_id", Property.getPropertyByPropertyId);

//Get Property by OwnerId
router.get("/property/owner/:owner_id", Property.getPropertyByOwnerId);

//Get All User Property
router.get("/properties/owner/:user_id", Property.getAllUserProperty);

//Get All Property
router.get("/properties/", propertyCache, Property.getProperties);

//Update Properties
router.put("/property/update/:property_id", Property.updateProperty);

//Delete Properties
router.delete("/property/delete/:property_id", Property.deleteProperty);

module.exports = router;
