const express = require("express");
const path = require("path");
const meetingRoutes = require("./routes/meeting.routes");

const app = express();

// ✅ FIX CORS (no npm needed)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') res.sendStatus(200);
    else next();
});

// ✅ Serve static files (test.html)
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use("/api/meetings", meetingRoutes);

module.exports = app;

