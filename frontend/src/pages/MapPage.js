import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapPage = () => {
  const [center, setCenter] = useState({ lat: 38.8318, lng: -77.3074 }); // GMU coordinates

  const mapStyles = {
    height: "70vh",
    width: "100%",
  };

  const locations = [
    { name: "Johnson Center", position: { lat: 38.8318, lng: -77.3074 } },
    { name: "Fenwick Library", position: { lat: 38.8325, lng: -77.3065 } },
    { name: "Student Union Building", position: { lat: 38.831, lng: -77.308 } },
    { name: "Aquia Building", position: { lat: 38.8305, lng: -77.309 } },
    { name: "Merten Hall", position: { lat: 38.8295, lng: -77.31 } },
  ];

  return (
    <div>
      <h2>GMU Campus Map</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={mapStyles} zoom={16} center={center}>
          {locations.map((item) => (
            <Marker
              key={item.name}
              position={item.position}
              title={item.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      <div style={{ marginTop: "20px" }}>
        <h3>Safe Routes</h3>
        <p>
          Click on a location to see the safest route from your current
          location.
        </p>
      </div>
    </div>
  );
};

export default MapPage;
