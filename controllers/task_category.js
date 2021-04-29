const TaskCategoryModel = require("../models/task_category");

exports.createTaskCategory = (req, res) => {
  const taskCategoryReqData = new TaskCategoryModel(req.body);
  TaskCategoryModel.saveTaskCategory(
    taskCategoryReqData,
    (err, taskCategory) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      return res.json({
        success: "true",
        data: taskCategory,
      });
    }
  );
};

exports.getAllTaskCategory = (req, res) => {
  TaskCategoryModel.findTaskCategory((err, taskCategory) => {
    if (err) {
      return res.status(400).json({
        error: "No Task Category List is found!",
      });
    }
    res.json(taskCategory);
  });
};

exports.getTaskCategory = (req, res) => {
  TaskCategoryModel.findTaskCategoryById(
    req.params.task_category_id,
    (err, taskCategory) => {
      if (err) {
        return res.status(400).json({
          error: "No Task Category List is found!",
        });
      }
      res.json(taskCategory[0]);
    }
  );
};

exports.updateTaskCategoryById = (req, res) => {
  const taskCategoryReqData = new TaskCategoryModel(req.body);
  TaskCategoryModel.findByIdAndUpdate(
    req.params.task_category_id,
    taskCategoryReqData,
    (err, taskCategory) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      res.json({
        success: "true",
      });
    }
  );
};

exports.deleteTaskCategoryById = (req, res) => {
  TaskCategoryModel.findByIdAndDelete(
    req.params.task_category_id,
    (err, taskCategory) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      res.json({
        success: "true",
      });
    }
  );
};
