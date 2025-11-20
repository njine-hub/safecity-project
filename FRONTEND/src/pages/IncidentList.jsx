import React, { useEffect, useState } from "react";

export default function IncidentList() {
  const defaultIncidents = [
    { id: 1, title: "Fire Outbreak", description: "A fire broke out in downtown." },
    { id: 2, title: "Flooding", description: "Heavy rains caused local flooding." },
    { id: 3, title: "Road Accident", description: "Multiple vehicles collided." },
  ];

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    // Read incidents from localStorage
    const saved = JSON.parse(localStorage.getItem("incidents"));

    if (saved && Array.isArray(saved) && saved.length > 0) {
      setIncidents(saved);
    } else {
      setIncidents(defaultIncidents);
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        All Reported Incidents
      </h1>

      {/* Marquee — keep as-is */}
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="block bg-gray-200 p-4 font-bold text- lg italic mb-6 rounded"
      >
        Live Feed: Stay alert. Newly reported incidents will appear here as soon as they are verified ⚠️🚨
      </marquee>

      <div className="grid md:grid-cols-3 gap-6">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow p-4"
          >
            <h2 className="font-semibold text-lg">{incident.title}</h2>
            <p className="text-gray-600 mt-2">{incident.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
