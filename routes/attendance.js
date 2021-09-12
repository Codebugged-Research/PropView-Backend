const express = require("express");
var router = express();

const Attendance = require("../controllers/attendance");

//Create Attandance
router.post("/attendance/create", Attendance.createAttendance);

//gat all Attandance
router.post("/attendance/", Attendance.getAllAttendance);

//Get Attendance by attendance id
router.get("/attendance/:attendance_id", Attendance.getAttendanceById);

//Get Attendance with user_id
router.get("/attendance/user/:user_id", Attendance.getAttendanceByUserId);

//Get Attendance with user_id and date
router.get(
  "/attendance/user/:user_id/:date",
  Attendance.getAttendanceByUserIdAndDate
);

//Get Attendance with parent_id
router.get(
  "/attendance/manager/:parent_id",
  Attendance.getAttendanceByParentId
);

//Get Attendance with parent_id and date
router.get(
  "/attendance/manager/:parent_id/:date",
  Attendance.getAttendanceByParentIdAndDate
);

//Get All Attendance
router.get("/attendance/date/:date", Attendance.getAttendanceByDate);

//Update Attendance
router.put("/attendance/update/:attendance_id", Attendance.updateAttendance);

//Export Attendance
router.get("/attendanceexport", Attendance.exportAttendance);

module.exports = router;
