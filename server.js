require("dotenv").config();

const express = require("express");
const app = express();

require("./config/firebase");
const http = require("http");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const propertyRoutes = require("./routes/property");
const propertyOwnerRoutes = require("./routes/property_owner");
const userPropertyRoutes = require("./routes/user_property");
const taskCategoryRoutes = require("./routes/task_category");
const taskRoutes = require("./routes/task");
const notificationRoutes = require("./routes/notification");
const uploadImageRoutes = require("./routes/upload-image");
const attendanceRoutes = require("./routes/attendance");
const propertyRoomRoutes = require("./routes/property_room");
const inspectionTypeRoutes = require("./routes/inspection_type");
const inspectionRoutes = require("./routes/inspection");
const issueRoutes = require("./routes/issue");
const issueTableRoutes = require("./routes/issue_table");
const roomsPropertyRoutes = require("./routes/rooms_to_property");
const subRoomPropertyRoutes = require("./routes/subrooms_to_property");

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/version", (req, res) => {
  res.json("1.0.5+6");
});

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", propertyRoutes);
app.use("/api", propertyOwnerRoutes);
app.use("/api", userPropertyRoutes);
app.use("/api", taskCategoryRoutes);
app.use("/api", taskRoutes);
app.use("/api", notificationRoutes);
app.use("/api", uploadImageRoutes);
app.use("/api", attendanceRoutes);
app.use("/api", propertyRoomRoutes);
app.use("/api", inspectionTypeRoutes);
app.use("/api", inspectionRoutes);
app.use("/api", issueRoutes);
app.use("/api", issueTableRoutes);
app.use("/api", roomsPropertyRoutes);
app.use("/api", subRoomPropertyRoutes);

//Cron Job
require("./cron/attendance");

//Start a server
const PORT = process.env.PORT;

const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
  console.log(`HTTP Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("PropView Backend");
});
