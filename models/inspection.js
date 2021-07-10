var dbConn = require("../config/database");
var func = require("node-mysql-nesting");

var Inspection = function (inspection) {
  this.inspection_id = inspection.inspection_id;
  this.inspect_type = inspection.inspect_type;
  this.property_id = inspection.property_id;
  this.employee_id = inspection.employee_id;
  this.issue_id_list = inspection.issue_id_list; //List of id
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

Inspection.findInspectionByPropertyId = (property_id, result) => {
  dbConn.query(
    "SELECT * FROM app_inspection WHERE property_id=?",
    property_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

Inspection.findInspectionByEmployeeId = (employee_id, result) => {
  dbConn.query(
    "SELECT * FROM app_inspection WHERE employee_id=?",
    employee_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

Inspection.findByIdAndUpdate = (inspection_id, inspectionReqData, result) => {
  dbConn.query(
    "UPDATE app_inspection SET inspection_id=?, inspect_type=?, property_id=?,employee_id=?,issue_id_list=? WHERE inspection_id=?",
    inspection_id,
    [
      inspectionReqData.inspection_id,
      inspectionReqData.inspect_type,
      inspectionReqData.property_id,
      inspectionReqData.employee_id,
      inspectionReqData.issue_id_list,
      inspectionReqData.inspection_id,
    ],
    inspection_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

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

module.exports = Inspection;