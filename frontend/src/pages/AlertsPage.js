import React, { useState, useEffect } from "react";

const AlertsPage = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch alerts from the backend
    fetch("http://localhost:5000/alerts")
      .then((response) => response.json())
      .then((data) => {
        setAlerts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching alerts:", error);
        setLoading(false);
      });
  }, []);

  const handleSubmitAlert = (e) => {
    e.preventDefault();
    const newAlert = {
      location: e.target.location.value,
      description: e.target.description.value,
      timestamp: new Date().toISOString(),
    };

    fetch("http://localhost:5000/alerts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlert),
    })
      .then((response) => response.json())
      .then((data) => {
        setAlerts([...alerts, data]);
        e.target.reset();
      })
      .catch((error) => console.error("Error submitting alert:", error));
  };

  return (
    <div>
      <h2>Campus Safety Alerts</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Report a Safety Issue</h3>
        <form onSubmit={handleSubmitAlert}>
          <div>
            <label>Location: </label>
            <input type="text" name="location" required />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Description: </label>
            <textarea name="description" required></textarea>
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>
            Submit Alert
          </button>
        </form>
      </div>

      <div>
        <h3>Recent Alerts</h3>
        {loading ? (
          <p>Loading alerts...</p>
        ) : alerts.length > 0 ? (
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>
                <strong>{alert.location}</strong> - {alert.description}
                <br />
                <small>{new Date(alert.timestamp).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No alerts reported yet.</p>
        )}
      </div>
    </div>
  );
};

export default AlertsPage;
