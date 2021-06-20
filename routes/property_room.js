const express = require("express");
const router = express();

const PropertyRoom = require("../controllers/property_room");

router.post("/property/room/create/", PropertyRoom.createPropertyRoom);
router.get("/property/room/get/", PropertyRoom.getPropertyRoom);
router.get("/property/room/get/:room_id", PropertyRoom.getPropertyRoomById);
router.put("property/room/update/:room_id", PropertyRoom.updatePropertyRoom);
router.delete("property/room/delete/:room_id", PropertyRoom.deletePropertyRoom);

module.exports = router;
