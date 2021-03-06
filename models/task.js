var dbConn = require("../config/database");
var func = require("node-mysql-nesting");

// Approved/NotApproved/Completed

var Task = function (task) {
  this.task_id = task.task_id;
  this.category = task.category;
  this.task_name = task.task_name;
  this.task_desc = task.task_desc;
  this.start_dateTime = task.start_dateTime;
  this.assigned_to = task.assigned_to;
  this.property_ref = task.property_ref;
  this.property_owner_ref = task.property_owner_ref;
  this.property_name = task.property_name;
  this.end_dateTime = task.end_dateTime;
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
        { table: "tableproperty", col: "property_ref" },
        { table: "property_owner", col: "property_owner_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "tableproperty", pkey: "property_id" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];

  dbConn.query(
    {
      sql: "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN tableproperty ON tableproperty.property_id = app_task.property_ref JOIN property_owner ON property_owner.owner_id = app_task.property_owner_ref WHERE task_id=?",
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

//* Get Task  by assigned_to - Pending
Task.findPendingTaskByUser = (assigned_to, result) => {
  var sql =
    "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN tableproperty ON tableproperty.property_id = app_task.property_ref JOIN property_owner ON property_owner.owner_id = app_task.property_owner_ref WHERE assigned_to=? AND task_status='Pending' ORDER BY created_at DESC LIMIT 1000";
  var options = { sql: sql, nestTables: true };
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "tableproperty", col: "property_ref" },
        { table: "property_owner", col: "property_owner_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "tableproperty", pkey: "property_id" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];
  dbConn.query(options, assigned_to, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
    } else {
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  });
};

//* Get All Task
Task.findTask = (result) => {
  var sql =
    "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN tableproperty ON tableproperty.property_id = app_task.property_ref JOIN property_owner ON property_owner.owner_id = app_task.property_owner_ref ORDER BY created_at DESC LIMIT 500";
  var options = { sql: sql, nestTables: true };
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "tableproperty", col: "property_ref" },
        { table: "property_owner", col: "property_owner_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "tableproperty", pkey: "property_id" },
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

//* Get all task without userId
Task.findTaskWithoutUserId = (assigned_to, result) => {
  var sql =
    "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN tableproperty ON tableproperty.property_id = app_task.property_ref JOIN property_owner ON property_owner.owner_id = app_task.property_owner_ref EXCEPT  SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN tableproperty ON tableproperty.property_id = app_task.property_ref JOIN property_owner ON property_owner.owner_id = app_task.property_owner_ref WHERE assigned_to=? ORDER BY created_at DESC LIMIT 1000";
  var options = { sql: sql, nestTables: true };
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "tableproperty", col: "property_ref" },
        { table: "property_owner", col: "property_owner_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "tableproperty", pkey: "property_id" },
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

//* Get Task by assigned_to
Task.findTaskByUser = (assigned_to, result) => {
  var sql =
    "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN tableproperty ON tableproperty.property_id = app_task.property_ref JOIN property_owner ON property_owner.owner_id = app_task.property_owner_ref WHERE assigned_to=? ORDER BY created_at DESC LIMIT 200";
  var options = { sql: sql, nestTables: true };
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "tableproperty", col: "property_ref" },
        { table: "property_owner", col: "property_owner_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "tableproperty", pkey: "property_id" },
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

//* find task by manager id
Task.findEmployeeTaskByManager = (id1, id2, id3, id4, result) => {
  var sql =
    "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN tableproperty ON tableproperty.property_id = app_task.property_ref JOIN property_owner ON property_owner.owner_id = app_task.property_owner_ref WHERE app_task.assigned_to IN (SELECT user_id FROM tbl_users WHERE parent_id = ? OR parent_id like ? OR parent_id like ? OR parent_id like ?) ORDER BY created_at DESC LIMIT 1000";
  var options = { sql: sql, nestTables: true };
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "tableproperty", col: "property_ref" },
        { table: "property_owner", col: "property_owner_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "tableproperty", pkey: "property_id" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];
  dbConn.query(options, [id1, id2, id3, id4], (err, res) => {
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
    "UPDATE app_task SET category=?, task_name=?, task_desc=?,  start_dateTime=?, assigned_to=?, property_ref=?,property_name=?, end_dateTime=?,task_status=?,created_at=?, updated_at=? WHERE task_id=?",
    [
      taskReqData.category,
      taskReqData.task_name,
      taskReqData.task_desc,
      taskReqData.start_dateTime,
      taskReqData.assigned_to,
      taskReqData.property_ref,
      taskReqData.property_name,
      taskReqData.end_dateTime,
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

//* Get Self Pending Task
Task.findSelfTask = (assigned_to, task_type, result) => {
  var sql =
    "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN tableproperty ON tableproperty.property_id = app_task.property_ref JOIN property_owner ON property_owner.owner_id = app_task.property_owner_ref WHERE assigned_to=? AND task_status=? ORDER BY created_at DESC LIMIT 300";
  var options = { sql: sql, nestTables: true };
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "tableproperty", col: "property_ref" },
        { table: "property_owner", col: "property_owner_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "tableproperty", pkey: "property_id" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];
  dbConn.query(options, [assigned_to, task_type], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  });
};

Task.findTeamTask = (id1, id2, id3, id4, task_type, result) => {
  var sql =
    "SELECT * FROM app_task JOIN tbl_users ON app_task.assigned_to = tbl_users.user_id JOIN tableproperty ON tableproperty.property_id = app_task.property_ref JOIN property_owner ON property_owner.owner_id = app_task.property_owner_ref WHERE app_task.assigned_to IN (SELECT user_id FROM tbl_users WHERE parent_id = ? OR parent_id like ? OR parent_id like ? OR parent_id like ?) AND app_task.task_status=? ORDER BY created_at DESC LIMIT 300";
  var options = { sql: sql, nestTables: true };
  var nestingOptions = [
    {
      tableName: "app_task",
      pkey: "task_id",
      fkeys: [
        { table: "tbl_users", col: "assigned_to" },
        { table: "tableproperty", col: "property_ref" },
        { table: "property_owner", col: "property_owner_ref" },
      ],
    },
    { tableName: "tbl_users", pkey: "user_id" },
    { tableName: "tableproperty", pkey: "property_id" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];
  dbConn.query(options, [id1, id2, id3, id4, task_type], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  });
};
