require("dotenv").config();

const express = require("express");
const app = express();

const morgan = require("morgan");
const http = require("http");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const propertyOwnerRoutes = require("./routes/property_owner");
const taskCategoryRoutes = require("./routes/task_category");
const taskRoutes = require("./routes/task");

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", propertyOwnerRoutes);
app.use("/api", taskCategoryRoutes);
app.use("/api", taskRoutes);

//Start a server
const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});

app.get("/", (req, res) => {
  res.send("PropView Backend");
});
