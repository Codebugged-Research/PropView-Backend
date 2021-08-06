var dbConn = require("../config/database");

var BillType = function (billType) {
  this.bill_type_id = billType.bill_type_id;
  this.bill_name = billType.bill_name;
  this.status = billType.status;
};

BillType.findAll = (result) => {
  dbConn.query("SELECT * FROM tbl_bill_types", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

BillType.findBillTypeById = (bill_type_id, result) => {
  dbConn.query(
    "SELECT * FROM tbl_bill_types WHERE bill_type_id=?",
    bill_type_id,
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = BillType;
