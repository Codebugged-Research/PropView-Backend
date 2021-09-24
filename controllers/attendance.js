const AttendanceModel = require("../models/attendance");
const path = require("path");

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'yandex',
    host: 'smtp.yandex.com',
    auth: {
      user: 'propview.app@yandex.com',
      pass: 'hjwzvdzgzqnjymtu',
    },
  })
);

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
  AttendanceModel.exportCSV((err, attendance) => {
    // const mailOptions = {
    //   from: 'propview.app@yandex.com',
    //   to: 'majhisambit2@gmail.com',
    //   subject: 'Attendance Report',
    //   text: 'Find the attached document.',
    //   attachments: [
    //     {
    //       path: './attendance.csv'
    //     },
    //   ]
    // };
    // transporter.sendMail(mailOptions, (err, info) => {
    //   if (err) return res.status(400).json({
    //     "success": err,
    //   });
    //   else {
    //     res.json({ "success": true });
    //   }
    // });
    if (err) {
      if (err) return res.status(400).json({
        "err": err,
      });
    } else {
      var fileName = path.join(__dirname,'/attendance.csv');
      res.setHeader('Content-Disposition', 'attachment; filename=' + "attendance.csv");
      res.setHeader('Content-Transfer-Encoding', 'binary');
      res.setHeader('Content-Type', 'application/octet-stream')
      res.sendFile(fileName, function (err) {
        if (err) {
          res.status(400).json({
            "err": err,
          });
        } else {
          console.log('Sent:', fileName);
        }
      });
    }
  });
};
