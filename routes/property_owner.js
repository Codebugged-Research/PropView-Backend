var express = require("express");
var router = express.Router();

const PropertyOwner = require("../controllers/property_owner");

//* Create Property Owner
router.post("/propertyOwner/create", PropertyOwner.createPropertyOwner);

//* Get Property by Owner Id
router.get("/propertyOwner/:owner_id", PropertyOwner.getPropertyByOwnerId);

//* Get All Property List
router.get("/propertyOwner", PropertyOwner.getPropertyList);

//* Update Property by owner_id
router.put(
  "/propertyOwner/update/:owner_id",
  PropertyOwner.updatePropertyOwner
);

router.post(
  "/propertyOwner/search",
  PropertyOwner.searchPropertyOwner
);


router.post(
  "/property/search",
  PropertyOwner.searchPropertyOwner
);

module.exports = router;
