const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/apiincidents", require("./routes/incidentRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.get("/", (req, res) => {
    res.send("SafeCity API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));