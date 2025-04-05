import React, { useState } from "react";

const SchedulePage = () => {
  const [schedule, setSchedule] = useState([]);
  const [newClass, setNewClass] = useState({
    name: "",
    location: "",
    time: "",
  });

  const handleAddClass = (e) => {
    e.preventDefault();
    setSchedule([...schedule, newClass]);
    setNewClass({ name: "", location: "", time: "" });
  };

  return (
    <div>
      <h2>Class Schedule</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Add a Class</h3>
        <form onSubmit={handleAddClass}>
          <div>
            <label>Class Name: </label>
            <input
              type="text"
              value={newClass.name}
              onChange={(e) =>
                setNewClass({ ...newClass, name: e.target.value })
              }
              required
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Location: </label>
            <input
              type="text"
              value={newClass.location}
              onChange={(e) =>
                setNewClass({ ...newClass, location: e.target.value })
              }
              required
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Time: </label>
            <input
              type="text"
              value={newClass.time}
              onChange={(e) =>
                setNewClass({ ...newClass, time: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>
            Add Class
          </button>
        </form>
      </div>

      <div>
        <h3>Your Schedule</h3>
        {schedule.length > 0 ? (
          <ul>
            {schedule.map((classItem, index) => (
              <li key={index}>
                <strong>{classItem.name}</strong> - {classItem.location} at{" "}
                {classItem.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No classes added yet.</p>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
