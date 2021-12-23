var dbConn = require("../config/database");

var PropertyFacility = function (propertyFacility) {
  this.facility_id = propertyFacility.facility_id;
  this.facility_name = propertyFacility.facility_name;
  this.facility_icon = propertyFacility.facility_icon;
  this.status = propertyFacility.status;
  this.room_id = propertyFacility.room_id;
};

PropertyFacility.findPropertyFacility= (result) => {
  dbConn.query("SELECT * FROM tbl_property_facility ORDER BY facility_name", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

module.exports = PropertyFacility;