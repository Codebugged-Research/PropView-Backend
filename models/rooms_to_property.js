var dbConn = require("../config/database");

var RoomsToProperty = function (roomsToProperty) {
  this.property_room_id = roomsToProperty.property_room_id;
  this.property_id = roomsToProperty.property_id;
  this.room_id = roomsToProperty.room_id;
  this.room_size1 = roomsToProperty.room_size1;
  this.room_size2 = roomsToProperty.room_size2;
  this.bath = roomsToProperty.bath;
  this.flooring = roomsToProperty.flooring;
  this.balcony = roomsToProperty.balcony;
  this.wardrobe = roomsToProperty.wardrobe;
  this.facility = roomsToProperty.facility;
};

RoomsToProperty.saveRoomsToProperty = (roomsToPropertyReqData, result) => {
  dbConn.query(
    "INSERT INTO tbl_rooms_to_property SET?",
    roomsToPropertyReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

RoomsToProperty.findAllRooms = (result) => {
  dbConn.query("SELECT * FROM tbl_rooms_to_property", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

RoomsToProperty.findAllRoomsByPropertyId = (property_id, result) => {
  dbConn.query(
    "SELECT * FROM tbl_rooms_to_property WHERE property_id=?",
    property_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

RoomsToProperty.findByIdAndUpdate = (
  property_room_id,
  roomsToPropertyReqData,
  result
) => {
  dbConn.query(
    "UPDATE tbl_rooms_to_property SET property_id=?, room_id=?, room_size1=?, room_size2=?, bath=?, flooring=?, balcony=?, wardrobe=?, facility=? WHERE tbl_rooms_to_property.property_room_id=? ",
    [
      roomsToPropertyReqData.property_id,
      roomsToPropertyReqData.room_id,
      roomsToPropertyReqData.room_size1,
      roomsToPropertyReqData.room_size2,
      roomsToPropertyReqData.bath,
      roomsToPropertyReqData.flooring,
      roomsToPropertyReqData.balcony,
      roomsToPropertyReqData.wardrobe,
      roomsToPropertyReqData.facility,
      property_room_id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

RoomsToProperty.findByIdAndDelete = (property_room_id, result) => {
  dbConn.query(
    "DELETE FROM tbl_rooms_to_property WHERE property_room_id=?",
    property_room_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = RoomsToProperty;
