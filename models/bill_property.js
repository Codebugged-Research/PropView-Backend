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
  this.date_added = billproperty.date_added;
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

BillProperty.findByIdAndUpdate = function (bill_property_id, billPropertyReqData, result) {
  dbConn.query(
    "UPDATE tbl_bills_to_property SET id=?, property_id=?, bill_type_id=?, authority_name=?, bill_id=?, amount=?, last_update=?, added_by=?, date_added=? WHERE id=?",    
    [
      billPropertyReqData.id,
      billPropertyReqData.property_id,
      billPropertyReqData.bill_type_id,
      billPropertyReqData.authority_name,
      billPropertyReqData.bill_id,
      billPropertyReqData.amount,
      billPropertyReqData.last_update,
      billPropertyReqData.added_by,
      billPropertyReqData.date_added,
      bill_property_id
    ],
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
