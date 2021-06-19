var dbConn = require("../config/database");

var InspectionType = function (inspectionType) {
  this.inspectionType_id = inspectionType.inspectionType_id;
  this.inspectionType = inspectionType.inspectionType;
  this.createdAt = inspectionType.createdAt;
  this.updatedAt = inspectionType.updatedAt;
};

//* Create Inspection Type
InspectionType.saveInspectionType = (inspectionTypeReqData, result) => {
  dbConn.query(
    "INSERT INTO app_inspectiontype SET ?",
    inspectionTypeReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//* Get all Inspection Type
InspectionType.findInspectionType = (result) => {
  dbConn.query("SELECT * FROM app_inspectiontype", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

//*
InspectionType.findByIdAndUpdate = (
  inspectionType_id,
  inspectionTypeReqData,
  result
) => {
  dbConn.query(
    "UPDATE app_inspectiontype SET inspectionType_id=?, inspectionType=?, createdAt=?, updatedAt=? WHERE inspectionType_id=?",
    [
      inspectionTypeReqData.inspectionType_id,
      inspectionTypeReqData.inspectionType,
      inspectionTypeReqData.createdAt,
      inspectionTypeReqData.updatedAt,
      inspectionType_id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//*
InspectionType.findByIdAndDelete = (inspectionType_id, result) => {
  dbConn.query(
    "DELETE app_inspectiontype WHERE inspectionType_id=?",
    inspectionType_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = InspectionType;
