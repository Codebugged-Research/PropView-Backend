const express = rrquire("express");
const router = express();

const Inspection = require("../controllers/inspection");

router.post("inspection/create/", Inspection.createInspection);
router.get("inspection/get/", Inspection.getInspection);
router.get("inspection/get/:inspection_id", Inspection.getInspectionById);
router.put("inspection/update/:inspection_id", Inspection.updateInspection);
router.delete("inspection/delete/:inspection_id", Inspection.deleteInspection);

module.exports = router;
