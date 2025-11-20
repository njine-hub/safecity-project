import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side links */}
      <div className="nav-left">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/report" className="nav-link">Report Incident</Link>
        <Link to="/incidents" className="nav-link">Incidents</Link>
      </div>

      {/* Center title */}
      <div className="nav-title">SafeCity</div>

      {/* Right side links */}
      <div className="nav-right">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    </nav>
  );
}
