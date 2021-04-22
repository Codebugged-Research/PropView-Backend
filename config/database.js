const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
})

dbConn.connect((err) => {
  if(err) {
    console.log(err);
  }
  console.log("Connected!")
})

module.exports = dbConn;