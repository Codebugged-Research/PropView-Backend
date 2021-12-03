const AttendanceModel = require("../models/attendance");
const path = require("path");
const xl = require('excel4node');
var fs = require('fs');

exports.createAttendance = (req, res) => {
  const attendanceReqData = new AttendanceModel(req.body);
  AttendanceModel.saveAttendance(attendanceReqData, (err, attendance) => {
    if (err) {
      return res.status(400).json({
        success: err,
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

exports.getAttendanceByUserIdAndDate = (req, res) => {
  AttendanceModel.findAttendanceByUserIdAndDate(
    req.params.user_id,
    req.params.date,
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
  AttendanceModel.findAllAttendance(
    req.body.offset,
    req.body.limit,
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

exports.getAttendanceByParentId = (req, res) => {
  AttendanceModel.findAttendanceByParentId(
    req.body.id1,
    req.body.id2,
    req.body.id3,
    req.body.id4,
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

exports.getAttendanceByParentIdAndDate = (req, res) => {
  AttendanceModel.findAttendanceByParentIdAndDate(
    req.params.parent_id,
    req.params.date,
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

exports.exportAttendance = (req, res) => {
  AttendanceModel.exportCSV(req.params.start, req.params.end,(err, attendance) => {
    if (err) {
      res.status(500).send({ err });
    } else if (attendance.length > 0) {
      const wb = new xl.Workbook();
      const now = Date.now();
      const ws = wb.addWorksheet(now);
      const data = attendance;
      const headingColumnNames = [
        "attendance_id",
        "user_id",
        "parent_id",
        "punch_in",
        "punch_out",
        "meter_in",
        "meter_out",
        "work_hour",
        "date",
        "name",
        "email",
        "diff_km",
        "geo_in",
        "geo_out"
      ]
      //Write Column Title in Excel file
      let headingColumnIndex = 1;
      headingColumnNames.forEach(heading => {
        ws.cell(1, headingColumnIndex++)
          .string(heading)
      });
      //Write Data in Excel file
      let rowIndex = 2;
      data.forEach(record => {
        let columnIndex = 1;
        Object.keys(record).forEach(columnName => {
          ws.cell(rowIndex, columnIndex++)
            .string(record[columnName].toString())
        });
        rowIndex++;
      });
      wb.write('attendance.xlsx');
      res.setHeader('Content-Disposition', 'attachment; filename=' + req.params.filename + ".xlsx");
      res.setHeader('Content-Transfer-Encoding', 'binary');
      res.setHeader('Content-Type', 'application/octet-stream');
      res.sendFile(path.join(__dirname, '../', 'attendance.xlsx'), function (err) {
        if (err) {
          res.redirect('/500');
        } else {
          console.log('Sent:', " attendance.xlsx");
        }
      });
    }
    else {
      res.redirect('/404');
    }
  });
};
