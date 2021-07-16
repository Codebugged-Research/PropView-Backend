const cron = require("node-cron");
const AttendanceModel = require("../models/attendance");
const logger = require("./logger");

cron.schedule("0 0/15 * * * *", () => {
  logger.info("Start");
  try {
    AttendanceModel.findAttendancesForCheck((err, attendances) => {
      attendances.map((attendance) => {
        const currentTime = Date.now();
        const currentDate = new Date(currentTime);
        const punchInDate = new Date(attendance.punch_in);
        if (
          attendance.punch_out === "--/--/-- -- : --" &&
          currentDate.getDate() != punchInDate.getDate()
        ) {
          attendance.meter_out = attendance.meter_in;
          attendance.punch_out = currentDate;
          attendance.work_hour = currentDate.getTime() - punchInDate.getTime();
          attendance.diff_km = attendance.meter_out - attendance.meter_in;
          AttendanceModel.findByIdAndUpdate(
            attendance.attendance_id,
            attendance,
            (err, att) => {
              logger.warn(err);
            }
          );
        } else {
          const punchOutDate = new Date(attendance.punch_out);
          attendance.work_hour = punchOutDate.getTime() - punchInDate.getTime();
          attendance.diff_km = attendance.meter_out - attendance.meter_in;
          AttendanceModel.findByIdAndUpdate(
            attendance.attendance_id,
            attendance,
            (err, att) => {
              logger.warn(err);
            }
          );
        }
      });
    });
  } catch (error) {
    logger.info(error);
  }
});
