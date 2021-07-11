const PropertyRoomModel = require("../models/property_room");

exports.createPropertyRoom = (req, res) => {
  const propertyRoomReqData = new PropertyRoomModel(req.body);
  PropertyRoomModel.savePropertyRoom(
    propertyRoomReqData,
    (err, propertyRoom) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      return res.json({
        success: "true",
        data: propertyRoom,
      });
    }
  );
};

exports.getPropertyRoom = (req, res) => {
  PropertyRoomModel.findPropertyRoom((err, propertyRoom) => {
    if (err) {
      return res.status(400).json({
        error: "No property room is found!",
      });
    }
    return res.json({
      count: propertyRoom.length,
      data: {
        propertyRoom,
      },
    });
  });
};

exports.getPropertyRoomById = (req, res) => {
  PropertyRoomModel.findPropertyRoomById(
    req.params.room_id,
    (err, propertyRoom) => {
      if (err) {
        return res.status(400).json({
          error: "No property room is found!",
        });
      }
      return res.json(propertyRoom);
    }
  );
};

exports.updatePropertyRoom = (req, res) => {
  const propertyRoomReqData = new PropertyRoomModel(req.body);
  PropertyRoomModel.findByIdAndUpdate(
    req.params.room_id,
    propertyRoomReqData,
    (err, propertyModel) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      res.json({
        success: "true",
      });
    }
  );
};

exports.deletePropertyRoom = (req, res) => {
  PropertyRoomModel.findByIdAndDelete(
    req.params.room_id,
    (err, propertyRoom) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      res.json({
        success: "true",
      });
    }
  );
};
