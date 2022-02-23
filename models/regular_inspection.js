var dbConn = require("../config/database");

var RegularInspection = function (regularInspection) {
  this.id = regularInspection.id;
  this.row_list = regularInspection.row_list;
  this.property_id = regularInspection.property_id;
  this.employee_id = regularInspection.employee_id;
  this.summary = regularInspection.summary;
  this.created_at = regularInspection.created_at;
  this.updated_at = regularInspection.updated_at;
};

RegularInspection.saveInspection = (regularInspectionReqData, result) => {
  dbConn.query(
    "INSERT INTO app_regular_inspection SET ?",
    regularInspectionReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

RegularInspection.findByInspectionId = (inspectionId, result) => {
  dbConn.query(
    "SELECT * FROM app_regular_inspection WHERE id=?",
    inspectionId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

RegularInspection.findByPropertyId = (propertyId, result) => {
  dbConn.query(
    "SELECT * FROM app_regular_inspection WHERE property_id=? ORDER BY created_at DESC",
    propertyId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = RegularInspection;
