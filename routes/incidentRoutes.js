const express = require("express");
const router = express.Router();
const { createIncident, getIncidents } = require("../controllers/incidentController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createIncident);
router.get("/", getIncidents);

module.exports = router;
