const express = require("express");
var router = express();

const TaskCategory = require("../controllers/task_category");

router.post("/taskCategory/create", TaskCategory.createTaskCategory);

router.get("/taskCategories", TaskCategory.getAllTaskCategory);

router.get("/taskCategory/:task_category_id", TaskCategory.getTaskCategory);

router.put(
  "/taskCategory/update/:task_category_id",
  TaskCategory.updateTaskCategoryById
);

router.delete(
  "/taskCategory/:task_category_id",
  TaskCategory.deleteTaskCategoryById
);

module.exports = router;
