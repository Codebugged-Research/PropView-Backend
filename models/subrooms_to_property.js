var dbConn = require("../config/database");

var SubRoomsToProperty = function (subRoomsToProperty) {
  this.property_sub_room_id = subRoomsToProperty.property_sub_room_id;
  this.property_id = subRoomsToProperty.property_id;
  this.room_id = subRoomsToProperty.room_id;
  this.sub_room_id = subRoomsToProperty.sub_room_id;
  this.room_size1 = subRoomsToProperty.room_size1;
  this.room_size2 = subRoomsToProperty.room_size2;
  this.facility = subRoomsToProperty.facility;
};

SubRoomsToProperty.saveSubRoomsToProperty = (subRoomsReqData, result) => {
  dbConn.query(
    "INSERT INTO tbl_rooms_to_property_sub SET?",
    subRoomsReqData,
    (err, res) => {
      if ((err, res)) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

SubRoomsToProperty.findAllSubRooms = (result) => {
  dbConn.query("SELECT * FROM tbl_rooms_to_property_sub", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

SubRoomsToProperty.findSubRoomByPropertyId = (property_id, result) => {
  dbConn.query(
    "SELECT * FROM tbl_rooms_to_property_sub WHERE property_id=?",
    property_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

SubRoomsToProperty.findByIdAndUpdate = (
  property_sub_room_id,
  subRoomData,
  result
) => {
  dbConn.query(
    "UPDATE tbl_rooms_to_property_sub SET property_id=?, room_id=?, sub_room_id=?, room_size1=?, room_size2=?, facility=? WHERE tbl_rooms_to_property_sub.property_sub_room_id=?",
    [
      subRoomData.property_id,
      subRoomData.room_id,
      subRoomData.sub_room_id,
      subRoomData.room_size1,
      subRoomData.room_size2,
      subRoomData.facility,
      property_sub_room_id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

SubRoomsToProperty.findByIdAndDelete = (property_sub_room_id, result) => {
  dbConn.query(
    "DELETE FROM tbl_rooms_to_property_sub WHERE property_sub_room_id=?",
    property_sub_room_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = SubRoomsToProperty;
