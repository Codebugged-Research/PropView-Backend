var dbConn = require("../config/database");
var func = require("node-mysql-nesting");

var Task = function (task) {
  this.task_id = task.task_id;
  this.category = task.category;
  this.task_name = task.task_name;
  this.task_desc = task.task_desc;
  this.start_date = task.start_date;
  this.start_time = task.start_time;
  this.assigned_to = task.assigned_to;
  this.transferred_to = task.transferred_to;
  this.property_ref = task.property_ref;
  this.end_date = task.end_date;
  this.end_time = task.end_time;
  this.task_status = task.task_status;
  this.created_at = task.created_at;
  this.updated_at = task.updated_at;
};

//* Create Task
Task.saveTask = (taskReqData, result) => {
  dbConn.query("INSERT INTO app_task SET ?", taskReqData, (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

//* Get Task  by task_id
Task.findTaskById = (task_id, result) => {
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "property_owner", col: "property_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];

  dbConn.query(
    {
      sql:
        "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN property_owner ON property_owner.owner_id = app_task.property_ref WHERE task_id=?",
      nestTables: true,
    },
    task_id,
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        var nestedRows = func.convertToNested(res, nestingOptions);
        result(null, nestedRows);
      }
    }
  );
};

//* Get All Task
Task.findTask = (result) => {
  var sql =
    "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN property_owner ON property_owner.owner_id = app_task.property_ref";
  var options = { sql: sql, nestTables: true };
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "property_owner", col: "property_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];
  dbConn.query(options, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  });
};

//* Get Task by assigned_to
Task.findTaskByUser = (assigned_to, result) => {
  var sql =
    "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN property_owner ON property_owner.owner_id = app_task.property_ref WHERE assigned_to=?";
  var options = { sql: sql, nestTables: true, };
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "property_owner", col: "property_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];
  dbConn.query(options, assigned_to, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  });
};

//* Update Task by task_id
Task.findByIdAndUpdate = (task_id, taskReqData, result) => {
  dbConn.query(
    "UPDATE app_task SET category=?, task_name=?, task_desc=?,  start_date=?, start_time=?, assigned_to=?, transferred_to=?,property_ref=?,end_date=?,end_time=?, task_status=?,created_at=?, updated_at=? WHERE task_id=?",
    [
      taskReqData.category,
      taskReqData.task_name,
      taskReqData.task_desc,
      taskReqData.start_date,
      taskReqData.start_time,
      taskReqData.assigned_to,
      taskReqData.transferred_to,
      taskReqData.property_ref,
      taskReqData.end_date,
      taskReqData.end_time,
      taskReqData.task_status,
      taskReqData.created_at,
      taskReqData.updated_at,
      task_id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//* Delete Task by task_id
Task.findByIdAndDelete = (task_id, result) => {
  dbConn.query("DELETE app_task WHERE task_id=?", task_id, (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

module.exports = Task;
