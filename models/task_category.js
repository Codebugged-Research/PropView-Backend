var dbConn = require("../config/database");

var TaskCategory = function (taskCategory) {
  this.task_category_id = taskCategory.task_category_id;
  this.category = taskCategory.category;
  this.created_at = taskCategory.created_at;
  this.updated_at = taskCategory.updated_at;
};

//* Get Task Category by task_id
TaskCategory.findTaskCategoryById = (task_category_id, result) => {
  dbConn.query(
    "SELECT * FROM app_task_category WHERE task_category_id=?",
    task_category_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//* Get All Task Category by task_id
TaskCategory.findTaskCategory = (result) => {
  dbConn.query("SELECT * FROM app_task_category", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

//* Create Task Category
TaskCategory.saveTaskCategory = (taskCategoryReqData, result) => {
  dbConn.query(
    "INSERT INTO app_task_category SET ?",
    taskCategoryReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//* Update Task by id
TaskCategory.findByIdAndUpdate = (
  task_category_id,
  taskCategoryReqData,
  result
) => {
  dbConn.query(
    "UPDATE app_task_category SET task_category_id=?, category=?, created_at=?, updated_at=? WHERE task_category_id=?",
    [
      taskCategoryReqData.task_id,
      taskCategoryReqData.category,
      taskCategoryReqData.created_at,
      taskCategoryReqData.updated_at,
      task_category_id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//* Delete Task by id
TaskCategory.findByIdAndDelete = (task_category_id, result) => {
  dbConn.query(
    "DELETE app_task_category WHERE task_category_id=?",
    task_category_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = TaskCategory;
