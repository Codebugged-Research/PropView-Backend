const RoomsToPropertyModel = require("../models/rooms_to_property");

exports.createRoomsToProperty = (req, res) => {
  const roomsToPropertyReqData = new RoomsToPropertyModel(req.body);
  try {
    RoomsToPropertyModel.save(
      roomsToPropertyReqData,
      (err, roomsToProperty) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: "Error while saving rooms to property",
          });
        } else {
          return res.json(roomsToPropertyModel);
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error while saving rooms to property" + err,
    });
  }
};

exports.getRoomsToProperty = (req, res) => {
  try {
    RoomsToPropertyModel.findAllRooms((err, roomsToPropertyModel) => {
      if (err) {
        return res.status(400).json({
          success: false,
          error: "No property room is found!",
        });
      }
      return res.json(roomsToPropertyModel);
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error while getting rooms to property",
    });
  }
};

exports.getRoomsToPropertyByPropertyId = (req, res) => {
  try {
    RoomsToPropertyModel.findAllRoomsByPropertyId(
      req.params.property_id,
      (err, roomsToPropertyModel) => {
        if (err) {
          return res.status(400).json({
            success: false,
            error: "No property room is found!",
          });
        }
        return res.json(roomsToPropertyModel);
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error while getting rooms to property",
    });
  }
};

exports.updateRoomsToProperty = (req, res) => {
  const roomsToPropertyReqData = new RoomsToPropertyModel(req.body);
  try {
    RoomsToPropertyModel.findByIdAndUpdate(
      req.params.property_room_id,
      roomsToPropertyReqData,
      (err, roomsToProperty) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: "Error while updating rooms to property",
          });
        } else {
          res.json({
            success: true,
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error while updating rooms to property",
    });
  }
};

exports.deleteRoomsToProperty = (req, res) => {
  try {
    RoomsToPropertyModel.findByIdAndDelete(
      req.params.property_room_id,
      (err, roomsToProperty) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: "Error while deleting rooms to property",
          });
        } else {
          res.json({
            success: true,
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error while deleting rooms to property",
    });
  }
};
