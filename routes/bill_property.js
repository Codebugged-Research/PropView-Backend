const express = require("express");
const router = express();

const BillPropertyControllers = require("../controllers/bill_property");

router.get(
  "/bill/property/:property_id",
  BillPropertyControllers.getBillPropertyByPropertyId
);

router.put(
  "/bill/property/update/:bill_property_id",
  BillPropertyControllers.updateBillProperty
);

module.exports = router;
