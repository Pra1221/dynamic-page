const express = require("express");
const app = express();
const path = require("path");

// Middleware
app.use(express.static("public"));

// Dynamic API route
app.get("/api/time", (req, res) => {
    res.json({
        message: "Hello from AWS EC2 🚀",
        time: new Date().toLocaleString()
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});