require("dotenv").config();

const express = require("express");
const app = express();

const http = require("http");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const propertyOwnerRoutes = require("./routes/property_owner");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", propertyOwnerRoutes);
app.use("/api", userRoutes);
app.use("/api", authRoutes);

//Start a server
const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});

app.get("/", (req, res) => {
  res.send("PropView Backend");
});
