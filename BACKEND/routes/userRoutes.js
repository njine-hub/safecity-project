const express = require("express");
const router = express.Router();
const { reportIncident, getUserIncidents } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
router.post("/report", auth, reportIncident);
router.get("/incidents", auth, getUserIncidents);
module.exports = router;