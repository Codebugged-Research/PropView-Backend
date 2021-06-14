const express = require("express");
var router = express();

const Attendance = require("../controllers/attendance");

//Create Attandance
router.post("/attendance/create", Attendance.createAttendance);

//Get Attendance by attendance id
router.get("/attendance/:attendance_id", Attendance.getAttendanceById);

//Get Attendance with user_id
router.get("/attendance/user/:user_id", Attendance.getAttendanceByUserId);

//Get All Attendance
router.get("/attendance/date/:date", Attendance.getAttendanceByDate);

//Update Attendance
router.put("/attendance/update/attendance_id", Attendance.updateAttendance);

module.exports = router;
