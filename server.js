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

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", propertyRoutes);
app.use("/api", propertyOwnerRoutes);
app.use("/api", userPropertyRoutes);
app.use("/api", taskCategoryRoutes);
app.use("/api", taskRoutes);
app.use("/api", notificationRoutes);
app.use("/api", uploadImageRoutes);

//Start a server

const PORT = process.env.PORT;

const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
  console.log(`HTTP Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("PropView Backend");
});
