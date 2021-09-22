var dbConn = require("../config/database");
var func = require("node-mysql-nesting");
const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("./controllers/attendance.csv");

var Attendance = function (attendance) {
  this.attendance_id = attendance.attendance_id;
  this.user_id = attendance.user_id;
  this.parent_id = attendance.parent_id;
  this.punch_in = attendance.punch_in;
  this.punch_out = attendance.punch_out;
  this.meter_in = attendance.meter_in;
  this.meter_out = attendance.meter_out;
  this.work_hour = attendance.work_hour;
  this.date = attendance.date;
  this.name = attendance.name;
  this.email = attendance.email;
  this.diff_km = attendance.diff_km;
  this.geo_in = attendance.geo_in;
  this.geo_out = attendance.geo_out;
};

//* Create Attendance
Attendance.saveAttendance = (attendanceReqData, result) => {
  dbConn.query(
    "INSERT INTO app_attendance SET ?",
    attendanceReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//* Get Attendance by attendance_id
Attendance.findAttendanceById = (attendance_id, result) => {
  var nestingOptions = [
    {
      tableName: "app_attendance",
      pkey: "attendance_id",
      fkeys: [{ table: "tbl_users", col: "user_id" }],
    },
    { tableName: "tbl_users", pkey: "user_id" },
  ];

  dbConn.query(
    {
      sql: "SELECT * FROM app_attendance JOIN tbl_users ON app_attendance.user_id = tbl_users.user_id WHERE app_attendance.attendance_id=? ",
      nestTables: true,
    },
    attendance_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  );
};

//* Get all Attendance Details
Attendance.findAllAttendance = (offset, limit, result) => {
  var nestingOptions = [
    {
      tableName: "app_attendance",
      pkey: "attendance_id",
      fkeys: [{ table: "tbl_users", col: "user_id" }],
    },
    { tableName: "tbl_users", pkey: "user_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM app_attendance JOIN tbl_users ON app_attendance.user_id = tbl_users.user_id ORDER BY punch_in DESC LIMIT ?,? ",
      nestTables: true,
    },
    [offset, limit],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  );
};

//* Get Attendance by user_id
Attendance.findAttendanceByUserId = (user_id, result) => {
  var nestingOptions = [
    {
      tableName: "app_attendance",
      pkey: "attendance_id",
      fkeys: [{ table: "tbl_users", col: "user_id" }],
    },
    { tableName: "tbl_users", pkey: "user_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM app_attendance JOIN tbl_users ON app_attendance.user_id = tbl_users.user_id WHERE app_attendance.user_id=? ORDER BY punch_in DESC",
      nestTables: true,
    },
    user_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  );
};

//* Get Attendance by user_id and date
Attendance.findAttendanceByUserIdAndDate = (user_id, date, result) => {
  var nestingOptions = [
    {
      tableName: "app_attendance",
      pkey: "attendance_id",
      fkeys: [{ table: "tbl_users", col: "user_id" }],
    },
    { tableName: "tbl_users", pkey: "user_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM app_attendance JOIN tbl_users ON app_attendance.user_id = tbl_users.user_id WHERE app_attendance.user_id=? AND app_attendance.date=?",
      nestTables: true,
    },
    [user_id, date],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  );
};

//* Get Attendance by date
Attendance.findAttendanceByDate = (date, result) => {
  var nestingOptions = [
    {
      tableName: "app_attendance",
      pkey: "attendance_id",
      fkeys: [{ table: "tbl_users", col: "user_id" }],
    },
    { tableName: "tbl_users", pkey: "user_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM app_attendance JOIN tbl_users ON app_attendance.user_id = tbl_users.user_id WHERE app_attendance.date=?",
      nestTables: true,
    },
    date,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  );
};

//* Get Attendance by parent_id
Attendance.findAttendanceByParentId = (parent_id, result) => {
  var nestingOptions = [
    {
      tableName: "app_attendance",
      pkey: "attendance_id",
      fkeys: [{ table: "tbl_users", col: "user_id" }],
    },
    { tableName: "tbl_users", pkey: "user_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM app_attendance JOIN tbl_users ON app_attendance.user_id = tbl_users.user_id WHERE app_attendance.parent_id=? ORDER BY punch_in",
      nestTables: true,
    },
    parent_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  );
};

//* Get Attendance by parent_id and date
Attendance.findAttendanceByParentIdAndDate = (parent_id, date, result) => {
  var nestingOptions = [
    {
      tableName: "app_attendance",
      pkey: "attendance_id",
      fkeys: [{ table: "tbl_users", col: "user_id" }],
    },
    { tableName: "tbl_users", pkey: "user_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM app_attendance JOIN tbl_users ON app_attendance.user_id = tbl_users.user_id WHERE app_attendance.parent_id=? AND app_attendance.date=?",
      nestTables: true,
    },
    [parent_id, date],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  );
};

//* Update Attandance
Attendance.findByIdAndUpdate = (attendance_id, attendanceReqData, result) => {
  dbConn.query(
    "UPDATE app_attendance SET attendance_id=?, user_id=?, parent_id=?, punch_in=?, punch_out=?, meter_in=?, meter_out=?, work_hour=?, date=?, name=?, email=?, diff_km=?, geo_in=?, geo_out=? WHERE app_attendance.attendance_id=?",
    [
      attendanceReqData.attendance_id,
      attendanceReqData.user_id,
      attendanceReqData.parent_id,
      attendanceReqData.punch_in,
      attendanceReqData.punch_out,
      attendanceReqData.meter_in,
      attendanceReqData.meter_out,
      attendanceReqData.work_hour,
      attendanceReqData.date,
      attendanceReqData.name,
      attendanceReqData.email,
      attendanceReqData.diff_km,
      attendanceReqData.geo_in,
      attendanceReqData.geo_out,
      attendance_id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

Attendance.findAttendancesForCheck = (result) => {
  var nestingOptions = [
    {
      tableName: "app_attendance",
      pkey: "attendance_id",
      fkeys: [{ table: "tbl_users", col: "user_id" }],
    },
    { tableName: "tbl_users", pkey: "user_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM app_attendance JOIN tbl_users ON app_attendance.user_id = tbl_users.user_id ORDER BY punch_in DESC",
      nestTables: true,
    },
    (err, res) => {
      if (err) {
        result(null, err);
      }
      var nestedRows = func.convertToNested(res, nestingOptions);
      result(null, nestedRows);
    }
  );
};

Attendance.exportCSV = (result) => {
  const currentTime = Date.now();
  const currentDate = new Date(currentTime);
  var date =
    "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();
  dbConn.query(
    {
      sql: "SELECT * FROM app_attendance WHERE date LIKE '%?'",
      date,
      nestTables: false,
    },
    (err, res) => {
      if (err) {
        result(null, err);
      }
      const jsonData = JSON.parse(JSON.stringify(res));
      fastcsv
        .write(jsonData, { headers: true })
        .on("finish", function () {
          console.log("Write to attendance.csv successfully!");
          result(null, jsonData);
        })
        .pipe(ws);
    }
  );
};

module.exports = Attendance;
