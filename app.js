const express = require("express");
const meetingRoutes = require("./routes/meeting.routes");

const app = express();

app.use(express.json());
app.use("/api/meetings", meetingRoutes);

module.exports = app;