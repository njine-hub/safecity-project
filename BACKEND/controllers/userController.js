const User = require("../models/User");
const Incident = require("../models/Incident");
// Report a new incident by user
exports.reportIncident = async (req, res) => {
    try {
        const incident = await Incident.create({
            ...req.body,
            user: req.user.id
        });
        res.status(201).json({ message: "Incident reported", incident });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all incidents reported by the logged-in user
exports.getUserIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find({ user: req.user.id });
        res.json(incidents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



