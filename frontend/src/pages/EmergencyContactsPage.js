import React from "react";

const EmergencyContactsPage = () => {
  const contacts = [
    {
      name: "GMU Police",
      number: "(703) 993-2810",
      description: "24/7 campus security",
    },
    {
      name: "Emergency Services",
      number: "911",
      description: "For life-threatening emergencies",
    },
    {
      name: "Health Services",
      number: "(703) 993-2831",
      description: "Student health center",
    },
    {
      name: "Counseling Services",
      number: "(703) 993-2380",
      description: "Mental health support",
    },
    {
      name: "Safe Ride",
      number: "(703) 993-2828",
      description: "Free campus transportation after dark",
    },
  ];

  return (
    <div>
      <h2>Emergency Contacts</h2>
      <p>Keep these important numbers handy for your safety on campus.</p>

      <div style={{ marginTop: "20px" }}>
        {contacts.map((contact, index) => (
          <div
            key={index}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <h3>{contact.name}</h3>
            <p>
              <strong>Phone:</strong> {contact.number}
            </p>
            <p>{contact.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Safety Tips</h3>
        <ul>
          <li>Always walk with a friend, especially at night</li>
          <li>Use the Safe Ride service when available</li>
          <li>Stay aware of your surroundings</li>
          <li>Keep your phone charged and accessible</li>
          <li>Report suspicious activity to campus police</li>
        </ul>
      </div>
    </div>
  );
};

export default EmergencyContactsPage;
