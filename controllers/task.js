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
        error: "No Task List is found!",
      });
    }
    return res.json({
      count: task.length,
      data: { task },
    });
  });
};

exports.getTask = (req, res) => {
  TaskModel.findTaskById(req.params.task_id, (err, task) => {
    if (err) {
      return res.status(400).json({
        error: "No Task List is found!",
      });
    }
    res.json(task[0]);
  });
};

exports.getAllTaskByUser = (req, res) => {
  TaskModel.findTaskByUser(req.params.assigned_to, (err, task) => {
    if (err) {
      return res.status(400).json({
        error: "No Task List is found!",
      });
    }
    res.json({
      count: task.length,
      data: { task },
    });
  });
};

exports.getAllTaskWithoutUser = (req, res) => {
  TaskModel.findTaskWithoutUserId(req.params.assigned_to, (err, task) => {
    if (err) {
      return res.status(400).json({
        error: "No Task List is found!",
      });
    }
    res.json({
      count: task.length,
      data: { task },
    });
  });
};

exports.getAllTaskByManger = (req, res) => {
  TaskModel.findEmployeeTaskByManager(req.body.id1,req.body.id2,req.body.id3,req.body.id4, (err, task) => {
    if (err) {
      return res.status(400).json({
        error: "No Task List is found!",
      });
    }
    res.json({
      count: task.length,
      data: { task },
    });
  });
};

exports.getPendingTaskByUserId = (req, res) => {
  TaskModel.findPendingTaskByUser(req.params.assigned_to, (err, task) => {
    if (err) {
      return res.status(400).json({
        error: "No Task List is found!",
      });
    }
    res.json({
      count: task.length,
      data: { task },
    });
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
