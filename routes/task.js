const express = require("express");
var router = express();

const Task = require("../controllers/task");

router.post("/task/create", Task.createTask);
router.get("/task/:task_id", Task.getTask);
router.get("/tasks", Task.getAllTask);
router.get("/task/user/:assigned_to", Task.getAllTaskByUser)
router.put("/task/update/:task_id", Task.updateTaskById);
router.delete("/task/delete/:task_id", Task.deleteTaskById);

module.exports = router;
