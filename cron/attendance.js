const cron = require("node-cron");
var dbConn = require("../config/database");

cron.schedule("0 0/30 * * * *", () => {
    console.log("Start");
})