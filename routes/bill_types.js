const express = require("express");
const router = express();

const BillTypeControllers = require("../controllers/bill_types");

router.get("/bill/types/", BillTypeControllers.getAllBillType);
router.get("/bill/types/:billTypeId", BillTypeControllers.getAllBillTypeById);

module.exports = router;