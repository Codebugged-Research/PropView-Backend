var dbConn = require("../config/database");

var RegularInspectionRow = function (regularInspectionRow) {
  this.id = regularInspectionRow.id;
  this.termite_check = regularInspectionRow.termite_check;
  this.seepage_check = regularInspectionRow.seepage_check;
  this.general_cleanliness = regularInspectionRow.general_cleanliness;
  this.other_issue = regularInspectionRow.other_issue;
  this.issub = regularInspectionRow.issub;
  this.photo = regularInspectionRow.photo; //List
  this.roomsubroom_id = regularInspectionRow.roomsubroom_id;
  this.roomsubroom_name = regularInspectionRow.roomsubroom_name;
  this.created_at = regularInspectionRow.created_at;
};

RegularInspectionRow.saveInspectionRow = (
  regularInspectionRowReqData,
  result
) => {
  dbConn.query(
    "INSERT INTO app_regular_inspection_row SET ?",
    regularInspectionRowReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

RegularInspectionRow.findByRowId = (rowId, result) => {
  dbConn.query(
    "SELECT * FROM app_regular_inspection_row WHERE id=?",
    rowId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = RegularInspectionRow;
