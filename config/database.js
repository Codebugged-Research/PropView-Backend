const mysql = require("mysql");

const { MYSQL_DB, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = require("./key");
 
const dbConn = mysql.createConnection({
  host: MYSQL_HOST,
  database: MYSQL_DB,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
});

dbConn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected!");
});

module.exports = dbConn;
