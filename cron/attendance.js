const cron = require("node-cron");
const AttendanceModel = require("../models/attendance");
const logger = require("../logger");

cron.schedule("*/1 * * * *", () => {
  logger.info("Start");
  try {
    AttendanceModel.findAttendancesForCheck((err, attendances) => {
      attendances.map((attendance) => {
        const currentTime = Date.now();
        const currentDate = new Date(currentTime);
        const punchInDate = new Date(attendance.punch_in);
        if (
          attendance.punch_out === "--/--/-- -- : --" &&
          currentDate.getDate() !== punchInDate.getDate()
        ) {
          const punchOutDate = new Date(`${punchInDate.getFullYear()}-${punchInDate.getMonth() + 1}-${punchInDate.getDate()} 23:55:00.000`);
          attendance.meter_out = attendance.meter_in + 1;
          attendance.punch_out = punchOutDate;
          attendance.work_hour = parseInt((punchOutDate.getTime() - punchInDate.getTime()) / 3600000, 10);
          attendance.diff_km = attendance.meter_out - attendance.meter_in;
          console.log("attendance");
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
