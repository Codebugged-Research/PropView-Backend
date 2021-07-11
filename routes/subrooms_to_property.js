const express = require("express");
const router = express.Router();

const SubRoomsProperty = require("../controllers/subrooms_to_property");

router.post("/subroom/create", SubRoomsProperty.createSubRoomToProperty);

router.get("subroom/get/", SubRoomsProperty.getAllSubRooms);

router.get(
  "subroom/get/property/:property_id",
  SubRoomsProperty.getAllSubRoomByPropertyId
);

router.put(
  "subroom/update/:property_sub_room_id",
  SubRoomsProperty.updateSubRoom
);
router.delete(
  "subroom/delete/:property_sub_room_id",
  SubRoomsProperty.deleteSubRoom
);

module.exports = router;
