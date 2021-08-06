const express = require("express");
const router = express();

const BillPropertyControllers = require("../controllers/bill_property");

router.get(
  "/bill/property/:property_id",
  BillPropertyControllers.getBillPropertyByPropertyId
);

module.exports = router;
