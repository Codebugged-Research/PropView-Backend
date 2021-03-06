const express = require("express");
var router = express();

const Task = require("../controllers/task");

router.post("/task/create", Task.createTask);

router.get("/task/:task_id", Task.getTask);

router.get("/tasks", Task.getAllTask);

router.get("/task/user/:assigned_to", Task.getAllTaskByUser);
router.get("/task/pending/:assigned_to", Task.getPendingTaskByUserId);
router.get("/task/team/:assigned_to", Task.getAllTaskWithoutUser);
router.post("/task/manager/", Task.getAllTaskByManger);

//new
router.post("/new/task/self", Task.getSelfTask);
router.post("/new/task/team", Task.getTeamTask);


router.put("/task/update/:task_id", Task.updateTaskById);

router.delete("/task/delete/:task_id", Task.deleteTaskById);

module.exports = router;
