const express = require("express");
const router = express.Router();

const RoomsToPropertyModel = require("../controllers/rooms_to_property");

router.post("/rooms/create", RoomsToPropertyModel.createRoomsToProperty);

router.get("/rooms", RoomsToPropertyModel.getRoomsToProperty);
router.get("/rooms/:id", RoomsToPropertyModel.getRoomsById);

router.get(
  "/rooms/property/:property_id",
  RoomsToPropertyModel.getRoomsToPropertyByPropertyId
);

router.put(
  "/rooms/update/:property_room_id",
  RoomsToPropertyModel.updateRoomsToProperty
);

router.delete(
  "/rooms/delete/:property_room_id",
  RoomsToPropertyModel.deleteRoomsToProperty
);

module.exports = router;
