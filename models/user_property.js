var dbConn = require("../config/database");

var UserProperty = function (userProperty) {
  this.user_to_property_id = userProperty.user_to_property_id;
  this.user_id = userProperty.user_id;
  this.property_id = userProperty.property_id;
};

//Create User Property
UserProperty.saveUserProperty = (reqUserPropertyData, result) => {
  dbConn.query(
    "INSERT INTO tbl_user_to_property SET ?",
    reqUserPropertyData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Get User Properties
UserProperty.findAllUserProperty = (result) => {
  dbConn.query("SELECT * FROM tbl_user_to_property", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

//Get User Property by user_id
UserProperty.findUserPropertyByUserId = (userId, result) => {
  dbConn.query(
    "SELECT * from tbl_user_to_property where user_id=?",
    userId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Get User Property by user_to_property_id
UserProperty.findUserPropertyByUserToPropertyId = (
  userToPropertyId,
  result
) => {
  dbConn.query(
    "SELECT * from tbl_user_to_property where user_to_property_id=?",
    userToPropertyId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Update User Property by user_to_property_id
UserProperty.findByIdAndUpdate = (
  userToPropertyId,
  reqUserPropertyData,
  result
) => {
  dbConn.query(
    "UPDATE tbl_user_to_property SET user_to_property_id=?, user_id=?, property_id=? WHERE user_to_property_id=?",
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

//Delete User Property by user_to_property_id
UserProperty.findByIdAndDelete = (userToPropertyId, result) => {
  dbConn.query(
    "DELETE tbl_user_to_property where user_to_property_id=?",
    userToPropertyId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = UserProperty;