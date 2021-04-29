const TaskModel = require("../models/task");

exports.createTask = (req, res) => {
  const taskReqData = new TaskModel(req.body);
  TaskModel.saveTask(taskReqData, (err, task) => {
    if (err) {
      return res.status(400).json({
        success: "false",
      });
    }
    return res.json({
      success: "true",
      data: task,
    });
  });
};

exports.getAllTask = (req, res) => {
  TaskModel.findTask((err, task) => {
    if (err) {
      return res.status(400).json({
        error: "No Task Category List is found!",
      });
    }
    res.json(task);
  });
};

exports.getTask = (req, res) => {
  TaskModel.findTaskById(req.params.task_id, (err, task) => {
    if (err) {
      return res.status(400).json({
        error: "No Task Category List is found!",
      });
    }
    res.json(task[0]);
  });
};

exports.updateTaskById = (req, res) => {
  const taskReqData = new TaskModel(req.body);
  TaskModel.findByIdAndUpdate(req.params.task_id, taskReqData, (err, task) => {
    if (err) {
      return res.status(400).json({
        success: "false",
      });
    }
    res.json({
      success: "true",
    });
  });
};

exports.deleteTaskById = (req, res) => {
  TaskModel.findByIdAndDelete(req.params.task_id, (err, task) => {
    if (err) {
      return res.status(400).json({
        success: "false",
      });
    }
    res.json({
      success: "true",
    });
  });
};
