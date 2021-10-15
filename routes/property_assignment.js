const express = require("express");
const router = express();

const PropertyAssignment = require("../controllers/property_assignment");

//Routes
router.post(
  "/property/assignment/create/",
  PropertyAssignment.createPropertyAssignment
);

router.get(
  "/property/assignment/user/:userId",
  PropertyAssignment.getPropertyAssignmentByUserId
);

router.post("/property/assignment/user/assigned/", PropertyAssignment.isAssigned);

router.put(
  "/property/assignment/update/:id",
  PropertyAssignment.updatePropertyAssignment
);

module.exports = router;
