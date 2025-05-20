import React, { useState } from 'react';

// Sample data for demonstration
const locationData = {
  India: {
    Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],


    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    Haryana: ["Gurgaon", "Faridabad", "Panipat", "Ambala"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    Karnataka: ["Bengaluru", "Mysuru", "Hubli", "Mangalore"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    Madhya_Pradesh: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Manipur: ["Imphal", "Thoubal", "Churachandpur"],
    Meghalaya: ["Shillong", "Tura", "Nongpoh"],
    Mizoram: ["Aizawl", "Lunglei", "Champhai"],
    Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"],
    Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
    Sikkim: ["Gangtok", "Namchi", "Gyalshing"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    Tripura: ["Agartala", "Udaipur", "Dharmanagar"],
    Uttar_Pradesh: ["Lucknow", "Kanpur", "Varanasi", "Agra"],
    Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Haldwani"],
    WestBengal: ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
    Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket"],

  },
  USA: {
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    Texas: ['Houston', 'Austin', 'Dallas'],
    Florida: ['Miami', 'Orlando', 'Tampa'],
  },
};

const LocationDropdown = ({ selectedCountry, setSelectedCountry,

  selectedState, setSelectedState,
  selectedCity, setSelectedCity }) => {

  const countries = Object.keys(locationData);
  const states = selectedCountry ? Object.keys(locationData[selectedCountry]) : [];
  const cities = selectedState ? locationData[selectedCountry][selectedState] : [];

  return (
    <div className="location-form">
      <h3>Select Location</h3>

      {/* Country Dropdown */}
      <div className="form-group">
        <label>Country:</label>
        <select
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedState('');
            setSelectedCity('');
          }}
        >
          <option value="">-- Select Country --</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      {states.length > 0 && (
        <div className="form-group">
          <label>State:</label>
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity('');
            }}
          >
            <option value="">-- Select State --</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* City Dropdown */}
      {cities.length > 0 && (
        <div className="form-group">
          <label>City:</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">-- Select City --</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Selected Values */}
      {selectedCountry && selectedState && selectedCity && (
        <p className="selected-summary">
          Selected: {selectedCity}, {selectedState}, {selectedCountry}
        </p>
      )}

      {/* CSS */}
      <style jsx>{`
    .location-form {
      max-width: 500px;
      margin: 30px auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
    }

    h3 {
      margin-bottom: 20px;
      font-size: 1.4rem;
      color: #333;
    }

    .form-group {
      margin-bottom: 16px;
    }

    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      color: #444;
    }

    select {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
      background-color: #fff;
    }

    .selected-summary {
      margin-top: 20px;
      font-size: 0.95rem;
      color: #555;
    }
  `}</style>
    </div>

  );
};

export default LocationDropdown;

