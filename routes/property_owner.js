var express = require("express");
const db = require("../config/database");
var router = express.Router();

// const { getPropertyOwner } = require("../controllers/property_owner");

router.get("/property-owner", (req, res) => {
  let sql = "SELECT * FROM property_owner";
  db.query(sql, (err, result) => {
    if (err) {
        console.log(err);
      return res.status(400).json({
        error: "Not Able to fetch!",
      });
    }
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
