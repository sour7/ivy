import React, { useState } from "react";
import "./CityList.css"; // Import your CSS file here

function CityList({ cities }) {
  const [showAddress, setShowAddress] = useState(-1);

  const toggleAddress = (index) => {
    setShowAddress((prevState) => (prevState === index ? -1 : index));
  };

  return (
    <div className="city-list">
      {cities.map((city, index) => (
        <div key={index}>
          <button className="city" onClick={() => toggleAddress(index)}>
            {city.city}
          </button>
          {showAddress === index && (
            <p className="address">{city.address}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CityList;
