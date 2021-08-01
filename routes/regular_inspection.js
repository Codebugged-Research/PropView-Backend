const express = require("express");
const router = express();

const RegularInspectionController = require("../controllers/regular_inspection");

router.post(
  "/inspection/regular/create/",
  RegularInspectionController.createRegularInspection
);
router.get(
  "/inspection/regular/get/:inspection_id",
  RegularInspectionController.getRegularInspectionByInspectionId
);
router.get(
  "/inspection/regular/property/:property_id",
  RegularInspectionController.getRegularInspectionByPropertyId
);

module.exports = router;
