require("dotenv").config();

const logger = require("./logger");

const express = require("express");
const app = express();

require("./config/firebase");
const http = require("http");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const cityRoutes = require("./routes/city");
const stateRoutes = require("./routes/state");
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
const propertyFacilityRoutes = require("./routes/property_facility");
const issueTableRoutes = require("./routes/issue_table");
const roomsPropertyRoutes = require("./routes/rooms_to_property");
const subRoomPropertyRoutes = require("./routes/subrooms_to_property");
const tenantRoutes = require("./routes/tenant");
const tenantFamilyRoutes = require("./routes/tenant_family");
const regularInspectionRoutes = require("./routes/regular_inspection");
const regularInspectionRowRoutes = require("./routes/regular_inspection_row");
const billTypesRoutes = require("./routes/bill_types");
const billPropertyRoutes = require("./routes/bill_property");
const propertyAssignmentRoutes = require("./routes/property_assignment");

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/version", (req, res) => {
  res.json("1.0.33+34");
});

app.use('/404', express.static('public/404'));
app.use('/500', express.static('public/500'));

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", stateRoutes);
app.use("/api", cityRoutes);
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
app.use("/api", propertyFacilityRoutes);
app.use("/api", issueTableRoutes);
app.use("/api", roomsPropertyRoutes);
app.use("/api", subRoomPropertyRoutes);
app.use("/api", tenantRoutes);
app.use("/api", tenantFamilyRoutes);
app.use("/api", regularInspectionRoutes);
app.use("/api", regularInspectionRowRoutes);
app.use("/api", billTypesRoutes);
app.use("/api", billPropertyRoutes);
app.use("/api", propertyAssignmentRoutes);

//reprot to pdf
app.set('view engine', 'ejs');

app.get('/pdf/:id', async (req, res) => {
  res.render('export', { id: req.params.id });
});
app.get('/pdf/regular/:id', async (req, res) => {
  res.render('export2', { id: req.params.id });
});

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
