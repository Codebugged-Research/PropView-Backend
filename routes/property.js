const express = require("express");
var router = express();

const Property = require("../controllers/property");

//Create Property
router.post("/property/create", Property.createProperty);
//Get Property by PropertyId
router.get("property/:property_id", Property.getPropertyByPropertyId);
//Get Property by OwnerId
router.get("property/:owner_id", Property.getPropertyByOwnerId);
//Get All Properties
router.get("properties/", Property.getProperties);
//Update Properties
router.put("property/update/:property_id", Property.updateProperty);
//Delete Properties
router.delete("property/delete/:property_id", Property.deleteProperty);

module.exports = router;
