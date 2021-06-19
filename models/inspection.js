var dbConn = require("../config/database");
var func = require("node-mysql-nesting");

var Inspection = function (inspection) {
  this.inspection_id = inspection.inspection_id;
  this.inspect_type = inspection.inspect_type;
  this.property_id = inspection.property_id;
  this.employee_id = inspection.employee_id;
  this.issues = inspection.issues;
  this.createdAt = inspection.createdAt;
  this.updatedAt = inspection.updatedAt;
};

Inspection.saveInspection = (inspectionReqData, result) => {
  dbConn.query(
    "INSERT INTO app_inspection SET ?",
    inspectionReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

Inspection.findInspectionById = (inspection_id, result) => {
  dbConn.query(
    "SELECT * FROM app_inspection WHERE inspection_id=?",
    inspection_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

Inspection.findAllInspection = (result) => {
  dbConn.query("SELECT * FROM app_inspection", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

Inspection.findInspectionByPropertyId = (property_id, result) => {};

Inspection.findInspectionByEmployeeId = (employee_id, result) => {};

Inspection.findByIdAndUpdate = (inspection_id, inspectionReqData, result) => {};

Inspection.findByIdAndDelete = (inspection_id, result) => {
  dbConn.query(
    "DELETE app_inspection WHERE inspection_id=?",
    inspection_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};
