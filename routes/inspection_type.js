var express = require("express");
var router = express();

const InspectionType = require("../controllers/inspection_type");

router.post("/inspection/type/create/", InspectionType.createInspectionType);
router.get("/inspection/type/get", InspectionType.getInspectionType);
router.put(
  "/inspection/type/update/:inspectionTypeId",
  InspectionType.updateInspectionType
);
router.delete(
  "/inspection/type/delete/:inspectionTypeId",
  InspectionType.deleteInspectionType
);

module.exports = router;
