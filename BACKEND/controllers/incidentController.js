const incident = require("../models/incident");

// Create incident
exports.createIncident = async (req, res) => {
  try {
    const incident = await incident.create({
      ...req.body,
      user: req.user.id
    });
    res.status(201).json(incident);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all incidents
exports.getIncidents = async (req, res) => {
  try {
    const data = await Incident.find().populate("user", "username");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
