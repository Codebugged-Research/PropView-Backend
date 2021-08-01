const express = require("express");
const router = express();

const RegularInspectionController = require("../controllers/regular_inspection_row");

router.post(
  "/inspection/regular/row/create",
  RegularInspectionController.createInspectionRows
);
router.get(
  "/inspection/regular/row/:row_id",
  RegularInspectionController.getInspectionRowById
);

module.exports = router;
