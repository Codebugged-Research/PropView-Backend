var dbConn = require("../config/database");

var PropertyRoom = function (propertyRoom) {
  this.room_id = propertyRoom.room_id;
  this.issueb = propertyRoom.issueb;
  this.room_name = propertyRoom.room_name;
  this.status = propertyRoom.status;
};

PropertyRoom.savePropertyRoom = (propertyRoomReqData, result) => {
  dbConn.query(
    "INSERT INTO tbl_property_rooms SET?",
    propertyRoomReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

PropertyRoom.findPropertyRoomById = (room_id, result) => {
  dbConn.query(
    "SELECT * FROM tbl_property_rooms WHERE room_id=?",
    room_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

PropertyRoom.findPropertyRoom = (result) => {
  dbConn.query("SELECT * FROM tbl_property_rooms", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

PropertyRoom.findByIdAndUpdate = (room_id, propertyRoomReqData, result) => {
  dbConn.query(
    "UPDATE tbl_property_rooms SET room_id=?, issueb=?, room_name=?, status=? WHERE room_id=?",
    [
      propertyRoomReqData.room_id,
      propertyRoomReqData.issub,
      propertyRoomReqData.room_name,
      propertyRoomReqData.status,
      room_id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

PropertyRoom.findByIdAndDelete = (room_id, result) => {
  dbConn.query(
    "DELETE tbl_property_rooms WHERE room_id=?",
    room_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = PropertyRoom;
