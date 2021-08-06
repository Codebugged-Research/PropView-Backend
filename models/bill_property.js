var dbConn = require("../config/database");

const BillProperty = function (billproperty) {
  this.id = billproperty.id;
  this.property_id = billproperty.property_id;
  this.bill_type_id = billproperty.bill_type_id;
  this.authority_name = billproperty.authority_name;
  this.bill_id = billproperty.bill_id;
  this.amount = billproperty.amount;
  this.last_update = billproperty.last_update;
  this.added_by = billproperty.added_by;
  this.dated_added = billproperty.dated_added;
};

BillProperty.findByPropertyId = function (propertyId, result) {
  dbConn.query(
    "SELECT * FROM tbl_bills_to_property WHERE property_id = ?",
    propertyId,
     (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = BillProperty;
