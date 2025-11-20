import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReportIncident from "./pages/ReportIncident";
import IncidentList from "./pages/IncidentList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import 'leaflet/dist/leaflet.css';


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportIncident />} />
        <Route path="/incidents" element={<IncidentList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
