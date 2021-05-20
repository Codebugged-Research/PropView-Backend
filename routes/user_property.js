const express = require("express");
var router = express();

const UserProperty = require("../controllers/user_property");

//Create User Property
router.post("/userProperty/create", UserProperty.createUserProperty);

//Get User Properties
router.get("/userProperties", UserProperty.getUserProperties);

//Get User Property by user_id
router.get(
  "/userProperty/user/:user_id",
  UserProperty.getUserPropertiesbyUserId
);

//Get User Property by user_to_property_id
router.get(
  "/userProperty/property/:user_to_property_id",
  UserProperty.getUserPropertiesUserToPropertyId
);

//Update User Property by user_to_property_id
router.put(
  "/userProperty/update/:user_to_property_id",
  UserProperty.updateUserProperty
);

//Delete User Property by user_to_property_id
router.delete(
  "/userProperty/delete/:user_to_property_id",
  UserProperty.deleteUserProperty
);

module.exports = router;
