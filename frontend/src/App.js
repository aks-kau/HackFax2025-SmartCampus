import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MapPage from "./pages/MapPage";
import SchedulePage from "./pages/SchedulePage";
import AlertsPage from "./pages/AlertsPage";
import EmergencyContactsPage from "./pages/EmergencyContactsPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div
        className="app"
        style={{
          backgroundColor: "#ffe6f0",
          fontFamily: "Comic Sans MS",
          padding: "1rem",
        }}
      >
        <h1 style={{ color: "#ff69b4" }}>SmartCampus</h1>
        <h3 style={{ color: "#d63384" }}>George Mason's Map App</h3>
        <nav>
          <Link to="/">Map</Link> | <Link to="/schedule">Schedule</Link> |{" "}
          <Link to="/alerts">Alerts</Link> |{" "}
          <Link to="/contacts">Emergency Contacts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/contacts" element={<EmergencyContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
