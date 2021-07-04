const express = require("express");
var router = express();

const Property = require("../controllers/property");

//Create Property
router.post("/property/create", Property.createProperty);

//Get Property by PropertyId
router.get("/property/:property_id", Property.getPropertyByPropertyId);

//Get Property by OwnerId
router.get("/property/owner/:owner_id", Property.getPropertyByOwnerId);

//Get All User Property Limit
// router.get(
//   "/properties/user/:user_id",
//   propertyUserCache,
//   Property.getAllUserProperty
// );
router.get(
  "/properties/user/:user_id",
  Property.getAllUserProperty
);
router.post(
  "/properties/user/limit/:user_id",
  Property.getAllUserPropertyLimit
);

//Get All Property
router.get("/properties/", Property.getProperties);

router.post("/properties/limit", Property.getPropertiesLimit);

//Update Properties
router.put("/property/update/:property_id", Property.updateProperty);

//Delete Properties
router.delete("/property/delete/:property_id", Property.deleteProperty);

//get Society name by id
router.get("/property/society/:id", Property.getSociety);

//get Society name by id
router.get("/property/country/:id", Property.getCountry);

module.exports = router;
