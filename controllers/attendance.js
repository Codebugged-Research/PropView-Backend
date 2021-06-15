const AttendanceModel = require("../models/attendance");

exports.createAttendance = (req, res) => {
  const attendanceReqData = new AttendanceModel(req.body);
  AttendanceModel.saveAttendance(attendanceReqData, (err, attendance) => {
    if (err) {
      return res.status(400).json({
        success: "false",
      });
    }
    return res.json({
      success: "true",
      data: { attendance },
    });
  });
};

exports.getAttendanceById = (req, res) => {
  AttendanceModel.findAttendanceById(
    req.params.attendance_id,
    (err, attendance) => {
      if (err) {
        return res.status(400).json({
          error: "No Attendance List is found!",
        });
      }
      return res.json({
        count: attendance.length,
        data: {
          attendance,
        },
      });
    }
  );
};

exports.getAttendanceByUserId = (req, res) => {
  AttendanceModel.findAttendanceByUserId(
    req.params.user_id,
    (err, attendance) => {
      if (err) {
        return res.status(400).json({
          error: "No Attendance List is found!",
        });
      }
      return res.json({
        count: attendance.length,
        data: {
          attendance,
        },
      });
    }
  );
};

exports.getAttendanceByDate = (req, res) => {
  AttendanceModel.findAttendanceByDate(req.params.date, (err, attendance) => {
    if (err) {
      return res.status(400).json({
        error: "No Attendance List is found!",
      });
    }
    return res.json({
      count: attendance.length,
      data: {
        attendance,
      },
    });
  });
};

exports.getAllAttendance = (req, res) => {
  AttendanceModel.findAllAttendance((err, attendance) => {
    if (err) {
      return res.status(400).json({
        error: "No Attendance List is found!",
      });
    }
    return res.json({
      count: attendance.length,
      data: {
        attendance,
      },
    });
  });
};

exports.updateAttendance = (req, res) => {
  const attendanceReqData = new AttendanceModel(req.body);
  AttendanceModel.findByIdAndUpdate(
    req.params.attendance_id,
    attendanceReqData,
    (err, attendance) => {
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


