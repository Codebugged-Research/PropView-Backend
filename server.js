require("dotenv").config();
const mysql = require("mysql");

const express = require("express");
const app = express();

const http = require("http");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected!");
});

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Start a server
const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});

app.get("/", (req, res) => {
  res.send("PropView Backend");
});

app.get("/api/property-owner", (req, res) => {
  let sql = "SELECT * FROM property_owner";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: "Not Able to fetch!",
      });
    }
    res.json(result);
  });
});
