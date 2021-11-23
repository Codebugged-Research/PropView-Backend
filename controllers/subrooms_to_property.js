const SubRoomsToPropertyModels = require("../models/subrooms_to_property");

exports.createSubRoomToProperty = (req, res) => {
  try {
    const subRoomToProperty = new SubRoomsToPropertyModels(req.body);
    SubRoomsToPropertyModels.saveSubRoomsToProperty(
      subRoomToProperty,
      (err, subRoom) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message:
              "An error occurred while creating the subroom to property.",
          });
        } else {
          res.json(subRoom);
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the subroom to property.",
    });
  }
};

exports.getAllSubRooms = (req, res) => {
  try {
    SubRoomsToPropertyModels.findAllSubRooms((err, subRoom) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "An error occurred while getting all subrooms.",
        });
      } else {
        res.json(subRoom);
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while getting the subroom to property.",
    });
  }
};

exports.getAllSubRoomByPropertyId = (req, res) => {
  try {
    SubRoomsToPropertyModels.findSubRoomByPropertyId(
      req.params.property_id,
      (err, subRoom) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "An error occurred while getting all subrooms.",
          });
        } else {
          res.json(subRoom);
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while getting the subroom to property.",
    });
  }
};

exports.updateSubRoom = (req, res) => {
  try {
    const subRoomToProperty = new SubRoomsToPropertyModels(req.body);
    SubRoomsToPropertyModels.updateSubRooms(
      req.params.property_sub_room_id,
      subRoomToProperty,
      (err, subRoom) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "An error occurred while updating subrooms." + err,
          });
        } else {
          res.json({
            success: subRoom,
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the subroom.",
    });
  }
};

exports.deleteSubRoom = (req, res) => {
  try {
    SubRoomsToPropertyModels.findByIdAndDelete(
      req.params.property_sub_room_id,
      (err, subRoom) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "An error occurred while deleting subroom.",
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
      message: "An error occurred while deleting the subroom.",
    });
  }
};
