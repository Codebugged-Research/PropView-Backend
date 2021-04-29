const express = require("express");
var router = express();

const Task = require("../controllers/task");

router.post("/task/create");
router.get("/task/:task_id");
router.get("/tasks");
router.put("/task/update/:task_id");
router.delete("/task/delete/:task_id");

module.exports = router;
