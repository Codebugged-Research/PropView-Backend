const cron = require("node-cron");
const AttendanceModel = require("../models/attendance");

cron.schedule("0 0/30 * * * *", () => {
  console.log("Start");
  try {
    AttendanceModel.findAttendancesForCheck((err, attendances) => {
      attendances.map((attendance) => {
        const currentTime = Date.now();
        //TODO: Current Time
        if (attendance.punch_out === "--/--/-- -- : --" && currentTime === "") {
          const currentTime = Date.now();
          attendance.meter_out = attendance.meter_in;
          attendance.punch_out = currentTime;
          AttendanceModel.findByIdAndUpdate(
            attendance.attendance_id,
            attendance,
            (err, att) => {
              console.log("Done");
            }
          );
        } else {
          console.log("Else part!");
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
});
