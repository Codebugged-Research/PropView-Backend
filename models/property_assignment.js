var dbConn = require("../config/database");

var PropertyAssignment = function (property_assignment) {
  this.user_to_property_id = property_assignment.user_to_property_id;
  this.user_id = property_assignment.user_id;
  this.property_id = property_assignment.property_id;
};

//Create Property Assignment
PropertyAssignment.savePropertyAssignment = (propertyReqData, result) => {
  dbConn.query(
    "INSERT INTO tbl_suser_to_property SET ?",
    propertyReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Get Property Assignment by User ID
PropertyAssignment.findByUserId = (user_id, result) => {
  dbConn.query(
    "SELECT * FROM tableproperty JOIN property_owner ON tableproperty.owner_id = property_owner.owner_id JOIN tbl_country ON tableproperty.cid = tbl_country.cid JOIN tbl_state ON tableproperty.sid = tbl_state.sid JOIN tbl_city ON tableproperty.ccid = tbl_city.ccid  JOIN tbl_locality ON tableproperty.locid = tbl_locality.locid JOIN tbl_society ON tableproperty.socid = tbl_society.socid WHERE tableproperty.status=1 AND FIND_IN_SET(property_id, (SELECT property_id from tbl_suser_to_property where user_id=?))",
    [user_id],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

PropertyAssignment.isPropertyAssigned = (id_1, id_2, id_3, id_4, result) => {
  dbConn.query(
    "SELECT * FROM tbl_suser_to_property WHERE property_id LIKE ? OR property_id LIKE ? OR property_id LIKE ? OR property_id=?",
    [id_1, id_2, id_3, id_4],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Update User Property by user_to_property_id
PropertyAssignment.findByIdAndUpdate = (
  userToPropertyId,
  reqUserPropertyData,
  result
) => {
  dbConn.query(
    "UPDATE tbl_suser_to_property SET user_to_property_id=?, user_id=?, property_id=? WHERE user_to_property_id=?",
    [
      reqUserPropertyData.user_to_property_id,
      reqUserPropertyData.user_id,
      reqUserPropertyData.property_id,
      userToPropertyId,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = PropertyAssignment;
