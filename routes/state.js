const express = require("express");
const router = express();

const StateController = require("../controllers/state.js");

router.get("/state/all/", StateController.getAllStates);
router.get("/state/:state_id", StateController.getStateById);

module.exports = router;
