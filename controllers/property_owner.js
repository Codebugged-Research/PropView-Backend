const db = require("../config/database");

exports.getPropertyOwner = (req, res) => {
  let sql = "SELECT * FROM property_owner";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: "Not Able to fetch!",
      });
    }
    console.log(result);
    res.json(result);
  });
};
