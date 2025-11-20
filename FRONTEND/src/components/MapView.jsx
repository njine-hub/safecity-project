import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";

// Fix default marker icon issue in Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapView({ markers = [], setMarkers }) {
  // Optional: Click to add marker
  const ClickHandler = () => {
    useMapEvents({
      click(e) {
        if (setMarkers) setMarkers({ lat: e.latlng.lat, lng: e.latlng.lng });
      },
    });
    return null;
  };

  // Filter out invalid markers
  const validMarkers = markers.filter(
    (m) => m && typeof m.lat === "number" && typeof m.lng === "number"
  );

  if (validMarkers.length === 0) return <div>Loading map...</div>;

  return (
    <MapContainer center={validMarkers[0]} zoom={12} style={{ width: "100%", height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {validMarkers.map((m, i) => (
        <Marker key={i} position={m}>
          <Popup>Incident here</Popup>
        </Marker>
      ))}
      <ClickHandler />
    </MapContainer>
  );
}
