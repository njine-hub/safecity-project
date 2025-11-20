import React, { useState, useEffect } from "react";
import MapView from "../components/MapView"; // Leaflet version
import ReportForm from "../components/ReportForm";

export default function ReportIncident() {
  // Load initial markers from localStorage or default
  const initialMarkers = JSON.parse(localStorage.getItem("incidents")) || [
    { lat: -1.286389, lng: 36.817223 },
  ];

  const [markers, setMarkers] = useState(initialMarkers);

  // Function to add a new marker
  const handleAddMarker = (latlng) => {
    const updated = [...markers, latlng];
    setMarkers(updated);
    localStorage.setItem("incidents", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Report Incident</h1>

      {/* Marquee */}
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="block bg-gray-200 p-2 font-semibold italic mb-6 rounded"
      >
        Report incidents here — Your report helps keep the community safe 🚨
      </marquee>

      {/* Clickable Map */}
      <MapView markers={markers} setMarkers={handleAddMarker} />

      {/* Optional Report Form */}
      <div className="mt-6">
        <ReportForm addMarker={handleAddMarker} />
      </div>
    </div>
  );
}
